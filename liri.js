//grab keys.js and store in variable

var twitKeys = require('./keys.js');
var keyList = twitKeys.twitterKeys;

// Includes the FS package for reading and writing packages 
var fs = require('fs');
//require request, spotify and twitter
var request = require('request');
var spotify = require('spotify');
var twitter = require('twitter');

var userCommand = process.argv[2];
var userArgument = process.argv[3];
	for(i=4; i<process.argv.length; i++){
	    userCommand += '+' + process.argv[i];

var client = new twitter({
		consumer_key: keys.twitterKeys.consumer_key,
		consumer_secret: keys.twitterKeys.consumer_secret,
		access_token_key: keys.twitterKeys.access_token_key,
		access_token_secret: keys.twitterKeys.access_token_secret
	});

function liri(){
	//action statement, switch statement to declare what action to execute.
	switch(userCommand){

		case 'my-tweets':
		myTweets();
		break;

		case 'spotify-this-song':
		spotifyThis();
		break;

		case 'movie-this':
		movieThis();
		break;

		case 'do-what-it-says':
		doWhatItSays();
		break;
		
	}
};

function myTweets(){

}
