

function searchTwitter(query) {
    $.ajax({
        url: 'https://api.twitter.com/1.1/search/tweets.json'+jQuery.param(query),
        dataType: 'jsonp',
        success: function(data) {
            var tweets = $('#tweets');
            tweets.html('');
            for (res in data['results']) {
                tweets.append('<div>' + data['results'][res]['from_user'] + ' wrote: <p>' + data['results'][res]['text'] + '</p></div><br />');
    	    }
        }
    });
}

$(document).ready(function() {
    $('#submit').click(function() {
        var params = {
            q: $('#query').val()
        };
        // alert(jQuery.param(params));
        searchTwitter(params);
		console.log("This did a thing")
		console.log(params.q)
    });
});