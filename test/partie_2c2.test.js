const assert = require('assert')
let sinon = require('sinon')
let Session = require('../app/Session.js')
let Combattant = require('../app/Combattant.js')

// étant donné une session comportant 4 joueurs quand une partie démarre
// alors elle comporte 2 équipes contenant chacune des joueurs différents
describe('FaireUnCombatEn2c2', function()
{
    it('La partie doit commencer', function(){

        // 1- Création de la session
        let session = new Session();
        // 2- Récupération des combattants
        let combattant1 = new Combattant("GROS","Paul",134,1,2006);
        let combattant2 = new Combattant("MAIGRE","Louis",65,1,2012);
        let combattant3 = new Combattant("PETIT","Jean",140,1,2001);
        let combattant4 = new Combattant("GRAND","Jacque",70,1,2010);

        // 3- Ajout de tous les combattants dans la session
        session.addCombattants2c2(combattant1, combattant2, combattant3, combattant4);
        // 4- Création d'un combat
        session.createCombatEquilibreParNombre(session.combattants);
        let combat = session.combat;

        assert.strictEqual(JSON.stringify(combat.equipes).length ,2);
        assert.notStrictEqual(JSON.stringify(combat.equipes["equipe1"].combattants).length ,0);
        assert.notStrictEqual(JSON.stringify(combat.equipes["equipe2"].combattants).length ,0);
    })
})








