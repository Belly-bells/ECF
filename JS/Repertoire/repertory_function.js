import { searchTrue } from "./callAPI.js"; //Attention au ".js"
//Création de la RegExp + conditions avec mise à plats de conditions
export const verifSEARCH = () => {
  let monInput = document.querySelector("input").value;
  let regName = /^\p{L}+$/iu;
  //Flag Unicode "u" est obligatoire en cas d'utilisation de "p{L}"
  //Flag intensive "i" pour ignorer la casse (majuscule/minuscule)
  //p{L} = toutes les lettres unicodes (a-z, A-Z, é, è, œ, etc.)
  let regNum = /^#?\d+$/;
  // "?" => signifie que le symbole avant est optionnel
  // "+" => signifie " 1 et plus de 1"

  if (!regName.test(monInput) && !regNum.test(monInput)) {
    searchFalse("Donnée invalide");
    return;
  }

  //Conditions (opérateurs ternaires) de déermination + récupération du type de la recherche (mots ou suite numérique)
  let searchType = regName.test(monInput) ? "name" : "number";
  searchTrue(monInput, searchType);
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

//Condition false = création d'autres balises
export function searchFalse(message) {
  const node = document.querySelector("#error-message");
  node.textContent = message;
}

export function addTeam(pokemon) {
  const equipe = JSON.parse(localStorage.getItem("equipe")) || []; // Récupération = conversion inversion
  console.log("Equipe actuelle :", equipe, "Longueur :", equipe.length);

  //Conditions : pas plus de 6 pokémons par éuipe
  if (equipe.length >= 6) {
    searchFalse("Ton équipe est compléte, cher dresseur !");
    return;
  }

  equipe.push(pokemon); //Ajouter dans l'équipe
  localStorage.setItem("equipe", JSON.stringify(equipe)); // Stocker = conversion objet → string. Méthode statique ".stringify()" convertit une valeur en une chaine de caractére JSON (JavaScript object Notation).
}
