/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "OwO, what's this" in the browser's dev tools console
// you get into console by right clicking and go to the inspect tool
console.log("OwO, what's this");

/***************MovieAPI start*************/

function displayWelcome() {
  // -> Considered adding a comment of what is the purpose of this function what it does.
  let name = document.querySelector("#usrname").value;
  document.querySelector("#pwd").value = "";
  console.log("Welcome" + name);

  // Store
  localStorage.setItem("usrname", name);
  return usrSelection();
}

function welcome() {
  //-> Add a comment for this function so it is clear what is its purpose.
  let name2 = localStorage.getItem("usrname");
  document.querySelector("#welcome").innerHTML = name2;
  console.log(name2);
}

/* Redirect the user to the desired html page using the selection from the dropdown menu. */
function usrSelection() {
  let usrChoice = document.querySelector("#redirections").value;
  console.log("You chose " + usrChoice);
  location = usrChoice;
  return false;
}

/* code for the fancy log in page */
// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/******************** OMDB MOVIES  http://www.omdbapi.com/ ********/

// movie api key
const OMDB_KEY = "54c29f73";

// movie api link with the key
let ombdBaseURL = `https://www.omdbapi.com/?apikey=${OMDB_KEY}&t=`;

function optionSelection() {
  let selectorValue = document.querySelector("#options").value;
  console.log(selectorValue);
  let info = document.querySelector("#info");

  if (selectorValue == "option1") {
    info.innerHTML = optionOne();
  } else if (selectorValue == "option2") {
    info.innerHTML = optionTwo();
  } else if (selectorValue == "option3") {
    info.innerHTML = optionThree();
  } else if (selectorValue == "option4") {
    info.innerHTML = optionFour();
  } else if (selectorValue == "option5") {
    info.innerHTML = optionFive();
  } else if (selectorValue == "option6") {
    info.innerHTML = optionSix();
  } else {
    info.innerHTML = optionSeven();
  }
}

/**********Option One: Title, Poster, Year, Rated, Released******/
/**********************Runtime, DVD*****************************/
function optionOne() {
  let movieToFetch = document.querySelector("#movie").value;
  let yearOfMovie = document.querySelector("#year").value;
  let output = document.querySelector("#movie-output");

  output.innerHTML = "";

  let movieURL = "";

  if (movieToFetch == "") {
    alert("Please enter a movie title..");
  } else {
    movieToFetch = movieToFetch.replace(" ", "+");
    movieURL = ombdBaseURL + movieToFetch;

    if (yearOfMovie != "") {
      //if there is a year, add it on
      movieURL = movieURL + `&y=${yearOfMovie}`;
      console.log(movieURL);
    }

    fetch(movieURL)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log(json.Title);

        output.innerHTML = `<h1 class= "title">${json.Title}</h1>
                            <img src="${json.Poster}">
                            <p class= "notTitle">Year: ${json.Year}</p>
                            <p class= "notTitle">Rated: ${json.Rated}</p>
                            <p class= "notTitle">Released: ${json.Released}</p>
                            <p class= "notTitle">Runtime: ${json.Runtime}</p>
                            <p class= "notTitle">DVD Released: ${json.DVD}</p>`;
      });
  }
}

/**********Option Two: Title, Poster, Director, Writer, Actors******/
function optionTwo() {
  let movieToFetch = document.querySelector("#movie").value;
  let yearOfMovie = document.querySelector("#year").value;
  let output = document.querySelector("#movie-output");

  output.innerHTML = "";

  let movieURL = "";

  if (movieToFetch == "") {
    alert("Please enter a movie title..");
  } else {
    movieToFetch = movieToFetch.replace(" ", "+");
    movieURL = ombdBaseURL + movieToFetch;

    if (yearOfMovie != "") {
      //if there is a year, add it on
      movieURL = movieURL + `&y=${yearOfMovie}`;
      console.log(movieURL);
    }

    fetch(movieURL)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log(json.Title);

        output.innerHTML = `<h1 class= "title">${json.Title}</h1>
                            <img src="${json.Poster}">
                            <p class= "notTitle">Director: ${json.Director}</p>
                            <p class= "notTitle">Writer: ${json.Writer}</p>
                            <p class= "notTitle">Actors: ${json.Actors}</p>`;
      });
  }
}

/**********Option Three: Tile, Poster, Language, Country******/
function optionThree() {
  let movieToFetch = document.querySelector("#movie").value;
  let yearOfMovie = document.querySelector("#year").value;
  let output = document.querySelector("#movie-output");

  output.innerHTML = "";

  let movieURL = "";

  if (movieToFetch == "") {
    alert("Please enter a movie title..");
  } else {
    movieToFetch = movieToFetch.replace(" ", "+");
    movieURL = ombdBaseURL + movieToFetch;

    if (yearOfMovie != "") {
      //if there is a year, add it on
      movieURL = movieURL + `&y=${yearOfMovie}`;
      console.log(movieURL);
    }

    fetch(movieURL)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log(json.Title);

        output.innerHTML = `<h1 class= "title">${json.Title}</h1>
                            <img src="${json.Poster}">
                            <p class= "notTitle">Language: ${json.Language}</p>
                            <p class= "notTitle">Country: ${json.Country}</p>`;
      });
  }
}

/**********Option Four: Title, Poster, Metascore, IMBD Votes, IMBD ID******/
function optionFour() {
  let movieToFetch = document.querySelector("#movie").value;
  let yearOfMovie = document.querySelector("#year").value;
  let output = document.querySelector("#movie-output");

  output.innerHTML = "";

  let movieURL = "";

  if (movieToFetch == "") {
    alert("Please enter a movie title..");
  } else {
    movieToFetch = movieToFetch.replace(" ", "+");
    movieURL = ombdBaseURL + movieToFetch;

    if (yearOfMovie != "") {
      //if there is a year, add it on
      movieURL = movieURL + `&y=${yearOfMovie}`;
      console.log(movieURL);
    }

    fetch(movieURL)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log(json.Title);

        output.innerHTML = `<h1 class= "title">${json.Title}</h1>
                            <img src="${json.Poster}">
                            <p class= "notTitle">Metascore: ${json.Metascore}</p>
                            <p class= "notTitle">IMDB Votes: ${json.imdbVotes}</p>
                            <p class= "notTitle">IMDB ID: ${json.imdbID}</p>`;
      });
  }
}

/**********Option Five: Title, Poster, Box Office, Awards******/
function optionFive() {
  let movieToFetch = document.querySelector("#movie").value;
  let yearOfMovie = document.querySelector("#year").value;
  let output = document.querySelector("#movie-output");

  output.innerHTML = "";

  let movieURL = "";

  if (movieToFetch == "") {
    alert("Please enter a movie title..");
  } else {
    movieToFetch = movieToFetch.replace(" ", "+");
    movieURL = ombdBaseURL + movieToFetch;

    if (yearOfMovie != "") {
      //if there is a year, add it on
      movieURL = movieURL + `&y=${yearOfMovie}`;
      console.log(movieURL);
    }

    fetch(movieURL)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log(json.Title);

        output.innerHTML = `<h1 class= "title">${json.Title}</h1>
                            <img src="${json.Poster}">
                            <p class= "notTitle">Box Office: ${json.BoxOffice}</p>
                            <p class= "notTitle">Awards: ${json.Awards}</p>`;
      });
  }
}

/**********Option Six: Title, Poster, Genre, Plot******/
function optionSix() {
  let movieToFetch = document.querySelector("#movie").value;
  let yearOfMovie = document.querySelector("#year").value;
  let output = document.querySelector("#movie-output");

  output.innerHTML = "";

  let movieURL = "";

  if (movieToFetch == "") {
    alert("Please enter a movie title..");
  } else {
    movieToFetch = movieToFetch.replace(" ", "+");
    movieURL = ombdBaseURL + movieToFetch;

    if (yearOfMovie != "") {
      //if there is a year, add it on
      movieURL = movieURL + `&y=${yearOfMovie}`;
      console.log(movieURL);
    }

    fetch(movieURL)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log(json.Title);

        output.innerHTML = `<h1 class= "title">${json.Title}</h1>
                            <img src="${json.Poster}">
                            <p class= "notTitle">Genre: ${json.Genre}</p>
                            <p class= "plot">Plot: ${json.Plot}</p>`;
      });
  }
}

/**********Option Seven: Title, Poster, Year, Rated, Released,**************/
/*********************** Director, Writer, Actors, Language,****************/
/*********************** Country, Metasore, IMBD Votes, IMBD ID ************/
/*********************** Box Office, Awards, Runtime, DVD, Genre, Plot *****/
function optionSeven() {
  let movieToFetch = document.querySelector("#movie").value;
  let yearOfMovie = document.querySelector("#year").value;
  let output = document.querySelector("#movie-output");

  output.innerHTML = "";

  let movieURL = "";

  if (movieToFetch == "") {
    alert("Please enter a movie title..");
  } else {
    movieToFetch = movieToFetch.replace(" ", "+");
    movieURL = ombdBaseURL + movieToFetch;

    if (yearOfMovie != "") {
      //if there is a year, add it on
      movieURL = movieURL + `&y=${yearOfMovie}`;
      console.log(movieURL);
    }

    fetch(movieURL)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log(json);

        output.innerHTML = `<h1 class= "title">${json.Title}</h1>
                            <img src="${json.Poster}">
                            <p class= "notTitle">Year: ${json.Year}</p>
                            <p class= "notTitle">Rated: ${json.Rated}</p>
                            <p class= "notTitle">Released: ${json.Released}</p>
                            <p class= "notTitle">Runtime: ${json.Runtime}</p>
                            <p class= "notTitle">DVD Released: ${json.DVD}</p>
                            <p class= "notTitle">Director: ${json.Director}</p>
                            <p class= "notTitle">Writer: ${json.Writer}</p>
                            <p class= "notTitle">Actors: ${json.Actors}</p>
                            <p class= "notTitle">Language: ${json.Language}</p>
                            <p class= "notTitle">Country: ${json.Country}</p>
                            <p class= "notTitle">Metascore: ${json.Metascore}</p>
                            <p class= "notTitle">IMDB Votes: ${json.imdbVotes}</p>
                            <p class= "notTitle">IMDB ID: ${json.imdbID}</p>
                            <p class= "notTitle">Box Office: ${json.BoxOffice}</p>
                            <p class= "notTitle">Awards: ${json.Awards}</p>
                            <p class= "notTitle">Genre: ${json.Genre}</p>
                            <p class= "plot">Plot: ${json.Plot}</p>`;
      });
  }
}

/***************MovieAPI end*************/

/***************LyricAPI start*************/

/******************** Song Lyrics API https://lyricsovh.docs.apiary.io/# ********/

// lyric finder api link
let baseURL = "https://api.lyrics.ovh/v1/";

// function to get lyrics from the api with the artist and song name
function getLyrics() {
  let artistToFetch = document.querySelector("#artist").value;
  let songToFetch = document.querySelector("#song").value;
  let output = document.querySelector("#song-lyrics");

  //   if the artist or song option is blank, it will tell the user to put in the names
  if (artistToFetch == "" || songToFetch == "") {
    alert("enter an artist and a song!");
    //  if not, it will put the lyrics of the song if it finds it
  } else {
    let lyricsURL = `${baseURL}${artistToFetch}/${songToFetch}`;
    // fetch lyrics from the url and return the response
    fetch(lyricsURL)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log(json);
        output.innerHTML = "";
        // if the artist and song are not found, it tells the user
        if (json.error) {
          alert("song lyrics not found");
        }

        let lyrics = json.lyrics;

        lyrics = lyrics.split("\n");

        let lyricOutput = "";
        for (let lyric of lyrics) {
          console.log(lyric);
          lyricOutput += `<p class="song-lyric">${lyric}</p>`;
        }

        output.innerHTML = lyricOutput;
      });
  }
}

/***************LyricAPI end*************/
