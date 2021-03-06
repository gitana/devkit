define(function(require, exports, module) {

    //require("css!./account-list.css");

    var Ratchet = require("ratchet/web");
    var DocList = require("ratchet/dynamic/doclist");
    var OneTeam = require("oneteam");
    var bundle = Ratchet.Messages.using();

    return Ratchet.GadgetRegistry.register("sample-ui-account-list", DocList.extend({

        configureDefault: function()
        {
            this.base();

            this.config({
                "observables": {
                    "query": "account-list_query",
                    "sort": "account-list_sort",
                    "sortDirection": "account-list_sortDirection",
                    "searchTerm": "account-list_searchTerm",
                    "selectedItems": "account-list_selectedItems"
                }
            });
        },

        setup: function()
        {
            this.get("/projects/{projectId}/branches/{branchId}/sample-ui-account-list", this.index);
        },

        entityTypes: function()
        {
            return {
                "plural": "Accounts",
                "singular": "Account"
            };
        },

        doclistDefaultConfig: function()
        {
            var config = this.base();
            config.columns = [];

            return config;
        },

        doGitanaQuery: function(context, model, searchTerm, query, pagination, callback)
        {
            var self = this;
            var user = self.observable("user").get();
            var branch = self.observable("branch").get();

            query = {};

            if (OneTeam.isEmptyOrNonExistent(query) && searchTerm)
            {
                query = OneTeam.searchQuery(searchTerm, ["title", "clientid"]);
            }
            query._type = "cxindex:company";
            // if (user) {
            //     query._system = {
            //         modified_by: user.name
            //     }
            // }

            pagination.sort = {
                "_system.modified_on.ms": -1
            };

            Chain(branch).queryNodes(query, pagination).then(function () {
                callback(this);
            });
        },

        _linkUri: function(row, model, context)
        {
            var self = this;
            
            var project = self.observable("project").get();
            var branch = self.observable("branch").get();

            return "/#/projects/" + project._doc + "/branches/" + branch._doc + "/documents/" + row._doc + "/properties";
        },

        iconClass: function(row)
        {
            return "form-icon-32";
        },

        customizeActionContext: function(actionContext, model, button)
        {
               if (!actionContext.model) { actionContext.model = {}; }
               actionContext.model.typeQName = "cxindex:company";
               actionContext.model.formKey = "master";
        },

        columnValue: function(row, item, model, context)
        {
            var self = this;
            var projectId = self.observable("project").get().getId();
            var clientid = row.clientid;

            var value = this.base(row, item);

            if (item.key === "account") {

                var linkUri = this._linkUri(row, model, context);

                value =  "<h2 class='list-row-info title'>";
                value += "<a href='" + linkUri + "'>";
                value += OneTeam.filterXss(row.title || row.clientid) + " (" + OneTeam.filterXss(row.clientid) + ")";
                value += "</a>";
                value += "</h2>";

                // summary
                // var summary = "";
                // summary += "Definition: " + OneTeam.filterXss(row.definition.title) + " (<a href='#/projects/" + projectId + "/documents/" + definitionId + "'>" + OneTeam.filterXss(row.definition.qname) + "</a>)";
                // value += "<p class='list-row-info summary'>" + summary + "</p>";
                if (row.__system()) {
                    var systemMetadata = row.__system();

                    var date;
                    date = new Date(systemMetadata.modified_on.ms);
                    value += "<p class='list-row-info modified'>Modified " + bundle.relativeDate(date);
                    value += " by " + OneTeam.filterXss(systemMetadata.modified_by) + "</p>";

                    date = new Date(systemMetadata.created_on.ms);
                    value += "<p class='list-row-info created'>Created " + bundle.relativeDate(date);
                    value += " by " + OneTeam.filterXss(systemMetadata.created_by) + "</p>";
                }
            } else if (item.key === "steps") {
                var engagement = row.engagement || [];
                var completed = 0;
                for(i = 0; i < engagement.length; i++) {
                    if (engagement[i].completed) {
                        completed++;
                    }
                }
                value = "<p>Completed " + completed + " of " + engagement.length + " engagement steps</p>";
            } else if (item.key === "resources") {
                var resources = row.resources || [];
                value = resources.length + " resource(s) attached";
                // for(i = 0; i < resources.length; i++) {
                    // value += "<li><p class='list-row-info>" + OneTeam.filterXss(resources[i].ResourceTitle) + "</p></li>";
                //     value += "<p class='list-row-info>" + OneTeam.filterXss(resources[i].ResourceTitle) + "</p>";
                // }
                // value += "</ul>";
            }

            return value;
        }

    }));

});