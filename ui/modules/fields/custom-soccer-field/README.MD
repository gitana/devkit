Custom "Soccer Game" Select Field
==================================================

This field renders a select control that lets you pick from 2017 English Premiership matches.

It pulls down JSON data from a publicly available data set:
http://samples.cloudcms.com/soccer-games-2017.json

And then converts those into enumerated text/value pairs to populate the underlying select control.

To use this field, you must deploy it to your platform and then include it into your forms.
The field type is "custom-soccer".

## Installation

Deploy this module to your Cloud CMS Platform (Platform Settings > Modules)

    ID: custom-soccer-field
    TITLE: Custom Soccer Field
    Source Type: GitHub
    Source URL: https://github.com/gitana/sdk
    Path: /ui/modules/fields/custom-soccer-field

A sample definition (sample-definition.json) and a sample form (sample-form.json) are provided.
