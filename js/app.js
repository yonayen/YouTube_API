// --- API KEY: AIzaSyCKNNUXyaTDWJp14VhcwraU-mY7o4A27HY --- //

// --- The endpoint: "https://www.googleapis.com/youtube/v3/search" --- //

$(function() {
	// two parameters: URL + function that will be called
	$.getJSON('https://www.youtube.com/results?search_query=soccer', function(data){
		console.log(data);
	});
});