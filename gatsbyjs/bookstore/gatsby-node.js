const path = require("path");

exports.createPages = ({graphql, actions}) => {
    const { createPage } = actions;

    return graphql(`
        {
            allStoreBook {
                nodes {
                    _doc
                }
            }
        }
    `).then(result => {
        result.data.allStoreBook.nodes.forEach(book => {
            console.log("Create " + book._doc);
            createPage({
                path: `book/${book._doc}`,
                component: path.resolve("./src/templates/BookPage.js"),
                context: {
                    bookId: book._doc
                }
            });
        });
    }).catch(error => {
        console.log(error);
    });
};
