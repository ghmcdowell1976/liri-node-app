"use strict";
var keys = require("./keys.js");
var twitter = require("twitter");
var prompt = require("prompt");
var request = require("request");
var spotify = require("spotify");
var inquirer = require("inquirer");



var getTweets = function(){
	var client = new twitter({
  		consumer_key: "keys.consumer_key",
  		consumer_secret: "keys.consumer_secret",
  		access_token_key: "keys.access_token_key",
 	    access_token_secret: "key.access_token_secret"

});
	
	var params = {screen_name: "ghmcdowell", count: 20};
	client.get("statuses/user_timeline", params, function(error, tweets, response) {
  		if (error) {
  			console.log(error)
  		}else{
    	console.log(tweets);
    	}
    	
  })

}



getTweets();


var getMovie = function(){
inquirer.prompt([
	{
		type: "input",
		name: "movieName",
		message: "movie-this"
	}
	// console.log(prompt[1].name);

	]).then(function(input){
		var movieName = input.movieName;

		if (movieName === undefined) {
    movieName = "Mr Nobody";
  }
	
 var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece&tomatoes=true&r=JSON";

request(queryUrl, function(error, response, body) {
if (!error && response.statusCode === 200) {
	// console.log(JSON.parse(body)); test to make sure movie information is successfully returned

    // Parse the body of the site and recovering the requested information
    console.log(JSON.parse(body).Title);
    console.log(JSON.parse(body).Year);
    console.log(JSON.parse(body).imdbRating);
    console.log(JSON.parse(body).Country);
    console.log(JSON.parse(body).Language);
  	console.log(JSON.parse(body).Plot);
    console.log(JSON.parse(body).Actors);
    console.log(JSON.parse(body).tomatoRating);
    
  }
	


})
// end of .then function
});

// end of getMovie function
};	

getMovie();
return;
// var getSongInfo = function(){
// inquirer.prompt([
// 	{
// 		type: "input",
// 		name: "songName",
// 		message: "spotify-this-song"

// 	}

// 	]).then(function(input){
// 		var songName = input.songName;
// 		spotify.search({ type: 'track', query: " + songName + "}, function(err, data) {
 
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }else{
//     	console.log(data);
//     	return;
//     }
 
//     // Do something with 'data' 
// });

// 	})

// };   //end of getSongInfo function

//  function liri(caseData){
	
//   switch (caseData){
//     case "my-tweets":
//       getTweets();
//       break;
//     case "spotify-this-song":
//       getSongInfo();
//       break;
//     case "movie-this":
//       getMovie();
//       break;
//     // case 'do-what-it-says':
//     //   doWhatItSays();
//     //   break;
//     default:
//       console.log('LIRI doesn\'t know that');
//       }
//   }

// liri();

var doWhatItSays = function() {
  fs.readFile("random.txt", "utf8", function(error, data) {
  	if(!error){
    console.log(data);
    }
   

})
};
    doWhatItSays();