
$(document).on("click", ".add-note", function () {
    $("#titleinput").empty();
    $("#bodyinput").empty();
    console.log($(".card-title." + thisId).text());
    var thisId = $(this).attr("data-id");
    $("#save-note").attr("data-id", thisId);
    $("#article-headline").text($(".card-title." + thisId).text());

});

// When you click the savenote button
$(document).on("click", "#save-note", function () {
    // Grab the id associated with the article from the submit button
    var thisId = $(this).attr("data-id");

    // Run a POST request to change the note, using what's entered in the inputs
    $.post("/saved/" + thisId, {
        // Value taken from title input
        title: $("#titleinput").val(),
        // Value taken from note textarea
        body: $("#bodyinput").val()
    }).then(function (data) {
        location.reload();
        console.log(data);
    });

    // Also, remove the values entered in the input and textarea for note entry
    $("#titleinput").empty();
    $("#bodyinput").empty();
});

$(document).on("click", ".delete-article", function () {
    $.ajax({
        url: "/saved",
        type: 'DELETE',
        data: { id: $(this).attr("data-id") }
    }).then(function () {
        location.reload();
    });
});

$(document).on("click", ".delete-note", function () {
    $.ajax({
        url: "/note",
        type: 'DELETE',
        data: { 
            article: $(this).attr("data-article-id"),
            note: $(this).attr("data-id") 
        }
    }).then(function () {
        location.reload();
    });
});