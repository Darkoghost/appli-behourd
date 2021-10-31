let Combat = require('../app/Combat.js')

class Session {
    combat;
    combattants;

    constructor() {
        this.combattants = [];
    }

    addCombattants1c1(cb1, cb2) {
        this.combattants.push(cb1);
        this.combattants.push(cb2);
    }
    addCombattants2c2(cb1, cb2, cb3, cb4) {
        this.combattants.push(cb1);
        this.combattants.push(cb2);
        this.combattants.push(cb3);
        this.combattants.push(cb4);
    }

    add3Combattants(cb1, cb2, cb3) {
        this.combattants.push(cb1);
        this.combattants.push(cb2);
        this.combattants.push(cb3);
    }

    createCombatEquilibreParNombre(combattants) {
        this.combat = new Combat();
        // création des équipes
        this.combat.createEquipe(combattants);
    }

    createCombatEquilibreParPoid(combattants) {
        this.combat = new Combat();
        // création des équipes
        this.combat.createEquipeParPoids(combattants);
    }
}

module.exports = Session;