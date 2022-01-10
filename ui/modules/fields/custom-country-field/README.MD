Custom "Country" Select Field
==================================================

This is a custom form field which pulls back a JSON array of country information (name and code).  It extends a core Select
field and auto-populates the enumerated value set with the JSON array results.

To use this field, you must deploy it to your platform and then include it into your forms.
The field type is "custom-country".

## Installation

Deploy this module to your Cloud CMS Platform (Platform Settings > Modules)

    ID: custom-country-field
    TITLE: Custom Country Field
    Source Type: GitHub
    Source URL: https://github.com/gitana/sdk
    Path: /ui/modules/fields/custom-country-field

A sample definition (sample-definition.json) and a sample form (sample-form.json) are provided.
