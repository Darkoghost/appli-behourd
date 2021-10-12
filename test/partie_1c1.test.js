const assert = require('assert')
let sinon = require('sinon')
let Session = require('../app/Session.js')
let Combat = require('../app/Combat.js')
let Equipe = require('../app/Equipe.js')
let Combattant = require('../app/Combattant.js')

// Given 2 players WHEN session start THEN Launch a game in 1V1
describe('FaireUnCombatEn1c1', function()
{
    it('La partie doit commencer', function(){

        // 1- Création de la session
        let session = new Session.constructor();
        // 2- Récupération des combattants
        let combattant1 = new Combattant.constructor("GROS","Paul",134,1,2006);
        let combattant2 = new Combattant.constructor("MAIGRE","Louis",134,1,2012);

        // 3- Ajout de tous les combattants dans la session
        session.addCombattants(combattant1, combattant2);
        // 4- Création d'un combat
        session.createCombat();

        // 5- Création des équipes
        let combat = session.combat;
        combat.createEquipe1v1(combattant1, combattant2);

        // vérifie qu'il y a bien 2 équipes
        assert.strictEqual(equipes.length, 2);
        // vérifie que dans chaque équipe il y a bien 1 combattant
        // Assert.True(equipes.All(equipe => equipe.PlayerCount === 1));
        // vérifie que les 2 combattants sont différent
        assert.notDeepStrictEqual(combattant1, combattant2);
        // assert.notStrictEqual(JSON.stringify(combattant1), JSON.stringify(combattant2));
    })
})

/*
it('La partie doit commencer', function(){
    let equipe1 = new Equipe();
    let equipe2 = new Equipe();
    let combattant1 = new Combattant("GROS","Paul",134,1,2006);
    let combattant2 = new Combattant("MAIGRE","Louis",134,1,2012);
    let combattant3 = new Combattant("PETIT","Jean",134,1,2001);
    let combattant4 = new Combattant("GRAND","Jacque",134,1,2010);
    let combattant5 = new Combattant("GROS","Paul",134,0,0);
    let combattant6 = new Combattant("GROS","Paul",134,0,0);
    equipe1.combattant.add(combattant1);
    equipe2.combattant.add(combattant2);
    let Combat = new Combat(equipe1,equipe2);
    assert.equals(equipe1.collectioncombattant.length(),equipe2.collectioncombattant.length() )
})*/
