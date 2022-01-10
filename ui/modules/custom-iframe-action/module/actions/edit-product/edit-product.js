define(function(require, exports, module) {
    var Ratchet = require("ratchet/ratchet");
    var UI = require("ui");
    var $ = require("jquery");

    // register the "edit-product" action
    return Ratchet.Actions.register("edit-product", UI.AbstractIFrameAction.extend({

        defaultConfiguration: function() {
            var config = this.base();

            config.title = "Edit Product";
            config.iconClass = "glyphicon glyphicon-pencil";

            // the location of the "overlay app"
            config.src = "http://localhost:3000/edit";

            // specify iframe width and height
            config.iframeWidth = "100%";
            config.iframeHeight = "680px";

            return config;
        },

        /**
         * Override so that we can handle our custom "update" event otherwise call down to base implementation.
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

            if (e.type === "update") {
                return self.handleUpdateEvent(actionContext, div, e, function() {
                    self.handleEvent(actionContext, div, { "type": "reload" }, callback);
                });
            }

            this.base(actionContext, div, e, callback);
        },

        /**
         * Handle the update event to update the new product node.
         *
         * @param actionContext
         * @param div
         * @param e
         * @param callback
         * @returns {*}
         */
        handleUpdateEvent: function(actionContext, div, e, callback)
        {
            var document = actionContext.observable("document").get();

            var formData = e.data;

            // convert to object
            for (var i = 0; i < formData.length; i++) {
                var name = formData[i].name;
                var value = formData[i].value;

                document[name] = value;
            }

            return Chain(document).update().then(function() {
                callback();
            });
        }

    }));
});
