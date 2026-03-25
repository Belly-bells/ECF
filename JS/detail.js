import { pokemonScreen } from "./Repertoire/repertory_class.js";
//Ajout d'un écouteur de clic pour rediriger vers la page HTML "detail".
const params = new URLSearchParams(window.location.search); //objet JS = lire facielment les paramétres de l'URL.
const id = params.get("id"); //".get("paramétre") = Récupére la valeur du paramétre.
