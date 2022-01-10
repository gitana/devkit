<?php
    namespace CloudCMS\SDK;
    
    require __DIR__ . '/vendor/autoload.php';

    include __DIR__ . '/driver.php';
    
    include __DIR__ . '/config.php';

    $url = "http://api.cloudcms.com/repositories/{$repositoryId}/branches/{$branchId}/nodes/{$nodeId}";

    $request = $provider->getAuthenticatedRequest(
        'GET',
        $url,
        $accessToken
    );         

    $response = $provider->getResponse($request);

    echo "\n";

    echo "The _doc of node is -  " . $response[_doc] ."\n";

    echo "The Node is of type -  " . $response[_type] ."\n";

    echo "The title of node is -  " . $response[title] ."\n";

    echo "Body -  " . $response[body] ."\n";
?>


