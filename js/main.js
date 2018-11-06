function warrior (name, attack, life, magic) {
  this.name = name;
  this.attack = attack;
  this.life = life;
  this.magic = magic;
  this.Fight = function(cible) {
    cible.life = cible.life - this.attack;
    alert(name + " attaque " + cible.name + ". Il reste à la cible " + cible.life);
    return cible.life;
  }
}


var warrior1 = new warrior("warrior1", 35, 100);
var warrior2 = new warrior("warrior2", 20, 150);
var magician = new warrior("magician", 15, 80, 120);
magician.magic = 120;
magician.care = function() {
  if(magician.magic>19){
    magician.magic = magician.magic - 20;
    magician.life = magician.life + 10;
    alert("Le magicien se soigne, il lui reste " + magician.life)
    return magician.life + magician.magic;
  } else {
    alert("Le magicien ne dispose pas assez de mana");
  }
}

warrior1.Fight(magician);
warrior2.Fight(magician);
magician.care();
magician.Fight(warrior1);


// function magician (name, attack, life, magic) {
//   this.name = name;
//   this.attack = attack;
//   this.life = life;
//   this.magic = magic;
//
//
//
//   this.care = function() {
//       this.magic = this.magic - 20;
//       this.life = this.life + 10;
//   }
// }
//
// var magician1 = new magician("magician1", 15, 80, 120);
//
// if(magician1.magic>19){
//   magician1.care();
//   alert("mana magicien" + magician1.magic);
//   alert("le magicien a " + magician1.life + " points de vie");
//
// }
