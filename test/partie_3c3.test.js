const assert = require('assert')
let sinon = require('sinon')
let Session = require('../app/Session.js')
let Combattant = require('../app/Combattant.js')

// étant donné une session comportant 3 joueurs voulant faire 2 combats et 3 joueurs voulant rejoindre le second combat
// quand une partie démarre alors elle comporte 2 équipes contenant chacune des joueurs différents

describe('FaireDeuxCombatEn2c1Puis3c3', function()
{
    it('La partie doit commencer', function(){

        // 1- Création de la session
        let session = new Session();
        // 2- Récupération des combattants
        let combattant1 = new Combattant("GROS","Paul",134,1,2006);
        let combattant2 = new Combattant("MAIGRE","Louis",65,1,2012);
        let combattant3 = new Combattant("PETIT","Gan",140,0,2001);
        let combattant4 = new Combattant("GRAND","Hom",58,1,2016);
        let combattant5 = new Combattant("GOLD","Jean",102,0,2001);
        let combattant6 = new Combattant("MAN","Jacques",109,0,2001);

        // 3- Ajout de tous les combattants dans la session
        session.add3Combattants(combattant1, combattant2, combattant3);
        // 4- Création d'un combat avec équilibrage des équipes
        session.createCombatEquilibreParPoid(session.combattants);
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

        // 5- Ajout des nouveaux combattants dans la session
        session.add3Combattants(combattant4, combattant5, combattant6);
        // 6- Création d'un second combat avec équilibrage des équipes
        session.createCombatEquilibreParPoid(session.combattants);

        // vérifie qu'il y a bien 2 équipes
        assert.strictEqual(JSON.stringify(combat.equipes).length ,2);
        // vérifie que dans chaque équipe il y a au moins 1 combattant
        assert.notStrictEqual(JSON.stringify(combat.equipes["equipe1"].combattants).length ,0);
        assert.notStrictEqual(JSON.stringify(combat.equipes["equipe2"].combattants).length ,0);
        // vérifie que les 6 combattants sont différents
        assert.notDeepStrictEqual(combattants[0], combattants[1]);
        assert.notDeepStrictEqual(combattants[0], combattants[2]);
        assert.notDeepStrictEqual(combattants[0], combattants[3]);
        assert.notDeepStrictEqual(combattants[0], combattants[4]);
        assert.notDeepStrictEqual(combattants[0], combattants[5]);
        assert.notDeepStrictEqual(combattants[0], combattants[6]);
        assert.notDeepStrictEqual(combattants[1], combattants[2]);
        assert.notDeepStrictEqual(combattants[1], combattants[3]);
        assert.notDeepStrictEqual(combattants[1], combattants[4]);
        assert.notDeepStrictEqual(combattants[1], combattants[5]);
        assert.notDeepStrictEqual(combattants[1], combattants[6]);
        assert.notDeepStrictEqual(combattants[2], combattants[3]);
        assert.notDeepStrictEqual(combattants[2], combattants[4]);
        assert.notDeepStrictEqual(combattants[2], combattants[5]);
        assert.notDeepStrictEqual(combattants[2], combattants[6]);
        assert.notDeepStrictEqual(combattants[3], combattants[4]);
        assert.notDeepStrictEqual(combattants[3], combattants[5]);
        assert.notDeepStrictEqual(combattants[3], combattants[6]);
        assert.notDeepStrictEqual(combattants[4], combattants[5]);
        assert.notDeepStrictEqual(combattants[4], combattants[6]);
        assert.notDeepStrictEqual(combattants[5], combattants[6]);

    })
})




