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
		showResults(data.items);
	});
}

// -- Function to display search results on page -- //
function showResults(results)
{
	$('#top_movies .wrapper .row').remove();
	var html = "";
	var counter = 0;

	$.each(results, function(index, arrayitem){
		if (counter < 9) {
			counter ++;
			html += '<div class="row">' + '<div class="post">' +
				'<a href="https://www.youtube.com/watch?v='+ arrayitem.id.videoId + ' "><img src="' + arrayitem.snippet.thumbnails.medium.url + '"/></a>' +
				'<h3 class="title">' + arrayitem.snippet.title + '</h3>' +
				'<p class="post_info">' + arrayitem.snippet.publishedAt + ' | ' + arrayitem.snippet.channelTitle + '</p>'+ 
				'</div>' +
          '</div>';
		}
	 console.log(arrayitem.snippet.title);
	});

	$('#top_movies .wrapper').append(html);
}

// Video object 

var Video = function(tubeKey, tubeUrl, thumbnail, title, publishedAt, channelTitle)
{
	this.tubeKey = 'AIzaSyCKNNUXyaTDWJp14VhcwraU-mY7o4A27HY';
	this.tubeUrl = 'https://www.googleapis.com/youtube/v3/search';
	this.thumbnail = thumbnails.medium.url;
	
}

