import com.fasterxml.jackson.databind.node.ObjectNode;
import org.apache.commons.io.IOUtils;
import org.apache.http.HttpResponse;
import org.apache.commons.io.IOUtils.*;
import org.gitana.platform.client.Driver;
import org.gitana.platform.client.Gitana;
import org.gitana.platform.client.attachment.Attachment;
import org.gitana.platform.client.branch.Branch;
import org.gitana.platform.client.node.BaseNode;
import org.gitana.platform.client.node.Node;
import org.gitana.platform.client.platform.Platform;
import org.gitana.platform.client.repository.Repository;
import org.gitana.platform.client.support.DriverContext;
import org.gitana.platform.client.support.Remote;
import org.gitana.platform.client.support.Response;
import org.gitana.platform.support.QName;
import org.gitana.platform.support.QueryBuilder;
import org.gitana.platform.support.ResultMap;
import org.gitana.util.JsonUtil;

import java.io.IOException;
import java.io.InputStream;

public class TestGitana {
    private static final String REPOSITORY_TITLE = "import test 'content' repository"; // <-- replace with your content repository name
    private static final ObjectNode repoQuery = QueryBuilder.start(Repository.FIELD_TITLE).is(REPOSITORY_TITLE).get();
    public final Gitana gitana = new Gitana();
    public Platform platform = gitana.authenticate();
    public Repository repository = platform.queryRepositories(repoQuery).asList().get(0);
    public Branch master = repository.readBranch("master");

    public static void main(String[] args) {
        TestGitana testGitana = new TestGitana();
        testGitana.run();
    }

    public void run() {
        Node readThisNodeAgainLater = (Node)this.master.createNode(TestGitana.createNodeObject("hello 1", "n:node", null, "hello world 1"));
        this.master.createNode(TestGitana.createNodeObject("hello 2", "n:node", null, "hello world 2"));

        // property query (using mongodb)
        final ObjectNode nodeTitleQuery = QueryBuilder.start(Node.FIELD_TITLE).is("hello 1").get();
        ResultMap<BaseNode> nodes = this.master.queryNodes(nodeTitleQuery);
        for (BaseNode node : nodes.values()) {
            System.out.println("title query: Node id (._doc): " + node.getId());
        }

        // text search (using elasticsearch)
        nodes = this.master.searchNodes("world");
        for (BaseNode node : nodes.values()) {
            System.out.println("text search: Node id (._doc): " + node.getId());
        }

        // call an API endpoint directly
        Response response = DriverContext.getDriver().getRemote().get("/repositories/" + this.repository.getId() + "/branches/" + this.master.getId() + "/nodes/" + readThisNodeAgainLater.getId());
        BaseNode newNode = DriverContext.getDriver().getFactory().node(this.master, response);
        System.out.println("call API directly to read node. id (._doc): " + newNode.getId() + ", title: " + newNode.getTitle());

        //
        // upload an attachment

        //
        // node thumbnail
        String contentId = "6315a212e56a31966234"; // <-- hard coded node id goes here. upload an image or other file and get it's node id

        InputStream inputStream = null;

        Driver driver = DriverContext.getDriver();
        Remote remote = driver.getRemote();

        String attachmentId = null;

        if (attachmentId == null)
        {
            attachmentId = "default";
        }

//        HttpResponse httpResponse = DriverContext.getDriver().getRemote().getEx("/repositories/" + testGitana.repository.getId() + "/branches/" + testGitana.master.getId() + "/nodes/" + contentId + "/preview/thumb320");
//        try {
//            inputStream = httpResponse.getEntity().getContent();
//            // do something with this input stream (like write it as a file to a local disk cache)
//        } catch (IOException e) {
//            e.printStackTrace();
//        } finally {
//            IOUtils.closeQuietly(inputStream);
//        }
//        System.out.println();

        //
        // attachments
        Node nodeWithAttachment = (Node)this.master.readNode(contentId);
        System.out.println(nodeWithAttachment.toJSON());

        ResultMap<Attachment> attachments = nodeWithAttachment.listAttachments();
        Attachment defaultAttachment = attachments.get("default");
        System.out.println(defaultAttachment.getFilename());
        System.out.println(defaultAttachment.getContentType());
        System.out.println(defaultAttachment.getLength());
        System.out.println(defaultAttachment.toString());
    }

    private static ObjectNode createNodeObject(final String title, final String type, final String filePath, final String body) {
        ObjectNode object = JsonUtil.createObject();
        object.put("title", title);
        object.put("_type", type);
        if(null != filePath) {
            object.put("_filePath", filePath);
        }
        object.put("body", body);

        return object;
    }
}