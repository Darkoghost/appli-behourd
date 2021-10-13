let Equipe = require('../app/Equipe.js')

class Combat {
    equipes;

    constructor() {
        this.equipes = [];
    }

    createEquipe(combattants) {
        let equipe1 = this.equipes["equipe1"] = new Equipe();
        let equipe2 = this.equipes["equipe2"] = new Equipe();

        // Trie par nombre de joueur
        combattants.forEach(function (combattant) {
            // si equipe1 à plus de joueur que equipe2
            if (equipe1.combattants.length > equipe2.combattants.length) {
                equipe2.ajoutDuPoids(combattant.poids);
                equipe2.combattants.push(combattant);
            // si les 2 équipe ont le même nombre de joueur ou aucun
            } else {
                equipe1.ajoutDuPoids(combattant.poids);
                equipe1.combattants.push(combattant);
            }
        })
    }

    createEquipeParPoids(combattants) {
        let equipe1 = this.equipes["equipe1"] = new Equipe();
        let equipe2 = this.equipes["equipe2"] = new Equipe();

        // tri tous les combattants par poids en ordre décroissant
        // 1 = b avant a / -1 = b après a
        combattants.sort(function (cb1, cb2) {
            if (cb1.poids > cb2.poids) {
                return -1;
            } else if (cb1.poids < cb2.poids) {
                return 1;
            } else if (cb1.poids === cb2.poids) {
                return 0;
            }
        });

        combattants.forEach(function (combattant) {
            // si poidsTotal equipe2 inf à équipe1 alors ajout dans équipe2
            if (equipe2.poidsTotal < equipe1.poidsTotal) {
                equipe2.combattants.push(combattant);
                equipe2.ajoutDuPoids(combattant.poids);

                // si poidsTotal equipe2 sup à equipe1 alors ajout dans equipe1
            } else if (equipe2.poidsTotal > equipe1.poidsTotal) {
                equipe1.combattants.push(combattant);
                equipe1.ajoutDuPoids(combattant.poids);

                // si poidsTotal égal dans les 2 équipes alors ajout dans equipe1
            } else if (equipe2.poidsTotal === equipe1.poidsTotal) {
                equipe1.combattants.push(combattant);
                equipe1.ajoutDuPoids(combattant.poids);
            }
        });

    }
}


module.exports = Combat;