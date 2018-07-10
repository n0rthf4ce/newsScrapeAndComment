$(document).on("click", "#scrape", function () {
    $("#scraped").empty();
  $.get("/scrape", function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      $("#scraped").append(`<div class="card">
      <h4 class="card-title ${i}" data-id=${i}>${data[i].headline}</h4>
      <p class="card-text ${i}">${data[i].summary}</p>
      <a href=${data[i].link} target="_blank" class="${i} article-link btn btn-primary">Link to Article</a>
      <!-- Button trigger modal -->
      <button class="add-article btn btn-secondary" data-id=${i} type="button" data-toggle="modal" data-target="#noteModal">Save</button></div>`
      );
    };
  });
});

$(document).on("click", ".add-article", function () {
  const thisId=$(this).attr("data-id");
  $("#article-headline").text($(".card-title." + thisId).text());
  $.post( "/headline", {
    headline: $(`.card-title.${thisId}`).text().trim(),
    link: $(`a.${thisId}`).attr("href"),
    summary: $(`.card-text.${thisId}`).text().trim()
  })
  .then(function (data) {
    console.log(data);
  });
});
