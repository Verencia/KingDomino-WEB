
/* biome :
* 1 = champs
* 2 = prairie
* 3 = eau
* 4 = marais
* 5 = bois
* 6 = mine
* */
var tabCartes =[];
var tabCartesChamps = [];
var tabCartesPrairie = [];
var tabCartesEau = [];
var tabCartesMarais = [];
var tabCartesBois = [];
var tabCartesMine = [];
function Cases(couronne,biome) {
  var Case = {};
  Case.nbCouronnes=couronne;
  Case.biome=biome;
  Case.valeurDominoAttribue=undefined;
  Case.depart = undefined;
  switch (biome) {
    case 1:
      tabCartesChamps.push(Case);
      break;
    case 2:
      tabCartesPrairie.push(Case);
      break;
    case 3:
      tabCartesEau.push(Case);
      break;
    case 4:
      tabCartesMarais.push(Case);
      break;
    case 5:
      tabCartesBois.push(Case);
      break;
    case 6:
      tabCartesMine.push(Case);
      break;
  }
}
function groupeDeCartes(nbrCartes,biome,nbrCarte1Cour,nbrCarte2Cour,nbrCarte3Cour) {
  for (var i = nbrCartes;i >0;i--){
    if (i>nbrCartes-nbrCarte3Cour){
      Cases(3,biome);
    }else if (i>nbrCartes-nbrCarte2Cour){
      Cases(2,biome);
    }else if (i>nbrCartes-nbrCarte1Cour){
      Cases(1,biome);
    }else{
      Cases(0,biome);
    }
  }
}
/* Cartes Champs (26 dont 5 à 1 couronne) */
groupeDeCartes(26,1,5,0,0);
/* Cartes prairie (14 dont 2 à 1 couronne et 2 à 2 couronnes)*/
groupeDeCartes(14,2,2,2,0);
/* Cartes eau (18 dont 6 à 1 couronne)*/
groupeDeCartes(18,3,6,0,0);
/* Cartes marais (10)*/
groupeDeCartes(10,4,2,2,0);
/* Cartes bois (22)*/
groupeDeCartes(22,5,6,0,0);
/* Cartes mine (6)*/
groupeDeCartes(6,6,1,3,1);










tabCartes.push(tabCartesChamps,tabCartesPrairie,tabCartesEau,tabCartesMarais,tabCartesBois,tabCartesMine);

//document.body.appendChild(tabCartesChamps[1].image);
document.write(tabCartes[2][0].biome);
function createDomino(case1,case2) {
  var Domino = {};
  Domino.val=25;
  Domino.case1=case1;
  Domino.case2=case2;
  var image = new Image();
  if (Domino.case1['biome']===1 && Domino.case2['biome']===1 && Domino.case1['nbCouronnes']===0 && Domino.case2['nbCouronnes']===0) {
      image.src = "img/biomes_égaux/champs.png";
  }
  else if (Domino.case1['biome']===2 && Domino.case2['biome']===2 && Domino.case1['nbCouronnes']===0 && Domino.case2['nbCouronnes']===0){
    image.src = "img/biomes_égaux/prairie.png";
  }
  else if (Domino.case1['biome']===3 && Domino.case2['biome']===3 && Domino.case1['nbCouronnes']===0 && Domino.case2['nbCouronnes']===0){
    image.src = "img/biomes_égaux/eau.png";
  }
  else if (Domino.case1['biome']===4 && Domino.case2['biome']===4 && Domino.case1['nbCouronnes']===0 && Domino.case2['nbCouronnes']===0){
    image.src = "img/biomes_égaux/marais.png";
  }
  else if (Domino.case1['biome']===5 && Domino.case2['biome']===5 && Domino.case1['nbCouronnes']===0 && Domino.case2['nbCouronnes']===0){
    image.src = "img/biomes_égaux/bois.png";
  }


  image.onload = function() {};
  let div = document.createElement('p');
  document.body.append(div);
  Domino.img=image;
  div.appendChild(image);
  document.write(Domino.case1['biome']);
}

createDomino(tabCartesChamps[23],tabCartesChamps[24]);
createDomino(tabCartesPrairie[13],tabCartesPrairie[12]);
createDomino(tabCartesEau[17],tabCartesEau[16]);
createDomino(tabCartesMarais[9],tabCartesMarais[8]);
createDomino(tabCartesBois[18],tabCartesBois[17]);




