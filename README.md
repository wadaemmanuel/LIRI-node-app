# LIRI

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will is command line node app that takes in parameters and gives you back data.

## Getting Started

Start by querying in the command line by typing node liri.js. This will run the liri.js file, then type in the command spotify-this-song followed by the title of the song. Reapeat for all the other commands as well. For do-what-it-says type "node liri.js and then do-what-it-says". Type below in the the command line:

see the commands and the results below. 

node liri.js concert-this <artist/band name here>
<img width="602" alt="concert this" src="https://user-images.githubusercontent.com/38086956/60366819-40afc400-99b2-11e9-8ed3-4793dd0e8b54.png">

node liri.js do-what-it-says
<img width="1351" alt="do this" src="https://user-images.githubusercontent.com/38086956/60367092-fb3fc680-99b2-11e9-900c-3b971fa4eccd.png">

node liri.js movie-this '<movie name here>'
<img width="1351" alt="movie this" src="https://user-images.githubusercontent.com/38086956/60367122-127eb400-99b3-11e9-9462-9a6b61171efc.png">

node liri.js spotify-this-song '<song name here>'
<img width="922" alt="spotify this" src="https://user-images.githubusercontent.com/38086956/60367173-2c1ffb80-99b3-11e9-825a-ac34b52f28e6.png">


### Prerequisites

What things you need to install the software.

```
axios, spotify API, moment.js, FS (filesystem)
```

### Installing
```
clone LIRI repo 
```
```
npm install axios 
```
```
npm install spotify API 
```
```
npm install moment.js
```
```
npm install file-system
```
## Built With

* [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [Spotify API](https://www.npmjs.com/package/node-spotify-api) - API library for the Spotify REST API
* [moment](https://www.npmjs.com/package/moment) - date formating 
* [Dotenv](https://www.npmjs.com/package/dotenv) - module that loads environment variables from a .env file
* [file-system](https://www.npmjs.com/package/file-system) - file managment 




