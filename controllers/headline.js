const db = require('../models');

exports.saveHeadline = function (req, res) {
    console.log(req.body);
    db.Headline.create(req.body)
        .then(function (dbHeadline) {
            // View the added result in the console
            console.log(dbHeadline);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            return res.json(err);
        });
}

exports.deleteArticle = function (req, res) {
    const targetId = req.body.id;
    db.Headline.findById(targetId, "notes").then(function (result) {
        console.log("target notes:", result);
        result.notes.forEach(id => {
            db.Note.findByIdAndRemove(id).then(function (removed) {
                console.log(removed);
            });
        });
    }).then(function () {
        db.Headline.findByIdAndRemove(targetId).then(function (removed) {
            console.log(removed);
            res.json(removed);
        });
    })
}
