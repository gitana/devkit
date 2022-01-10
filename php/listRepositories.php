<?php
    
    include __DIR__ . '/driver.php';

    try 
    {    
        $url = 'https://api.cloudcms.com/repositories/';
        
        // request a list of repositories from Cloud CMS
        $request = $provider->getAuthenticatedRequest(
            'GET',
            $url,
            $accessToken
        );            
        $repositories = $provider->getResponse($request);

        echo "\n";
        
        // print out info about the repositories
        echo "\n";
        echo "Showing: " . sizeof($repositories["rows"]) . " of: " . $repositories["total_rows"] . " total repositories\n";
        for ($i = 0; $i < sizeof($repositories["rows"]); $i++)
        {
            $repository = $repositories["rows"][$i];
            $repositoryTitle = ($repository["title"] ? $repository["title"] : $repository["_doc"]);
            
            echo $i . "> " . $repositoryTitle . " (" . $repository["_doc"] . ")\n";
        }
        
        // inspect the raw array
        // var_dump($repositories);
        echo "\n";
    } 
    catch (\League\OAuth2\Client\Provider\Exception\IdentityProviderException $e) 
    {
        echo "Failed to connect!\n";        
        
        // Failed to get the access token
        exit($e->getMessage());
    }
?>