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

public class TestNodeRead {
    private static final String REPOSITORY_TITLE = "Harry Test 3 'content' repository"; // <-- replace with your content repository name
    private static final ObjectNode repoQuery = QueryBuilder.start(Repository.FIELD_TITLE).is(REPOSITORY_TITLE).get();
    public final Gitana gitana = new Gitana();
    public Platform platform = gitana.authenticate();
    public Repository repository = platform.queryRepositories(repoQuery).asList().get(0);
    public Branch master = repository.readBranch("master");

    public static void main(String[] args) {
        TestNodeRead testGitana = new TestNodeRead();
        testGitana.run();
    }

    public void run() {
        // create a node
        this.master.createNode(TestNodeRead.createNodeObject("test.txt", "n:node", "/folder1", "file1.txt", "test content", "tag1"));

        // now query
        final ObjectNode query = QueryBuilder.start("tagProp").is("tag1").get();
        ResultMap<BaseNode> nodes = this.master.queryNodes(query);
        System.out.println(String.format(" >>> Query hits: %s", nodes.asList().size()));
        for (BaseNode node : nodes.values()) {
            System.out.println(String.format(" >>>> title: %s, _doc: %s", node.getTitle(), node.getId(), node.getTypeQName()));
        }
    }

    private static ObjectNode createNodeObject(final String title, final String type, final String parentFolderPath, final String fileName, final String body, final String tag) {
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
        object.put("tagProp", tag);

        return object;
    }
}