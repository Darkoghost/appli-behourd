class Equipe {
    combattants;
    poidsTotal;

    constructor(cbs) {
        this.combattants = [];
        this.poidsTotal = 0;
    }

    ajoutDuPoids(poidCombattant) {
        this.poidsTotal = this.poidsTotal + poidCombattant;
    }
}

module.exports = Equipe;