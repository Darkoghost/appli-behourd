let Equipe = require('../app/Equipe.js')

class Combat {
    equipes;

    constructor() {
        this.equipes = [];
    }

    createEquipe(combattants) {
        let equipe1 = this.equipes["equipe1"] = new Equipe();
        let equipe2 = this.equipes["equipe2"] = new Equipe();

        combattants.forEach(function (combattant) {
            // Trie par nombre de joueur
            if (equipe1.combattants.length > equipe2.combattants.length)
            {
                equipe2.combattants.push(combattant);
            } else{
                equipe1.combattants.push(combattant);
            }
        })
    }
}

module.exports = Combat;