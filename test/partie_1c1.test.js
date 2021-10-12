const assert = require('assert')
let sinon = require('sinon')
let Session = require('../app/Session.js')
let Combattant = require('../app/Combattant.js')

// Given 2 players WHEN session start THEN Launch a game in 1V1
describe('FaireUnCombatEn1c1', function()
{
    it('La partie doit commencer', function(){
        // 1- Création de la session
        let session = new Session();
        // 2- Récupération des combattants
        let combattant1 = new Combattant("GROS","Paul",134,1,2006);
        let combattant2 = new Combattant("MAIGRE","Louis",134,1,2012);

        // 3- Ajout de tous les combattants dans la session
        session.addCombattants(combattant1, combattant2);
        // 4- Création d'un combat
        session.createCombat(session.combattants);
        let combat = session.combat;

        // vérifie qu'il y a bien 2 équipes
        assert.strictEqual(JSON.stringify(combat.equipes).length ,2);
        // vérifie que dans chaque équipe il y a bien 1 combattant
        assert.notStrictEqual(JSON.stringify(combat.equipes["equipe1"].combattants).length ,1);
        assert.notStrictEqual(JSON.stringify(combat.equipes["equipe2"].combattants).length ,1);
        // vérifie que les 2 combattants sont différent
        assert.notDeepStrictEqual(combat.equipes["equipe1"].combattants[0], combat.equipes["equipe2"].combattants[0]);
    })
})
