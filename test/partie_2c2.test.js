const assert = require('assert')
let sinon = require('sinon')
let Session = require('../app/Session.js')
let Combat = require('../app/Combat.js')
let Equipe = require('../app/Equipe.js')
let Combattant = require('../app/Combattant.js')

// étant donné une session comportant 4 joueurs quand une partie démarre
// alors elle comporte 2 équipes contenant chacune des joueurs différents
describe('FaireUnCombatEn2c2', function()
{
    it('La partie doit commencer', function(){

        // 1- Création de la session
        let session = new Session.constructor();
        // 2- Récupération des combattants
        let combattant1 = new Combattant.constructor("GROS","Paul",134,1,2006);
        let combattant2 = new Combattant.constructor("MAIGRE","Louis",65,1,2012);
        let combattant3 = new Combattant.constructor("PETIT","Jean",140,1,2001);
        let combattant4 = new Combattant.constructor("GRAND","Jacque",70,1,2010);

        // 3- Ajout de tous les combattants dans la session
        session.addCombattant(combattant1, combattant2, combattant3, combattant4);
        // 4- Création d'un combat
        session.createCombat(new Combat());

        // 5- Création des équipes
        let combat = session.combat;
        combat.createEquipe(session.combattants);

        // 6- Répartition des combattants dans les équipes
        let equipes = combat.equipes;
        equipes[0].addCombattant(combattant1);
        equipes[1].addCombattant(combattant2);

        // assert.equals(equipe1.collectioncombattant.length(),equipe2.collectioncombattant.length());
        // assert.notEqual(combattant1,combattant2);

        Assert.True(equipes.Length === 2);
        // Assert.True(equipes.All(equipe => equipe.PlayerCount === 1));
        assert.notEqual(combattant1, combattant2);
        // assert.notEqual(JSON.stringify(combattant1), JSON.stringify(combattant2));
    })
})





// étant donné une session comportant 4 joueurs voulant faire 2 combats et 3 joueurs voulant rejoindre entre deux combats
// quand une partie démarre alors elle comporte 2 équipes contenant chacune des joueurs différents
