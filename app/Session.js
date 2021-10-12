let Combat = require('../app/Combat.js')

class Session {
    combat;
    combattants;

    constructor() {
        this.combattants = [];
    }

    addCombattants(cb1, cb2) {
        this.combattants.push(cb1);
        this.combattants.push(cb2);
    }

    createCombat() {
        this.combat = new Combat();
    }
}

module.exports = Session;