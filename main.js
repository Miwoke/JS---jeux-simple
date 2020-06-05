// import du module joueur.js
var joueur =  require("./joueur");
var templateEnemi = require("./enemi");
var readline = require("readline-sync");

//joueur.afficherMonJoueur();


var lesEnemis = [];

var aibalt = templateEnemi.creerAibat();
var mushpang = templateEnemi.creerMushpang();

lesEnemis.push(aibalt, mushpang);

// Main Boucle

while (choix !== 9){
    afficherMenu();
    var choix = readline.questionInt("Quel est votre choix ? : ");
    switch (choix){
        case 1 : 
        separateur();
        joueur.afficherMonJoueur();
        separateur();
        break;
        case 2 : afficherEnemi();
        break;
        case 3 : combattreEnemi();
        break;
        case 9 : console.log("A bientot");
        break;
        default : console.log("Refaite votre choix");
        break;
    }
}


// function

function afficherMenu(){
    separateur();
    var txt = "";
    txt += "1 - Afficher le joueur\n";
    txt += "2 - Afficher la liste des enemis\n";
    txt += "3 - Combattre un enemi\n";
    txt += "9 - Quitter";
    console.log(txt);
    separateur();
}


function afficherEnemi(){
    separateur();
    for (var i = 0; i < lesEnemis.length; i++){
        lesEnemis[i].afficherEnemi();
    }
    separateur();

}

function retourneEnemiAleatoire(){
    
    var numeroEnemiAleatoire = Math.floor(Math.random() * lesEnemis.length);
    return lesEnemis[numeroEnemiAleatoire];
    
}

function separateur(){
    console.log("------------------------");
}

function combattreEnemi(){
    separateur();
    var enemiAleatoire = retourneEnemiAleatoire();
    enemiAleatoire.afficherEnemi();
    joueur.pv -= enemiAleatoire.force;
    enemiAleatoire.pv -= joueur.carac.force;
    separateur();
    if (enemiAleatoire.pv <= 0){
        console.log("Enemi mort");
        joueur.levelUp();
    }
    if (joueur.pv <= 0){
        console.log("Tuer mort");
    }
    separateur();
}

function detruireEnemi(numero){
    for (var i = numero; i < lesEnemis.length; i++){
        lesEnemis[i] = lesEnemis[i+1];
    }
    lesEnemis.pop();
}