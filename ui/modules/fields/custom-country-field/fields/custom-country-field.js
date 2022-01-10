define(function(require, exports, module) {

    var $ = require("jquery");
    var Alpaca = $.alpaca;

    Alpaca.Fields.CustomCountryField = Alpaca.Fields.SelectField.extend({

        getFieldType: function() {
            return "custom-country";
        },

        setup: function()
        {
            // set up base select field
            this.base();
            
            // load sample "countries.json" from data source
            this.options["dataSource"] = function(callback) {

                $.ajax({
                    "type": "GET",
                    "url": "https://samples.cloudcms.com/countries.json",
                    "contentType": "application/json",
                    "cache": false,
                    "success": function(array) {
                        var values = [];
                        for (var i = 0; i < array.length; i++) {
                            values.push({
                                "text": array[i].name,
                                "value": array[i].code
                            });
                        }                        
                        callback(values);
                    }
                });
            };
        }
    });

    Alpaca.registerFieldClass("custom-country", Alpaca.Fields.CustomCountryField);

});

