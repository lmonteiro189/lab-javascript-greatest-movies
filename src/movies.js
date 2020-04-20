
// Iteration 1: All directors? - Get the array of all directors.
// const getAllDirectors = movies.map(director => {
//   return movies.director();
// });

// --- MY TRY ---
// const getAllDirectors = () => {
//   const directors = movies.map(movies => {
//     return movies.director;
//   });
//   return directors;
// };

const getAllDirectors = (movies) => {
  return movies.map((movie) => movie.director);
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// const howManyMovies = () => {
//   const steve = movies.filter(a => a.director === "Steven Spielberg");
//   const steveDrama = steve.filter(a => a.genre.filter(b => b === "Drama"));
//   if (steveDrama.length === 0) {
//     return 0;
//   } else {
//     return steveDrama.length;
//   }
// };

const howManyMovies = (array) => {
  return array.filter((movie) => {
    const isDirectedByStevenSpielberg = movie.director === 'Steven Spielberg';
    const isDramaMovie = movie.genre.includes('Drama');
    console.log(isDirectedByStevenSpielberg, isDramaMovie)
    return isDirectedByStevenSpielberg && isDramaMovie;
  }).length;
};
howManyMovies(movies);


//


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const roundNumbers = (number, digits) => Math.round(number * 10 ** digits) / 10 ** digits;

const ratesAverage = (array) => {
  if (array.length === 0) {
    return 0;
  }
  const rates = array
    .map((movie) => movie.rate)
    // .filter(rate => typeof rate === 'number');
    .map((rate) => {
      if (typeof rate === 'number') {
        return rate;
      } else {
        return 0;
      }
    });
  const sumOfAllRates = rates.reduce((accumulator, rate) => accumulator + rate, 0);
  const averageRate = sumOfAllRates / rates.length;
  /*
  const averageRate = rates.reduce((accumulator, rate) => accumulator + rate / rates.length, 0);
  */
 return roundNumbers(averageRate, 2);
};


// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (array) => {
  const dramaMovies = array.filter((movie) => movie.genre.includes('Drama'));
  const averageDramaMovieRate = ratesAverage(dramaMovies);
  return averageDramaMovieRate;
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (array) => {
  const sortedMovies = [...array];
  // const sortedMovies = array.slice();
  sortedMovies.sort((firstMovie, secondMovie) => {
    const firstMovieYearOfRelease = firstMovie.year;
    const secondMovieYearOfRelease = secondMovie.year;

    if (firstMovieYearOfRelease > secondMovieYearOfRelease) {
      return 1;
    } else if (firstMovieYearOfRelease < secondMovieYearOfRelease) {
      return -1;
    } else if (firstMovie.title.toLowerCase() > secondMovie.title.toLowerCase()) {
      return 1;
    } else {
      return -1;
    }
  });

  return sortedMovies;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (array) => {
  const sortedMovies = [...array];
  sortedMovies.sort((firstMovie, secondMovie) => {
    return firstMovie.title.localeCompare(secondMovie.title);
  });
  const movieTitles = sortedMovies.map((movie) => movie.title);
  return movieTitles.slice(0, 20);
};


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
