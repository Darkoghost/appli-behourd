

let equipe1 = new Equipe();
let equipe2 = new Equipe();
let joueur1 = new Combattant("GROS","Paul",134,1,2006);
let joueur2 = new Combattant("MAIGRE","Louis",134,1,2012);

// 1- Création de la session
let session = new Session();
// 2- Récupération des combattants
let combattant1 = new Combattant.constructor("GROS","Paul",134,1,2006);
let combattant2 = new Combattant.constructor("MAIGRE","Louis",134,1,2012);

// 3- Ajout de tous les combattants dans la session
session.addCombattants(combattant1, combattant2);