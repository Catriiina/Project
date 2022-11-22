const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

label: for (let i = 0; i < 2; i++) {
    const a = prompt("Сколько фильмов вы уже посмотрели?", ""),
        b = +prompt("На сколько оцените его?", "");

    if (a.length > 50 || a != null || b != null && a != '' && b != '') continue label;

    personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
