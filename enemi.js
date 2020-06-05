var templateEnemi = {
    creerAibat : function(){
        var enemi1 = {
            nom : "Aibat",
            description : "Oeil volant",
            level : 1,
            force : 2,
            pv : 5,
        
            afficherEnemi : function(){
                var txt = "Nom : " + this.nom + "\n";
                txt += "Description : " + this.description + "\n";
                txt += "Level : " + this.level + "\n";
                txt += "PV : " + this.pv + "\n";
                txt += "Force : " + this.force;
                console.log(txt);
            },
        
        }
        return enemi1;
    },

    creerMushpang : function(){
        var enemi2 = {
            nom : "Mushpang",
            description : "Chamignon combatant",
            level : 3,
            force : 5,
            pv : 7,
        
            afficherEnemi : function(){
                var txt = "Nom : " + this.nom + "\n";
                txt += "Description : " + this.description + "\n";
                txt += "Level : " + this.level + "\n";
                txt += "PV : " + this.pv + "\n";
                txt += "Force : " + this.force;
                console.log(txt);
            },
        
        }
        return enemi2;
    },
}

module.exports = templateEnemi;

// var Aibat1 = templateEnemi.creerAibat();
// var Aibat2 = templateEnemi.creerAibat();

// Aibat1.afficherEnemi();
// Aibat2.afficherEnemi();

