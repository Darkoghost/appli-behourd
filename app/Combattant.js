class Combattant {
    nom;
    prenom;
    poids;
    anneeAdhesion;
    adherent;

    constructor(nom, prenom, poids, adherent, anneeAdhesion) {
        this.nom=nom;
        this.prenom=prenom;
        this.poids=poids;
        this.anneeAdhesion=anneeAdhesion;
        this.adherent=adherent;
    }

}

module.exports = Combattant;