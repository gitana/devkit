<?php
    namespace CloudCMS\SDK;
    
    include __DIR__ . '/driver.php';

    $authorJson = json_decode(file_get_contents(__DIR__ . '/author.json'), true);

    $authorImage = file_get_contents(__DIR__ . '/j.k.rowling.jpg');

    $url = "https://api.cloudcms.com/repositories/{$repositoryId}/branches/{$branchId}/nodes";

    try 
    {
        # create the node
        $options['body'] = json_encode($authorJson);
        $options['headers']['Content-Type'] = 'application/json;charset=UTF-8';
        $options['headers']['Authorization'] = 'bearer ' .$accessToken;

        $request = $provider->getAuthenticatedRequest(
            'POST',
            $url,
            $_SESSION['access_token'],
            $options
        );

        $response = $provider->getResponse($request);

        echo "\n Congratulations. You successfully created your own content in Cloud CMS!" . "\n\n";

        $nodeId = $response[_doc];

        print_r($response);
        echo "\n";

        # upload binary file as default attachment of the newly created node
        $options['body'] = $authorImage;
        $options['headers']['Content-Type'] = 'image/jpeg';
        $options['headers']['Authorization'] = 'bearer ' .$accessToken;


        $Imageurl = "https://api.cloudcms.com/repositories/{$repositoryId}/branches/{$branchId}/nodes/{$nodeId}/attachments/default";
        
        $request2 = $provider->getAuthenticatedRequest(
            'POST',
            $Imageurl,
            $_SESSION['access_token'],
            $options
        );

        $response2 = $provider->getResponse($request2);

        echo "\n Congratulations. You successfully uploaded attachment of the newly created node" . "\n\n";

        print_r($response2);

        echo "\n";
    } 
    catch (\League\OAuth2\Client\Provider\Exception\IdentityProviderException $e) 
    {
        echo "Failed to connect!\n";        
        
        // Failed to get the access token
        exit($e->getMessage());
    }
?>


