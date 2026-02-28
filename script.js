console.log("Syntaxes de javascript");
// déclaration de variable
var nom;
nom = "Ali";
nom = "Abalo";
console.log(nom);

var nom = "Komi";
// concatenation
console.log("Comment tu vas " + nom);

// déclarer une seule fois une variable
let age = 21;
age = 20;

// déclaration de la constante
const pie = 3.14;
console.log(pie);

// det le type de donnée d'un élément
console.log(typeof pie);
console.log(typeof nom);
console.log(typeof age);

// tableau
var notes = Array(8, 10, 15, 12, 9, 11);
console.log("La note est : " + notes[5]);
// type de donnée d'un  élément
console.log(typeof notes);
console.log(notes);
// ajouter un élément à la suite
notes.push(13);
console.log(notes);
// envelver le dernier élément
notes.pop();
console.log(notes);
// connaitre la taille de ce tableau
console.log(notes.length);
console.log("notes à partir de :");
console.log(notes.slice(0, 4));
// connaitre l'index d'un element
console.log(notes.indexOf(12));
// boucle
notes.forEach((element) => console.log(element));
// ou ça
var sommeNotes = 0;
notes.forEach((item) => {
  // d'autre traitement
  //   sommeNotes += item;
  sommeNotes = sommeNotes + item;
  // return console.log(item);
});
console.log("La somme des notes est : " + sommeNotes);
// map
notes.map((element) => console.log(element));

notes.map((element, index) => {
  console.log(index + " : " + element);
  //   console.log(element);
});
// convertir le tableau en String séparé par ,
console.log(notes.join(","));
// calculer la moyenne
var noteMoyenne = sommeNotes / notes.length;
console.log("La moyenne est : " + Math.round(noteMoyenne));

// objet
var notesUes = { Math: 8, PC: 10, HG: 15, FR: 12, ANG: 9, PH: 11 };
console.log(notesUes.PC);
console.log(notesUes);

// les structures de controlles
// structures conditionnelles et structures répétives
var categoryAge = 13;
if (categoryAge < 10) {
  // traitement 1
  console.log("Catégory Eveil");
} else if (categoryAge <= 11) {
  // traitement 2
  console.log("Poussin");
} else if (categoryAge <= 13) {
  // traitement 3
  console.log("Catégory Min");
} else if (categoryAge <= 15) {
  // traitement 4
  console.log("Catégory Minim");
} else if (categoryAge >= 40) {
  // traitement 5
  console.log("Catégory Vetérant");
} else {
  console.log("Catégory Non connu");
}

// selon ou switch
switch (categoryAge) {
  case categoryAge < 10:
    // traitement 1
    console.log("Catégory Eveil");
    break;
  case categoryAge <= 11:
    // traitement 2
    console.log("Catégory Poussin");
    break;
  case categoryAge <= 13:
    // traitement 2
    console.log("Catégory Mini");
    break;
  default:
    console.log("Catégory Non connu");
}
// boocle
var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
  // i+=1;
  // i=i+1
}

// do while
var n = 1;
do {
  console.log(n);
  n++;
} while (n <= 10);

// for
for (var i = 0; i <= 10; i++) {
  console.log("7 x ", i, " = ", 7 * i);
}
// exemple
for (var i = 0; i < notes.length; i++) {
  console.log(notes[i]);
}

// sous programme
// déclaration
function calculCube() {
  var n = 9;
  // var cube = n * n * n;
  // var cube = n ** 3;
  var cube = Math.pow(n, 3);
  console.log("Le cube de ", n, "est : ", cube);
}
// appel
calculCube();

// procédure avec paramètre
function calculCubes(n) {
  console.log("Le cube de ", n, "est : ", n ** 3);
}
calculCubes(3);
calculCubes(5);
calculCubes(7);
// fonction
function calculFactorile(n) {
  var fac = 1;
  var produit = 1;
  while (fac <= n) {
    // produit = produit* fac;
    produit *= fac;
    fac++;
  }
  return produit;
}
var n = 8;
var factoriel = calculFactorile(n);
console.log("La factorielle de", n, "est", factoriel);

// POO
const car = {
  mark: "Bmw",
  model: "Bmw",
  year: 2000,
};
console.log(car);
console.log(car.mark);
car.year = 2002;
console.log(car.year);
// création d'un cercle
const createCircle = {
  rayon: 5,
  dessiner: function () {
    console.log("Cercle rayon", this.rayon);
  },
};
createCircle.dessiner();
// factory
function createCircl(rayon) {
  return {
    rayon,
    dessiner: function () {
      console.log("Cercle rayon", this.rayon);
    },
  };
}
const circle1 = createCircl(7);
circle1.dessiner();

// objet voiture
var bus = {
  name: "BMW",
  model: "bmw22",
  année: 2000,
  afficheInfo: function () {
    console.log(
      "Le nom de la voiture est :",
      this.name,
      "et le model est",
      this.model,
      "l'année ",
      this.année
    );
  },
};

console.log(bus.afficheInfo());
console.log(bus.name);
bus.model = "bm2233";
console.log(bus.model);

// constructeur
function Bus(name, model, année) {
  this.name = name;
  this.model = model;
  this.année = année;
  this.afficheInfo = function () {
    console.log(
      "Le nom de la voiture est :",
      this.name,
      "et le model est",
      this.model,
      "l'année ",
      this.année
    );
  };
}
var bus1 = new Bus();
bus1.name = "Toyota";
bus1.model = "Typ";
bus1.année = 1990;
bus1.afficheInfo();

var bus2 = new Bus("KIA", "KIAee", 2005);
bus2.afficheInfo();

var isSuccess = true;
if (!isSuccess) {
  console.log("Bravoooo !"); // a
} else {
  console.log("ooorrrr !"); // b
}

//
var a = "2";
var b = 4;
console.log(a + b);
// data convert
// string to number
a = parseInt(a);
console.log(a + b);
// number to string
b = b.toString();
console.log(a + b);
var c = 15.5;
console.log(typeof c);
c = "15.5";
c = parseInt(c);
console.log(c);
// string to float
c = parseFloat(c);
console.log(c);

//
var fullName = "Amah Kwatcha";
function Person(name, fname) {
  (this.name = name), (this.fname = fname);
}
var person1 = new Person();
fullName = fullName.split(" ");
console.log(fullName);
person1.name = fullName[0];
person1.fname = fullName[1];
console.log(person1.name);
console.log(person1.fname);
