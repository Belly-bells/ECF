import { pokemon } from "./repertory_class";
import { verifSEARCH, searchFalse } from "./repertory_function";
verifSEARCH();

const searchTrue = async (monInput, searchType) => {
  try {
    //Constance de réponse
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${monInput}`);

    if (!response.ok) {
      //Vérification de la réponse HTTP avant l'exécution du reste du code.
      throw new Error("Pokémon introuvable"); //Levé d'erreur + message personnalisé
    }
    const data = await response.json(); //Parser les données
    if (!data) {
      //Vérification de l'exploitabilités des données reçues
      throw new Error("Donnée invalide");
    } //Levé d'erreur + message personnalisé

    //Instanciation de la classe objet POKEMON
    const POKEDEX = new pokemon(
      data.sprites.front_default,
      data.forms.name,
      data.id,
      data.types[0].type.name,
      data.types[0].base_stat,
      data.types[1].base_stat,
      data.types[2].base_stat,
      data.types.type,
    ); //création d'un nouveau tableau avec les informations de l'objet ".types", j'utilise la méthode ".map()" => t => t.type.name (fonction fléchée)

    //Appel de la méthode de la classe objet
    pokemon.getHTML();
  } catch (erreur) {
    searchFalse(erreur.message);
  }
};
