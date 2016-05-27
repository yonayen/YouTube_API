// Global Variables
var tubeKey = 'AIzaSyCKNNUXyaTDWJp14VhcwraU-mY7o4A27HY';
var tubeUrl = 'https://www.googleapis.com/youtube/v3/search';

// --- Function takes query term, displays it and calls getRequest function with query -- //
$(function() 
{
	$('#search-button').on("click", function(event)
	{
		var searchTerm = $('#query').val();
		// -- Takes search term and renders it on top of where clips are displayed -- //
		$('#top_movies .clearfix h2').text(searchTerm);
		getRequest(searchTerm);
	});
});

// -- Function sends request w/ query to API -- //
function getRequest(searchTerm)
{
	$.getJSON(tubeUrl + '?part=snippet&key=' + tubeKey + '&q=' + searchTerm, function(data){
		console.log((data.items));
	});
}

// -- Function to display search results on page -- //
function showResults(results)
{
	$('#top_movies .wrapper .row').remove();
	var html = "";
	var counter = 0;

	$.each(results, function(index, value){
		if (counter < 6) {
			counter ++;
			html += '<div class="row">' + '<div class="post">' +
				'<img src="' + item.snippet.thumbnails.medium.url + '"/>' +
				'<h3 class="title">' + item.snippet.title + '</h3>' +
				'<p class="post_info">' + item.snippet.publishedAt + ' | ' + item.snippet.channelTitle + '</p>'+ 
				'</div>'+
          '</div>';
		}
	 console.log(item.snippet.title);
	});

	$('#top_movies .wrapper').append(html);
}


