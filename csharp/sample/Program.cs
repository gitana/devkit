using CloudCMS;
using Xunit;

IPlatform platform = await CloudCMSDriver.ConnectAsync("gitana.json");
 
IRepository repository = await platform.ReadRepositoryAsync("4f2b3fc5132e02668ffb");
if (repository == null)
{
    throw new SystemException("Unable to read repository: 4f2b3fc5132e02668ffb");
}
 
IBranch branch = await repository.ReadBranchAsync("master");
if (branch == null)
{
    throw new SystemException("Unable to read master branch");
}
 
List<IBaseNode> results = await branch.SearchNodesAsync("test");
Console.WriteLine("The size was: " + results.Count);
