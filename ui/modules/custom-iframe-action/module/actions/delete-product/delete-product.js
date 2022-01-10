define(function(require, exports, module) {
    var Ratchet = require("ratchet/ratchet");
    var UI = require("ui");
    var $ = require("jquery");

    // register the "delete-product" action
    return Ratchet.Actions.register("delete-product", UI.AbstractIFrameAction.extend({

        defaultConfiguration: function() {
            var config = this.base();

            config.title = "Delete Product";
            config.iconClass = "glyphicon glyphicon-pencil";

            // the location of the "overlay app"
            config.src = "http://localhost:3000/delete";

            // specify iframe width and height
            config.iframeWidth = "100%";
            config.iframeHeight = "220px";

            return config;
        },

        /**
         * Override so that we can handle our custom "delete" event otherwise call down to base implementation.
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

            if (e.type === "delete") {
                return self.handleDeleteEvent(actionContext, div, e, function(redirectUrl) {
                    self.handleEvent(actionContext, div, { "type": "redirect", "url": redirectUrl }, callback);
                });
            }

            this.base(actionContext, div, e, callback);
        },

        /**
         * Handle the delete event to delete an existing product node.
         *
         * @param actionContext
         * @param div
         * @param e
         * @param callback
         * @returns {*}
         */
        handleDeleteEvent: function(actionContext, div, e, callback)
        {
            var document = actionContext.observable("document").get();
            var project = actionContext.observable("project").get();

            // find the parent folder
            var parentId = null;
            Chain(document).incomingAssociations("a:child").each(function() {
                parentId = this.source;
            }).then(function() {

                return Chain(document).del().then(function() {

                    var redirectUrl = "/#/projects/" + project._doc + "/documents";
                    if (parentId) {
                        redirectUrl += "/" + parentId + "/browse";
                    }

                    callback(redirectUrl);
                });

            });
        }

    }));
});
