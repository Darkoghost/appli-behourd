class Combat {
    equipes;

    constructor() {
        this.equipes = [];
    }

    createEquipe1v1(combattant1, combattant2) {
        this.equipes["equipe1"] = new Equipe(combattant1);
        this.equipes["equipe2"] = new Equipe(combattant2);
    }
}