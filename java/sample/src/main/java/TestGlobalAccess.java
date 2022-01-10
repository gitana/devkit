
/*
    Test access to multiple projects using single set of api access keys
 */
import java.util.HashMap;
import java.util.List;

import com.fasterxml.jackson.databind.node.ObjectNode;

import org.apache.commons.lang.RandomStringUtils;
import org.gitana.exception.HttpException;
import org.gitana.platform.client.Gitana;
import org.gitana.platform.client.branch.Branch;
import org.gitana.platform.client.datastore.DataStore;
import org.gitana.platform.client.node.BaseNode;
import org.gitana.platform.client.node.Node;
import org.gitana.platform.client.platform.Platform;
import org.gitana.platform.client.platform.PlatformDataStore;
import org.gitana.platform.client.project.Project;
import org.gitana.platform.client.repository.Repository;
import org.gitana.platform.client.support.DriverContext;
import org.gitana.platform.client.support.Response;
import org.gitana.platform.support.QueryBuilder;
import org.gitana.platform.support.ResultMap;
import org.gitana.util.JsonUtil;

public class TestGlobalAccess {
    public final Gitana gitana = new Gitana();
    public Platform platform = gitana.authenticate();

    public static void main(String[] args) {
        TestGlobalAccess testGitana = new TestGlobalAccess();
        testGitana.run();
    }

    public void run() {
        // read list of projects on the platform
        List<Project> projectList = platform.listProjects().asList();
        for (Project project : projectList) {
            System.out.println(String.format("\nProject id: \"%s\", title: \"%s\", description: \"%s\"", project.getId(),
                    project.getTitle(), project.getDescription() == null ? "" : project.getDescription()));
            List<PlatformDataStore> datastores = project.getStack().listDataStores().asList();
            for (DataStore dataStore : datastores) {
                if (dataStore.getTypeId().equalsIgnoreCase("repository")) {
                    // this is the content repository for this project
                    // System.out.println(String.format(
                    //         "Datastore id: \"%s\", title: \"%s\", type: \"%s\", full json:\n%s", dataStore.getId(),
                    //         dataStore.getTitle(), dataStore.getTypeId(), dataStore.toJSONString(true)));
                    System.out.println(String.format(
                        "Datastore id: \"%s\", title: \"%s\", type: \"%s\"", dataStore.getId(),
                        dataStore.getTitle(), dataStore.getTypeId()));

                    Repository repo = (Repository) dataStore;

                    for (Branch branch : repo.listBranches().asList()) {
                        System.out.println(String.format(" > Branch id: \"%s\", title: \"%s\", type: \"%s\"",
                                branch.getId(), branch.getTitle(), branch.getType()));

                        // query the branch
                        System.out.println(" >> Query the branch");
                        final ObjectNode query = QueryBuilder.start("createdByTest").is("true").get();
                        ResultMap<BaseNode> nodes = branch.queryNodes(query);
                        System.out.println(String.format(" >>> Query hits: %s", nodes.asList().size()));
                        for (BaseNode node : nodes.values()) {
                            System.out.println(String.format(" >>>> title: %s, _doc: %s", node.getTitle(), node.getId(),
                                    node.getTypeQName()));
                        }

                        // create a node
                        System.out.println(" >> Create a node on the branch");
                        try {
                            Node node = (Node)branch.createNode(createNodeObject(RandomStringUtils.randomAlphanumeric(10).concat(".txt"), "n:node", null, "val1"));
                            System.out.println(String.format(" >>>> created node: title: %s, _doc: %s", node.getTitle(), node.getId(),
                                    node.getTypeQName()));
                        } catch(Exception e) {
                            HttpException apiException = (HttpException)e.getCause();
                            System.out.println(String.format(" >>>> ERROR creating node %s %s\t\t%s", apiException.getStatusCode(), apiException.toString(), apiException.getUrl()));
                        }

                        // query the branch again
                        System.out.println(" >> Query the branch for new node");
                        final ObjectNode query2 = QueryBuilder.start("prop1").is("val1").and("createdByTest").is("true").get();
                        ResultMap<BaseNode> nodes2 = branch.queryNodes(query2);
                        System.out.println(String.format(" >>> Query hits: %s", nodes2.asList().size()));
                        for (BaseNode node2 : nodes2.values()) {
                            System.out.println(String.format(" >>>> title: %s, _doc: %s", node2.getTitle(), node2.getId(),
                                    node2.getTypeQName()));
                        }

                        // delete the nodes created by this test from the branch
                        System.out.println(" >> Delete nodes from the branch");
                        for (BaseNode node2 : nodes2.values()) {
                            System.out.println(String.format(" >>>> Deleting node. _doc: %s", node2.getId()));
                            try {
                                node2.delete();
                                System.out.println(String.format(" >>>> Deleted node. _doc: %s", node2.getId()));
                            } catch(Exception e) {
                                HttpException apiException = (HttpException)e.getCause();
                                System.out.println(String.format(" >>>> ERROR deleting node %s %s\t\t%s", apiException.getStatusCode(), apiException.toString(), apiException.getUrl()));
                            }
                        }
                    }
                }
            }
        }

        // search for text accross all projects
        // there is no object model for this call so use the driver object to make an
        // api call directly
        System.out.println("\nSearch all projects (master branch only)");
        Response response = DriverContext.getDriver().getRemote().get("/projects/search",
                new HashMap<String, String>() {
                    {
                        put("text", "test");
                    }
                });
        System.out.println(String.format("Search hits: %s", response.getListTotalRows()));
        // response.getListTotalRows()
        for (ObjectNode respondeNode : (List<ObjectNode>)response.getObjectNodes()) {
            System.out.println(String.format(" > title: %s, _doc: %s", respondeNode.get("title"), respondeNode.get("_doc"), respondeNode.get("_type")));
        }

    }

    private static ObjectNode createNodeObject(final String title, final String type, final String filePath, final String propVal) {
        ObjectNode object = JsonUtil.createObject();
        object.put("title", title);
        object.put("_type", type);
        if(null != filePath && !filePath.isEmpty()) {
            object.put("_filePath", filePath);
        }
        object.put("prop1", null != propVal ? propVal : "");
        object.put("createdByTest", "true");

        return object;
    }
}