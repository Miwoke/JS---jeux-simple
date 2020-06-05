var readline = require("readline-sync");

var joueur = {
    nom : "Wawa",
    description : "Le meilleur des guerrier",
    level : 1,
    pv : 100,
    // objet dans objet
    carac : {
        force : 5,
        agilite : 3,
        intel : 2,
    }, 
    // Afficher les carac du joueur
    afficherMonJoueur : function (){
        console.log("Nom : " + this.nom);
        console.log("Description : " + this.description);
        console.log("Level : " + this.level);
        console.log("Force : " + this.carac.force);
        console.log("Agilité : " + this.carac.agilite);
        console.log("Intéligence : " + this.carac.intel);
    },
    // fais level up notre joueur
    levelUp : function(){
        this.level ++;
        this.pv += 10;
        this.carac.force += 2;
        this.carac.agilite ++;
    }
}


// module d'exportation
module.exports = joueur;





// afficherInformationJoueur(joueur);

// function afficherInformationJoueur(j){
//     for (var propriete in j){
//         if (typeof(j[propriete]) !== "object"){
//             console.log(propriete + " : " + j[propriete]);
//         } else {
//             // on affiche un objet dans un objet avec la RECURSIVITE
//             afficherInformationJoueur(j[propriete]);

//         }
//     }
// }