function performSearch() {
    var searchTerm = $('#searchbar').val().toLowerCase().trim();

    console.log(searchTerm.length)
    if (searchTerm.length < 1) {
        $('.searchitem').removeClass("hidden");
        return
    }

    var searchWords = searchTerm.split(" ");

    $(".searchitem").each(function (index) {
        var keywords = $(this).attr("data-keywords");
        var hide = true
        for (var i=0; i<searchWords.length;i++) {
            console.log("Does " + keywords + " include " + searchWords[i])
            if (keywords.includes(searchWords[i])) { hide = false }
        }
        if (hide) {
            $(this).addClass("hidden");
        } else {
            $(this).removeClass("hidden");
        }
    });
}

$('#searchbar').on('keyup',function(e){
    performSearch()
});
