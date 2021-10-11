const assert = require('assert')
var sinon = require('sinon')
var Equipe = require('../app/Equipe.js')
var Combattant = require('../app/Combattant.js')

// Given 2 players WHEN want to play THEN Launch a game in 1V1
describe('FaireUneCombatEn1c1', function()
{
    it('La partie doit commencer', function(){
        let equipe1 = new Equipe();
        let equipe2 = new Equipe();
        let joueur1 = new Combattant("GROS","Paul",134,1,2006);
        let joueur2 = new Combattant("MAIGRE","Louis",134,1,2012);
        equipe1.add(joueur1);
        equipe2.add(joueur2);
        assert.equals(equipe1.collectionjoueur.length(),equipe2.collectionjoueur.length());
        assert.notEqual(joueur1,joueur2);
    })
})

/*
it('La partie doit commencer', function(){
    let equipe1 = new Equipe();
    let equipe2 = new Equipe();
    let joueur1 = new Combattant("GROS","Paul",134,1,2006);
    let joueur2 = new Combattant("MAIGRE","Louis",134,1,2012);
    let joueur3 = new Combattant("PETIT","Jean",134,1,2001);
    let joueur4 = new Combattant("GRAND","Jacque",134,1,2010);
    let joueur5 = new Combattant("GROS","Paul",134,0,0);
    let joueur6 = new Combattant("GROS","Paul",134,0,0);
    equipe1.combattant.add(joueur1);
    equipe2.combattant.add(joueur2);
    let Combat = new Combat(equipe1,equipe2);
    assert.equals(equipe1.collectionjoueur.length(),equipe2.collectionjoueur.length() )
})*/
