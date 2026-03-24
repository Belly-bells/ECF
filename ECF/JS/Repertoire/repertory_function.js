//Création de la RegExp + conditions avec mise à plats de conditions
const verifSEARCH = () => {
  let monInput = document.querySelector("input");
  let regEx = /^$/;
};

function createEvolution(evolution) {
  const pok = document.querySelector("section");
  for (const elt of evolution) {
    let namEv = document.createElement("h2");
    let imgEv = document.createElement("img");
    pok.appendChild(namEv);
    pok.appendChild(imgEv);
    imgEv.setAttribute("src", elt.imgURL);
    namEv.textContent = elt.name;
    //Boucles pour la crépation des types
    for (const type of elt.type) {
      //Synatxe : for (const variableIteration of tableauSurLequelOnItere)
      let typEv = document.createElement("p");
      pok.appendChild(typEv);
      typEv.textContent = type;
    }
  }
}
