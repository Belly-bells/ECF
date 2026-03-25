import { searchTrue, loadBatch } from "./Repertoire/callAPI.js";
import { verifSEARCH } from "./Repertoire/repertory_function.js"; //Attention au ".js"

//Au chargement de la page : une première liste s'affiche
document.addEventListener("DOMContentLoaded", () => {
  loadBatch();
});

//Au click = rechargement d'une nouvelle liste
document.querySelector("#loadAgain").addEventListener("click", () => {
  loadBatch();
});

document.querySelector("form").addEventListener("submit", (e) => {
  //Ecoute la soumission du formulaire plutôt que le click
  e.preventDefault();
  verifSEARCH(searchTrue);
});
