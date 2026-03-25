import { pokemonScreen } from "./Repertoire/repertory_class.js";

const equipe = JSON.parse(localStorage.getItem("equipe")) || [];
for (const elt of equipe) {
  //instanciation
  const affPok = new pokemonScreen(elt.name, elt.image, elt.number, elt.categories);

  affPok.getCardHTML();
}
