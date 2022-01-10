<?php
    namespace CloudCMS\SDK;
    
    require __DIR__ . '/vendor/autoload.php';
    
    include __DIR__ . '/config.php';

    use League\OAuth2\Client\Provider\GenericProvider;

    // build an OAuth 2.0 provider
    $provider = new GenericProvider([
        'clientId'                => $clientKey,    // The client ID assigned to you by the provider
        'clientSecret'            => $clientSecret, 
        'urlAuthorize'            => 'https://api.cloudcms.com/oauth/authorize',
        'urlAccessToken'          => 'https://api.cloudcms.com/oauth/token',
        'redirectUri'             => 'http://example.com/your-redirect-url/',    
        'urlResourceOwnerDetails' => 'https://api.cloudcms.com'
    ]);

    // connect to Cloud CMS using OAuth 2.0 "password" flow
    // other flows are supported as well including authorization_code and implicit
    try 
    {    
        echo "\n";
        echo "Connecting to Cloud CMS...\n";
        
        // do the handshake
        $accessToken = $provider->getAccessToken('password', [
            'username' => $username,
            'password' => $password
        ]);
        // yay, we succesfully logged in...
        echo "Success!\n\n";
        
        echo "Access Token: " . $accessToken->getToken() . "\n";
        echo "Refresh Token " . $accessToken->getRefreshToken() . "\n";
        echo "Expires: ". $accessToken->getExpires() . "\n";
    }

    catch (\League\OAuth2\Client\Provider\Exception\IdentityProviderException $e) 
    {
        echo "Failed to connect!\n";        
        
        // Failed to get the access token
        exit($e->getMessage());
    }
?>