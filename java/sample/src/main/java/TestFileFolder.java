/*
    Test File/Folder operations
 */
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.gitana.platform.client.Driver;
import org.gitana.platform.client.Gitana;
import org.gitana.platform.client.attachment.Attachment;
import org.gitana.platform.client.branch.Branch;
import org.gitana.platform.client.node.Association;
import org.gitana.platform.client.node.BaseNode;
import org.gitana.platform.client.node.Node;
import org.gitana.platform.client.platform.Platform;
import org.gitana.platform.client.repository.Repository;
import org.gitana.platform.client.support.DriverContext;
import org.gitana.platform.client.support.Remote;
import org.gitana.platform.client.support.Response;
import org.gitana.platform.services.association.Direction;
import org.gitana.platform.support.QName;
import org.gitana.platform.support.QueryBuilder;
import org.gitana.platform.support.ResultMap;
import org.gitana.util.JsonUtil;

import java.io.InputStream;
import java.util.Iterator;
import java.util.List;

public class TestFileFolder {
    private static final String REPOSITORY_TITLE = "Harry Test 3 'content' repository"; // <-- replace with your content repository name
    private static final ObjectNode repoQuery = QueryBuilder.start(Repository.FIELD_TITLE).is(REPOSITORY_TITLE).get();
    public final Gitana gitana = new Gitana();
    public Platform platform = gitana.authenticate();
    public Repository repository = platform.queryRepositories(repoQuery).asList().get(0);
    public Branch master = repository.readBranch("master");

    public static void main(String[] args) {
        TestFileFolder testGitana = new TestFileFolder();
        testGitana.run();
    }

    public void run() {
        // create a file
        Node file1 = (Node)this.master.createNode(TestFileFolder.createNodeObject(null, "n:node", "/folder1", "file1.txt", "file1 content"));
        Node file2 = (Node)this.master.createNode(TestFileFolder.createNodeObject(null, "n:node", "/folder1/folder2", "file2.txt", "file2 content"));
        Node file3 = (Node)this.master.createNode(TestFileFolder.createNodeObject(null, "n:node", "/folder1/folder2", "file3.txt", "file3 content"));

        // list contents of root folder
        ObjectNode rootFolderTree = this.master.rootNode().fileFolderTree();
        Iterator<JsonNode> iterator = rootFolderTree.get("children").iterator();
        Node folder1 = null;
        while(iterator.hasNext()) {
            JsonNode jsonNode = iterator.next();
            System.out.println("_doc: " + jsonNode.get("_doc").textValue() + "  title: " + jsonNode.get("title").textValue());
            Node node = (Node)this.master.readNode(jsonNode.get("_doc").textValue());
            if(node.get("title").equals("folder1")) {
                folder1 = node;
                System.out.println("Found folder1 node: " + folder1.toString());
            }
        }

        // list contents of a non-root folder
        if(folder1 == null) {
            System.out.println("folder1 node not found");
        }
        else
        {
            System.out.println("children of " + folder1.get("title"));

            for(Association association : folder1.associations(QName.create("a:child"), Direction.OUTGOING).asList()) {
                Node childNode = (Node)this.master.readNode(association.getTargetNodeId());
                System.out.println("_doc: " + childNode.getId() + "  Title: " + childNode.getTitle());
            }
        }
    }

    private static ObjectNode createNodeObject(final String title, final String type, final String parentFolderPath, final String fileName, final String body) {
        ObjectNode object = JsonUtil.createObject();
        object.put("title", title);
        object.put("_type", type);
        if(null != fileName) {
            // if no _fileName then title is used
            object.put("_fileName", fileName);
        }
        if(null != parentFolderPath) {
            object.put("_parentFolderPath", parentFolderPath);
        }
        object.put("body", body);

        return object;
    }
}