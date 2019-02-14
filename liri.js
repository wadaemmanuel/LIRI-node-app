// .env to hide keys
require("dotenv").config();

// project variables
var fs = require("fs");
var Spotify = require('node-spotify-api'); 
var keys = require("./keys.js");
var moment = require("moment")
var spotify = new Spotify(keys.spotify);
var axios = require("axios"); 
var lirireturn = process.argv[2]; 
var query = process.argv[3];


// request call to spotify to get track informaiton
function spotifyThisSong() {
    spotify
  .search({ type: 'track', query: query, limit:1 })
  // code for pulling out artist information from the response obeject
  .then(function(response) {
    console.log()
    var trackInfo = response.tracks.items[0];
    var artist = trackInfo.album.artists[0].name;
    var song = trackInfo.name;
    var preview = trackInfo.preview_url;
    var album = trackInfo.album.name;

    console.log("Artist: " + artist);
    console.log("Song Title: " + song);
    console.log("Song Preview Link: " + preview);
    console.log("Album: " + album);
  })
  .catch(function(err) {
    console.log(err);
  });
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data) { 

            var doIt = data.split(","); 
            command = doIt[0];
                console.log(command);
            song = doIt[1]; 
                console.log(song);
        if (command === "spotify-this-song"){
            // spotifyThisSong(command, song); invoc the function to search using the split data.
        
        }
    });
}

// code to call bands in town api 
function concertThis() {
    axios
    .get("https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp")
    .then(function(response){
        console.log("The info for: " + query + " is  ");
        // console.log(response.data)
        console.log("Venue: " + response.data[0].venue.name);
        console.log("Venue Location: " + response.data[0].venue.city + " " + response.data[0].venue.country);

        var dateConv = response.data[0].datetime;
        var newDate = moment(dateConv).format('MM/DD/YYYY');
        console.log(newDate);
        // console.log("Event Date: " + response.data[0].datetime);
    })
}

// api call for movies database 
function movieThis() {
    axios
    .get("http://www.omdbapi.com/?t=" + query + "&y=&plot=full&apikey=trilogy")
    .then(function(response){
        // console.log(response);
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("language: " + response.data.Language);
        console.log("----------------------------------");
        console.log("Plot: " + response.data.Plot);
        console.log("----------------------------------");
        console.log("Actors: " + response.data.Actors);
        
    })
    .catch(function(err) {
        console.log(err);
      });
}

// switch case for the commands 
switch (lirireturn) {
    case "concert-this":
    concertThis()
    break; 

    case "spotify-this-song":
    spotifyThisSong()
    break; 

    case "movie-this":
    movieThis()
    break; 

    case "do-what-it-says":
    doWhatItSays()
    break; 
}

