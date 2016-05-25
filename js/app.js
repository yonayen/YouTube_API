// --- API KEY: AIzaSyCKNNUXyaTDWJp14VhcwraU-mY7o4A27HY --- //

// --- The endpoint: "https://www.googleapis.com/youtube/v3/search" --- //

$(function(){
  $('#search-button').on("click", function(event){
    var searchTerm = $('#query').val();
    $('#top_movies .clearfix h2').text(searchTerm);
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
	// two parameters: URL + function that will be called
  $.getJSON('https://www.youtube.com/results?search_query='+ searchTerm, function(data){
	showResults(data.Search);
  });
}

function showResults(results){
  $('#top_movies .wrapper .row').remove()
  var html = "";
  var counter = 0;
  $.each(results, function(index,value){
    if (counter < 6) {
      // if (value.Poster != 'N/A') {
        counter++;
        html += '<div class="row">'+
            '<div class="post">'+
              '<img src="' + value.Poster.replace("https://", "http://") + '"/>'+
              '<h3 class="title">' + value.Title + '</h3>'+
              '<p class="post_info">' + value.Year + ' | ' + value.Type + '</p>'+
            '</div>'+
          '</div>';
      // }
    }
    console.log(value.Title);
  });
 
 $('#top_movies .wrapper').append(html);
}