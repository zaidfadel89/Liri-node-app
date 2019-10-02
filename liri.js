//read ans set environmental variables
require('dotenv').config();
// require Keys.js
var keys = require('./keys.js');
// require moment (time zone)
var moment = require('moment');
// require api's

var axios = require('axios');

var Spotify = require('node-spotify-api');
// file system
var fs = require('fs');
var action = process.argv[2];
var value = process.argv[3];
// now starting with Switch function
switch (action) {
  case 'concert-this':
    concert(value);
    break;
  case 'spotify-this-song':
    spotifySong(value);

    break;
  case 'movie-this':
    fun(value);
    break;
  case 'do-what-it-says':
    total(value);

    break;
  default:
    console.log('invaild enter');
}
// song api,s function
function spotifySong(song) {
  // Definition to exports.spotify inside keys.js
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
// now starting with movie Api
function fun(value) {
  var movie = value;

  axios
    .get(' http://www.omdbapi.com/?t=' + movie + '&apikey=7d7e1950')
    .then(function(response) {
      console.log('Title of the movie: ' + response.data.Title);
      console.log('Year the movie came out: ' + response.data.Year);
      console.log(
        'Rotten Tomatoes Rating of the movie: ' + response.data.Rated
      );
      console.log('IMDB Rating of the movie: ' + response.data.imdbRating);
      console.log(
        'Country where the movie was produced: ' + response.data.Country
      );
      console.log('Language of the movie: ' + response.data.Language);
      console.log('Plot of the movie: ' + response.data.Plot);
      console.log('Actors in the movie: ' + response.data.Actors);
    })

    // erorr function
    .catch(function(error) {
      if (error.response) {
        console.log('--------------- Data ---------------');
        console.log(error.response.data);
        console.log('--------------- Status ---------------');
        console.log(error.response.status);
        console.log('--------------- Status ---------------');
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
// now starting with concert Api
function concert(value) {
  var concert = value;

  axios
    .get(
      'https://rest.bandsintown.com/artists/' +
        concert +
        '?app_id=codingbootcamp'
    )
    // moment time function
    .then(function(response) {
      var time = moment(response.data.datatime).format('L');

      console.log(response.data.name);
      console.log(time);

      console.log('loction:' + response.data.url);
    });
}

// bring data from random.txt file

function total() {
  fs.readFile('random.txt', 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    var deem = data.split(', ');

    var actionOne = deem[0];
    var action = deem[1];
    console.log(deem);
  });
}
