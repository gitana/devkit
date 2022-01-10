define(function (require, exports, module) {

    var Ratchet = require("ratchet/ratchet");
    var UI = require("ui");
    var $ = require("jquery");

    // register the "create-product" action
    return Ratchet.Actions.register("create-product", UI.AbstractIFrameAction.extend({

        defaultConfiguration: function () {
            var config = this.base();

            config.title = "Create Product";
            config.iconClass = "glyphicon glyphicon-pencil";
            
            // the location of the "overlay app"
            config.src = "http://localhost:3000/create";
            
            // specify iframe width and height
            config.iframeWidth = "100%";
            config.iframeHeight = "720px";

            return config;
        },

        /**
         * Pass over the "username" to the form endpoint so that it can be stored on the form
         */
        beforeExecute: function(config, actionContext)
        {
            // always call the base method
            this.base(config, actionContext);
            
            // add parameters to query string
            var parameters = {};
            parameters["username"] = actionContext.observable("user").get().name;
            
            this.appendToQueryString(config, parameters);
        },

        /**
         * Override so that we can handle our custom "save" event otherwise call down to base implementation.
         *
         * @param actionContext
         * @param div
         * @param e
         * @param callback
         * @returns {*}
         */
        handleEvent: function(actionContext, div, e, callback)
        {
            var self = this;

            if (e.type === "save") {
                return self.handleSaveEvent(actionContext, div, e, callback);
            }

            this.base(actionContext, div, e, callback);
        },

        /**
         * Handle the save event to create the new product node.
         *
         * @param actionContext
         * @param div
         * @param e
         * @param callback
         * @returns {*}
         */
        handleSaveEvent: function(actionContext, div, e, callback)
        {
            var parentPath = actionContext.observable("path").get();
            var branch = actionContext.observable("branch").get();

            var formData = e.data;

            // convert to object
            var obj = {};
            for (var i = 0; i < formData.length; i++) {
                var name = formData[i].name;
                var value = formData[i].value;

                obj[name] = value;
            }

            if (parentPath) {
                obj._parentFolderPath = parentPath;
            }

            return Chain(branch).createNode(obj).then(function() {
                callback();
            });
        }

    }));
});

