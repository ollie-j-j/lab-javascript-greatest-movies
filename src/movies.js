// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    return moviesArray.map(function (film) {
        return film.director;
    });
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramaMovies = moviesArray.filter(function (film) {
        return film.genre.includes("Drama") && film.director === "Steven Spielberg";
    });
    return spielbergDramaMovies.length;
}

// console.log(howManyMovies(movies));




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const totalScore = moviesArray.reduce(function (accumlator, currentValue) {
        return accumlator + (currentValue.score || 0);
    }, 0);
    const averageScore = totalScore/moviesArray.length;
    return parseFloat(averageScore.toFixed(2));
}






// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const dramaMovies = moviesArray.filter(function (film) {
        return film.genre.includes("Drama");
    });
    return scoresAverage(dramaMovies);
    }


// console.log(dramaMoviesScore(movies));






// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderedByYearArray = moviesArray.slice();
    return orderedByYearArray.sort((a, b) => {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        if (a.year === b.year) {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1; 
            return 0;
        }
    });
}

// console.log(orderAlphabetically(movies));



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphabeticalOrder = moviesArray.slice(0, 20);
    const orderedArray = alphabeticalOrder.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        if (a.title.toLowerCase() === b.title.toLowerCase()) return 0;
    });
    const titleStringArray = orderedArray.map(movie => movie.title);
    return titleStringArray;
}

// console.log(orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {




// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}












