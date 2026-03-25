import { createEvolution } from "./repertory_function.js"; //Attention au ".js"

export class pokemon {
  constructor(imgURL, name, numPok, type, country, ptLife, ptAttack, ptDef, evolution, description) {
    this.imgURL = imgURL; //OK
    this.name = name; //OK
    this.numPok = numPok; //OK
    this.type = type; //OK
    this.country = country; //OK
    this.ptLife = ptLife; //OK
    this.ptAttack = ptAttack;
    this.ptDef = ptDef;
    this.evolution = evolution;
    this.description = description;
  }

  getHTML() {
    const pok = document.querySelector("section");
    pok.innerHTML = ""; //Vide tout le contenu (balise + texte) alors que ".textContent" laissent des balises orphelines
    //Variable 1 = Image
    let imagePok = document.createElement("img");
    imagePok.classList.add("imgPok");
    pok.appendChild(imagePok);
    imagePok.setAttribute("src", this.imgURL);
    //Variable 2 = nom du prokémon
    let namePok = document.createElement("h2");
    namePok.id = "nomPok";
    pok.appendChild(namePok);
    namePok.textContent = this.name;
    //Variable 3 = numéro de Pokédex
    let numePok = document.createElement("p");
    numePok.id = "numberPok";
    pok.appendChild(numePok);
    numePok.textContent = this.numPok;
    //variable 4 = type du pokémon + boucles for + conditions (if) dans la boucle
    // //Boucles "for" + condtions (méthode : utilisation de la mise à plat)
    for (const elt of this.type) {
      let typePok = document.createElement("p");
      typePok.id = "tyPok";
      pok.appendChild(typePok);
      typePok.textContent = elt;
    }

    //Variable 5 = Région de vie
    let countPok = document.createElement("p");
    countPok.id = "coontryPok";
    pok.appendChild(countPok);
    countPok.textContent = this.country;

    //Variable 6 = Points de vie
    let ptL = document.createElement("p");
    ptL.id = "pointLife";
    pok.appendChild(ptL);
    ptL.textContent = this.ptLife;

    //Variable 7 = Points d'attaque
    let ptAPok = document.createElement("p");
    ptAPok.id = "pointAttack";
    pok.appendChild(ptAPok);
    ptAPok.textContent = this.ptAttack;

    //Variable 8 = Points de défense
    let ptDefPok = document.createElement("p");
    ptDefPok.id = "pointDefense";
    pok.appendChild(ptDefPok);
    ptDefPok.textContent = this.ptDef;

    //Variable 9 = Evolution possible en fonction du niveau + niveau d'évolution
    //Appel de la fonction avec en paramétre (this.evolution)
    createEvolution(this.evolution);

    //variable 10 = Description
    let descPok = document.createElement("p");
    descPok.id = "descriptionPok";
    pok.appendChild(descPok);
    descPok.textContent = this.description;
  }
}

export class pokemonScreen {
  constructor(name, image, number, categories) {
    this.name = name;
    this.image = image;
    this.number = number;
    this.categories = categories;
  }

  getCArdHTML() {
    const screenPok = document.querySelector("main");

    let imgP = document.createElement("img");
    imgP.classList.add("screenPok");
    screenPok.appendChild(imgP);
    imgP.setAttribute("src", this.image);
    //Variable 2 = nom du prokémon
    let nomPok = document.createElement("h2");
    nomPok.id = "namePok";
    screenPok.appendChild(nomPok);
    nomPok.textContent = this.name;
    //Variable 3 = numéro de Pokédex
    let numberPok = document.createElement("p");
    numberPok.id = "numPok";
    screenPok.appendChild(numberPok);
    numberPok.textContent = this.number;

    for (const elt of this.categories) {
      let catPok = document.createElement("p");
      catPok.id = "categoriesPok";
      screenPok.appendChild(catPok);
      catPok.textContent = elt;
    }
  }
}
