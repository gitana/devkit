import com.fasterxml.jackson.databind.node.ObjectNode;
import junit.framework.TestCase;
import org.gitana.platform.client.Driver;
import org.gitana.platform.client.node.BaseNode;
import org.gitana.platform.client.node.Node;
import org.gitana.platform.client.support.DriverContext;
import org.gitana.platform.client.support.Remote;
import org.gitana.platform.client.support.Response;
import org.gitana.platform.support.QueryBuilder;
import org.gitana.platform.support.ResultMap;
import org.junit.Test;

import java.io.InputStream;

public class Tests extends TestCase {
    @Test
    public void testGitana() throws Exception {
        TestGitana testGitana = new TestGitana();
        testGitana.run();
    }
}