const assert = require('assert')
let sinon = require('sinon')
let Session = require('../app/Session.js')
let Combattant = require('../app/Combattant.js')

// étant donné une session comportant 3 joueurs quand une partie démarre
// alors elle comporte 2 équipes : une avec 1 joueur et l'autre avec 2 équilibré selon leurs poids
describe('FaireUnCombatEn2c1', function()
{
    it('La partie doit commencer', function(){

        // 1- Création de la session
        let session = new Session();
        // 2- Récupération des combattants
        let combattant1 = new Combattant("GROS","Paul",134,1,2006);
        let combattant2 = new Combattant("MAIGRE","Louis",65,1,2012);
        let combattant3 = new Combattant("PETIT","Jean",140,1,2001);

        // 3- Ajout de tous les combattants dans la session
        session.addCombattants2v1(combattant1, combattant2, combattant3);
        // 4- Création d'un combat avec équilibrage des équipes
        session.createCombat2v1(session.combattants);
        let combat = session.combat;
        let combattants = session.combattants;

        // vérifie qu'il y a bien 2 équipes
        assert.strictEqual(JSON.stringify(combat.equipes).length ,2);
        // vérifie que dans chaque équipe il y a au moins 1 combattant
        assert.notStrictEqual(JSON.stringify(combat.equipes["equipe1"].combattants).length ,0);
        assert.notStrictEqual(JSON.stringify(combat.equipes["equipe2"].combattants).length ,0);
        // vérifie que les 3 combattants sont différents
        assert.notDeepStrictEqual(combattants[0], combattants[1]);
        assert.notDeepStrictEqual(combattants[0], combattants[2]);
        assert.notDeepStrictEqual(combattants[1], combattants[2]);
    })
})





