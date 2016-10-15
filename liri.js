//grab keys.js and store in variable

var Keys = require('./keys.js');
// var keyList = twitKeys.twitterKeys;

// Includes the FS package for reading and writing packages 
var fs = require('fs');
//require request, spotify and twitter
var request = require('request');
var spotify = require('spotify');
var twitter = require('twitter');


var userCommand = process.argv[2];
var userArgument = process.argv[3];
for (i = 4; i < process.argv.length; i++) {
    userArgument += '+' + process.argv[i];
}
// var client = new twitter({
//     consumer_key: keys.twitterKeys.consumer_key,
//     consumer_secret: keys.twitterKeys.consumer_secret,
//     access_token_key: keys.twitterKeys.access_token_key,
//     access_token_secret: keys.twitterKeys.access_token_secret
// });
console.log("Type my-tweets , spotify-this-song (followed by song name) , movie-this (followed my movie name) , or do-what-it-says to begin.");

function liri() {
    //action statement, switch statement to declare what action to execute.
    switch (userCommand) {

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

function myTweets() {


    var client = new twitter({
        consumer_key: keys.twitterKeys.consumer_key,
        consumer_secret: keys.twitterKeys.consumer_secret,
        access_token_key: keys.twitterKeys.access_token_key,
        access_token_secret: keys.twitterKeys.access_token_secret
    });

    //parameters for twitter function.
    var parameters = {
        screen_name: 'JasonMosley17',
        count: 20
    };


    client.get('statuses/user_timeline', parameters, function(error, tweets, response) {
        if (!error) {
            for (i = 0; i < tweets.length; i++) {
                // var returnedData = ('Number: ' + (i+1) + '\n' + tweets[i].created_at + '\n' + tweets[i].text + '\n');
                console.log(returnedData);
                console.log("-------------------------");
            }
        };
    });
};

function spotifyThis() {
    conole.log('loaded')


    var Song;
    Song = userArgument;

    spotify.search({ type: 'track', query: searchTrack }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        } else {
            //tried searching for release year! Spotify doesn't return this!
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song: " + data.tracks.items[0].name);
            console.log("Album: " + data.tracks.items[0].album.name);
            console.log("Preview Here: " + data.tracks.items[0].preview_url);
        }
    });





}
