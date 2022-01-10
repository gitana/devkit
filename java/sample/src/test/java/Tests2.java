import junit.framework.TestCase;
import org.junit.Test;

public class Tests2 extends TestCase {
    @Test
    public void testFileFolder() throws Exception {
        TestNodeRead testFileFolder = new TestNodeRead();
        testFileFolder.run();
    }
}