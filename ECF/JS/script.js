import { verifSEARCH } from "./Repertoire/repertory_function.js"; //Attention au ".js"
import { searchTrue } from "./Repertoire/callAPI.js"; //Attention au ".js"

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  verifSEARCH(searchTrue);
});
