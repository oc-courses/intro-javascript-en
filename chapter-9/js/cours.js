var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

var tab = ["Bonjour", 7, true];

console.log(films.length); // Affiche 3

var tableauVide = []; // Création d'un tableau vide
console.log(tableauVide.length); // Affiche 0

console.log(films[0]); // Affiche "Le loup de Wall Street"
console.log(films[1]); // Affiche "Vice-Versa"
console.log(films[2]); // Affiche "Babysitting"

console.log(films[3]); // Affiche undefined

for (var i = 0; i < films.length; i++) {
    console.log(films[i]);
}

films.forEach(function (film) {
    console.log(film);
});

films.push("Les Bronzés");

console.log(films[3]); // Affiche "Les Bronzés"

var films = ["Le loup de Wall Street", 2013, "Vice-Versa", 2015, "Babysitting", 2013];

var Film = {
    // Initialise le film
    init: function (titre, annee) {
        this.titre = titre;
        this.annee = annee;
    },
    // Renvoie la description du film
    decrire: function () {
        var description = this.titre + " (" + this.annee + ")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013);
var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015);
var film3 = Object.create(Film);
film3.init("Babysitting", 2013);

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
    console.log(film.decrire());
});