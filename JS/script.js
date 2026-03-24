import { verifSEARCH } from "./Repertoire/repertory_function.js"; //Attention au ".js"

document.querySelector("form").addEventListener("submit", (e) => {
  //Ecoute la soumission du formulaire plutôt que le click
  e.preventDefault();
  verifSEARCH();
});
