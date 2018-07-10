const viewHome = require('../../controllers/fetch').viewHome;
const viewSaved = require('../../controllers/fetch').viewSaved;

module.exports = function (app) {
    app.get("/", viewHome);

    app.get("/saved", viewSaved);
}