export class pokemon {
  constructor(imgURL, name, numPok, type, country, ptLife, ptAttack, ptDef, evolution, description) {
    this.imgURL = imgURL; //OK
    this.name = name; //OK
    this.numPok = numPok; //OK
    this.type = type; //OK
    this.country = country;
    this.ptLife = ptLife;
    this.ptAttack = ptAttack;
    this.ptDef = ptDef;
    this.evolution = evolution;
    this.description = description;
  }

  getHTML() {
    const pok = document.querySelector("section");
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
    for (i = 1; i >= 2; i++) {
      let typePok = document.createElement("p");
      typePok.id = "tyPok";
      pok.appendChild(typePok);
      typePok.textContent = this.type;
    }
  }
}
