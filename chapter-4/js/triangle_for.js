/* 
Exercice : construire et afficher un triangle de 7 lignes
*/

var ligne = "";
for (var i = 1; i <= 7; i++) {
    ligne = ligne + "#";
    // Autre possibilité avec l'opérateur +=
    //ligne += "#";
    console.log(ligne);
}