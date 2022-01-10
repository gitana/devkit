define(function (require, exports, module) {

    var Registry = require("medialink-builder/medialink-registry");
    var MediaLinkBuilder = require("medialink-builder/medialink-builder");

    return Registry.registerMediaLinkClass(MediaLinkBuilder.extend({

        /**
         * @override
         */
        getSchema: function () {
            return {

            };
        },

        /**
         * @override
         */
        getOptions: function () {
            return {

            };
        },

        /**
         * @override
         */
        generateLink: function (control, template, callback) {
            // main element
            var el = MediaLinkBuilder.prototype.generateLink(control, template, callback);
            var mediaId = control.childrenByPropertyId["mediaId"].getValue();
            var src = "//cdn.thinglink.me/api/image/" + mediaId + "/1024/10/scaletowidth#tl-" + mediaId + ";";
            el.attr("src", src);
            el.attr("style", "max-width: 100%;");
            el.attr("className", "alwaysThinglink");

            // div tag
            var div = document.createElement('div');
            div.innerHTML = "<script async charset=\"utf-8\" src=\"//cdn.thinglink.me/jse/embed.js\"></script>";
            el.push(div);

            // script tag
            var script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('src', 'http://mysite/my.js');
            el.push(script);

            callback(null, el);

            /**
             * If you hope to wrap el in a div and have some attributes set,
             * instead of directly firing callback with el,
             * do the following:
             */
            // var wrap = $("<div/>");
            // wrap.attr("class", "my-wrapper-class");  // any attribute that you want
            // wrap.append(el);

            // callback(null, wrap);
        },

        /**
         * @override
         */
        canHandle: function (mediaType) {
            return mediaType == "thinglink";
        }

    }));

});