import { verifSEARCH } from "./Repertoire/repertory_function";
import { searchTrue } from "./Repertoire/callAPI";

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  verifSEARCH(searchTrue);
});
