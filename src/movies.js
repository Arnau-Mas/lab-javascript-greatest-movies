const movies = requires('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  let directors = array.map(movie => movie.director);
  let uniqueDirectors = [];
  uniqueDirectors = directors.map(director => {
    if(uniqueDirectors.includes(director) == false){
      return director;
    }
  })
  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  let dramaSpielbergMovies = array.filter(movie => movie.director==='Steven Spielberg' && movie.genre.includes('Drama'));
  return dramaSpielbergMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  let scores = array.map (movie => movie.score);
  let sumScores = scores.reduce((a,b) => a+b);
  let average = sumScores/array.length;
  return average.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  let dramaMovies = array.filter(movie => movie.genre.includes('Drama'));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  array.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  array.sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    }if (a.year < b.year) {
      return -1;
    }
    return 0;
  });
  return array;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let movieTitles = array.map(movie => movie.title);
  movieTitles.splice(20, movieTitles.length);
  movieTitles.sort();
  return movieTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  let newMoviesArr = array.map(function(movie){
    if(movie.duration.includes('h') && movie.duration.includes('min')){
      let hours = parseInt(movie.duration.charAt(0))*60;
      let minutes = parseInt(movie.duration.slice(2, movie.duration.length-1));
      movie.duration = hours+minutes+'min'; 
    }else if(movie.duration.includes('h')){
      let hours = parseInt(movie.duration.charAt(0))*60;
      movie.duration = hours+'min'; 
    }
    return movie;
  });

  return newMoviesArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
