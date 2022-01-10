define(function(require, exports, module) {

    var $ = require("jquery");
    var Alpaca = $.alpaca;

    Alpaca.Fields.CustomSoccerField = Alpaca.Fields.SelectField.extend({

        getFieldType: function() {
            return "custom-soccer";
        },

        setup: function()
        {
            // set up base select field
            this.base();
            
            // load sample "soccer-games-2017.json" from data source
            this.options["dataSource"] = function(callback) {

                $.ajax({
                    "type": "GET",
                    "url": "https://samples.cloudcms.com/soccer-games-2017.json",
                    "contentType": "application/json",
                    "cache": false,
                    "success": function(json) {
                        var values = [];
                        for (var i = 0; i < json.rounds.length; i++) {
                            for (var j = 0; j < json.rounds[i].matches.length; j++)
                            {
                                var match = json.rounds[i].matches[j];
                                
                                var text = match.date + " - " + match.team1.name + " vs. " + match.team2.name;
                                var value = match.date + "-" + match.team1.code + "-" + match.team2.code;
                                
                                values.push({
                                    "text": text,
                                    "value": value
                                });                                
                            }
                        }
                        callback(values);
                    }
                });
            };
        }
    });

    Alpaca.registerFieldClass("custom-soccer", Alpaca.Fields.CustomSoccerField);

});

