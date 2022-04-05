define(function (require, exports, module) {
    var $ = require("jquery");
    var Ratchet = require("ratchet/web");
    var OneTeam = require("oneteam");
    var TemplateHelperFactory = require("template-helper");

    var ContentInstancesGadget = require("app/gadgets/project/content/content-instances");

    return Ratchet.GadgetRegistry.register("custom-content-instances", ContentInstancesGadget.extend({

        doGitanaQuery: function (context, model, searchTerm, query, pagination, callback) {
            this.base(context, model, ['title', 'description', 'firstName', 'lastName'], query, pagination, function (resultMap) {
                var array = resultMap.asArray();

                model.size = resultMap.size();
                model.totalRows = resultMap.totalRows();

                callback(resultMap);
            });
        }
    }));
});