(function () {
    var preview = ("#wordcloud");

    ("ul#cloud a").hover(function () {
        preview.attr("src", (this).attr("data-thumbnail-src"));
    }, function () {
        preview.attr("src", "");
    });
});