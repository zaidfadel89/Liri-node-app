//read ans set environmental variables
require('dotenv').config();
var keys = require('./keys.js');
var axios = require('axios');
var Spotify = require('node-spotify-api');
var fs = require('fs');
var action = process.argv[2];
var value = process.argv[3];
switch (action) {
  case 'concert-this':
    break;
  case 'spotify-this-song':
    spotifySong(value);

    break;
  case 'movie-this':
    fun(value);
    break;
  case 'do-what-it-says':
    break;
  default:
    console.log('invaild enter');
}
function spotifySong(song) {
  var spotify = new Spotify(keys.spotify);

  spotify.search({ type: 'track', query: song }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    //console.log(data);
    var songs = data.tracks.items;
    console.log(JSON.stringify(songs[0], null, 2));
    for (var i = 0; i < 2; i++) {
      console.log('song name: ' + songs[i].name);
      console.log('preview song: ' + songs[i].preview_url);
      console.log('album name: ' + songs[i].album.name);
      console.log('artist name: ' + songs[i].artists[0].name);
      console.log('-----------------------------------------');
    }
  });
}
function fun(value) {
  var movie = value;
  var music = music;

  axios
    .get(' http://www.omdbapi.com/?t=' + movie + '&apikey=7d7e1950')
    .then(function(response) {
      console.log('the Movie name is: ' + response.data.Title);
    })

    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('---------------Data---------------');
        console.log(error.response.data);
        console.log('---------------Status---------------');
        console.log(error.response.status);
        console.log('---------------Status---------------');
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
}
