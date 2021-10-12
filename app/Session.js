class Session {
    combat;
    combattants;

    constructor() {
        this.combattants = [];
    }

    addCombattants(...cbs) {
        cbs.forEach(function (cb) {
            this.combattants.push(cb);
        });
    }

    createCombat() {
        this.combat = new Combat();
    }
}