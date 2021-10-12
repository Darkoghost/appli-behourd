let Combat = require('../app/Combat.js')

class Session {
    combat;
    combattants;

    constructor() {
        this.combattants = [];
    }

    addCombattants(cb1, cb2, cb3, cb4) {
        this.combattants.push(cb1);
        this.combattants.push(cb2);
        this.combattants.push(cb3);
        this.combattants.push(cb4);
    }

    createCombat(combattants) {
        this.combat = new Combat();
        // création des équipes
        this.combat.createEquipe(combattants);
    }
}

module.exports = Session;