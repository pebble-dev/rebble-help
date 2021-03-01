function performSearch() {
    var searchTerm = $('#searchbar').val().toLowerCase().trim();

    console.log(searchTerm.length)
    if (searchTerm.length < 1) {
        $('.searchitem').removeClass("hidden");
        $('#topicfilter').html("All topics:");
        $("#nothingFound").addClass("hidden");
        return
    } else {
        $('#topicfilter').html("Relevant topics:");
    }

    var searchWords = searchTerm.split(" ");
    var foundSolutions = 0;
    
    $(".searchitem").each(function (index) {
        var keywords = $(this).attr("data-keywords");
        var hide = true
        for (var i=0; i<searchWords.length;i++) {
            console.log("Does " + keywords + " include " + searchWords[i])
            if (searchWords[i].length > 1 && keywords.includes(searchWords[i])) { 
                hide = false;
                foundSolutions++
            }
        }
        if (hide) {
            $(this).addClass("hidden");
        } else {
            $(this).removeClass("hidden");
        }
    });

    if (foundSolutions == 0) {
        $("#nothingFound").removeClass("hidden");
    } else {
        $("#nothingFound").addClass("hidden");
    }

}

$('#searchbar').on('keyup',function(e){
    performSearch()
});
