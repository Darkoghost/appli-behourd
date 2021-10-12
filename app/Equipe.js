class Equipe {
    // opportunité : nom d'équipe, Id pour différencier équipe et historique
    combattants;

    constructor(...combattants) {
        this.combattants = [];
        this.addCombattantsEquipe(combattants);

    }
    addCombattantsEquipe(combattants){
        combattants.forEach(function (combattant) {
            this.combattants.push(combattant);
        });
    }
}