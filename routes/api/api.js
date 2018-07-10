const saveHeadline = require('../../controllers/headline').saveHeadline;
const saveNote = require('../../controllers/note').saveNote;
const deleteArticle = require('../../controllers/headline').deleteArticle;
const deleteNote = require('../../controllers/note').deleteNote;

module.exports = function (app) {
    app.post("/headline", saveHeadline);

    // Route for saving/updating an Article's associated Note
    app.post("/saved/:id", saveNote);

    app.delete("/saved", deleteArticle);

    app.delete("/note", deleteNote);

}