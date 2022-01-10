import junit.framework.TestCase;
import org.junit.Test;

public class GlobalAccessTest extends TestCase {
    @Test
    public void testGlobalAccess() throws Exception {
        TestGlobalAccess testGlobalAccess = new TestGlobalAccess();
        testGlobalAccess.run();
    }
}