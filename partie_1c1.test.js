const assert = require('assert')
var sinon = require('sinon')

// Given 2 players WHEN want to play THEN Launch a game in 1V1
describe('FaireUnePartieEn1c1', function()
{
    it('La partie doit commencer', function(){
        let equipe1 = new Equipe();
        let equipe2 = new Equipe();
        let joueur1 = new Joueur();
        let joueur2 = new Joueur();
        equipe1.collectionjoueur.add(joueur1);
        equipe2.collectionjoueur.add(joueur2);
        let partie = new Partie(equipe1,equipe2);
        assert.equals(equipe1.collectionjoueur.length(),equipe2.collectionjoueur.length() )
    })
})