//Création de la RegExp + conditions avec mise à plats de conditions
export const verifSEARCH = () => {
  let monInput = document.querySelector("input").value;
  let regName = /^p{L}+$/iu;
  //Flag Unicode "u" est obligatoire en cas d'utilisation de "p{L}"
  //Flag intensive "i" pour ignorer la casse (majuscule/minuscule)
  //p{L} = toutes les lettres unicodes (a-z, A-Z, é, è, œ, etc.)
  let regNum = /^#?\d+$/;
  // "?" => signifie que le symbole avant est optionnel
  // "+" => signifie " 1 et plus de 1"
};

export function createEvolution(evolution) {
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
