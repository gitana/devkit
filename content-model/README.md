# content model samples
Library of Content Model definitions and forms

Definition and Form JSON examples to demonstrate the capabilities of
Cloud CMS Content Modeling

Use when scaffolding new Content Models or as a reference when developing
a custom Content Model.

# import definitions
You can import these definitions into your own Cloud CMS Project

## upload the entire content model:
    1. create cloudcms-login.sh
        copy cloudcms-login-template.sh to cloudcms-login.sh
        Replace cloudcms-subdomain, username and password in cloudcms-login.sh with your own
    2. replace REPOSITORY_ID in run deploy-content-model.sh with your own
        From Cloud CMS, go to your project
        From Manage Project / Stack, select content repository
        The url contains the repository ID
        copy the repository id to deploy-content-model.sh line #11 where is sets REPOSITORY_ID="your-repostiory-id-here"
    3. run the script:
        ./deploy-content-model.sh
