const axios = require("axios");
const cheerio = require("cheerio");

module.exports = function (app) {
    app.get("/scrape",function (req, res) {
        var result = [];
        // First, we grab the body of the html with request
        axios.get("https://www.nytimes.com/").then(function (response) {
            // Then, we load that into cheerio and save it to $ for a shorthand selector
            var $ = cheerio.load(response.data);
            // Now, we grab every h2 within an article tag, and do the following:
            $("article").each(function (i, element) {
                // Save an empty result object
    
                //console.log($(this)[0].children);
                //console.log("NEW SHIT--------------------",$(this).children(".story-heading").contents());
                // Add the text and href of every link, and save them as properties of the result object
                const newItem = {};
                newItem.headline = $(this).children(".story-heading").children("a").text();
                newItem.link = $(this).children(".story-heading").children("a").attr("href");
                newItem.summary = $(this).children(".summary").text();
                result.push(newItem);
            });
            console.log(result);
            res.send(result);
        });
    });
}