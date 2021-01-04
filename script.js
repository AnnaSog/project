"use strict";

<<<<<<< HEAD
const numberOfFilm = +prompt ("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
 count: numberOfFilm, 
 movies: {},
 actors: {},
 genres: [],
 privat: false

};


if (personalMovieDB.count <10){
    console.log("Просмотрено довольно мало фильмов");
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
     console.log('Вы классический зритель');
   } else if (personalMovieDB.count >=30){
    console.log('Вы киноман!');
   }else {
       console.log ("Произошла ошибка!");
   
}


for (let i =0; i < 2; i++){
    const a = prompt ('Один из последних фильмов?','' ),
          b=prompt ('На сколько оцените его?','' );
    
    if (a !=null && b !=null && a !="" && b!="" && a.length <50){
      personalMovieDB.movies[a]=b; 
       console.log("done");
    } else {
        console.log ('error');
        i--;
    } 
}




=======

const numberOfFilm = prompt ("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
 count: numberOfFilm, 
 movies: {},
 actors: {},
 genres: [],
 privat: false

};

const a = prompt ('Один из последних фильмов?','' ),
      b=prompt ('На сколько оцените его?','' ),
      c = prompt ('Один из последних фильмов?', ''),
      d=prompt ('На сколько оцените его?','');
 

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);
>>>>>>> master
