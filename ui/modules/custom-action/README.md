# custom-action module

In CloudCMS, [Actions](https://www.cloudcms.com/documentation/actions) are units of work that are typically fired off as a result of an event handler or listener. Not only do we provide a lot of actions, but also allow you to customize existing actions by overriding them with [Modules](https://www.cloudcms.com/documentation/modules). This sample module shows you how to override an existing action in CloudCMS.

Here we use action ```add-attachment``` as an example. Below is the screenshot of the form before and after implementing this module:

Before: 
![Before](https://github.com/gitana/sdk/blob/master/ui/modules/custom-action/screenshots/before.png)

After: 
![After](https://github.com/gitana/sdk/blob/master/ui/modules/custom-action/screenshots/after.png)

As you can see, we've customized it so that the Attachment ID field is readonly, and there's a helper text under the Upload File field.

## Installation

Deploy this module to your Cloud CMS Platform (Manage Platform > Modules > Register New Module)

    ID: custom-action
    Source Type: GitHub
    Source URL: https://github.com/gitana/sdk.git
    Path: /ui/modules/custom-action/