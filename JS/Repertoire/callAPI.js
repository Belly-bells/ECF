import { pokemon } from "./repertory_class.js"; //Attention au ".js"
import { searchFalse } from "./repertory_function.js";

export const searchTrue = async (monInput, searchType) => {
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
      data.sprites.front_default, //IMG
      data.name, //Nom
      data.id, //ID pokédex
      data.types.map((t) => t.type.name),
      null, // country
      data.stats[0].base_stat, //HP
      data.stats[1].base_stat, //Attaque
      data.stats[2].base_stat, //Défense
      null, // evolution
      null, // description
    ); //création d'un nouveau tableau avec les informations de l'objet ".types", j'utilise la méthode ".map()" => t => t.type.name (fonction fléchée)

    //Appel de la méthode de la classe objet
    POKEDEX.getHTML();
  } catch (erreur) {
    searchFalse(erreur.message);
  }
};
//Variable OFFSET pour le point de départ du rechargement de la page = extérieure de la constante loadPokemon pour son scope
let offset = 0; //Point de départ
const limit = 20; //La limite ne changera pas
//Appel API pour le chargement de la page d'acceuil
export const loadPokemon = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    offset += limit; //Réimplantaton de la variable limite dans la variable "offset" afin qu'elle devienne le point de départ du prochain chargement
    return data.results;
  } catch (erreur) {
    searchFalse(erreur.message);
  }
};
//Affichage page d'acceuil : constante appel API pour l'affichage des pokémon
export const fetchPokemonDetails = async (url) => {
  //url est vide + attente d'un paramétre
  const response = await fetch(url);
  if (!response.ok) {
    //Propriété ".ok" = Booléen indique si la réponse à réussi ou pas.
    //Vérification de l'exploitabilités des données reçues
    throw new Error("Donnée invalide");
  } //Levé d'erreur + message personnalisé
  return await response.json();
};

export const loadBatch = async () => {
  const list = await loadPokemon();
  const details = await Promise.all(
    //Promise.all() exécute tous les appels API en parallèle et attend qu'ils soient tous terminés
    list.map(async (pok) => {
      const pokDetails = await fetchPokemonDetails(pok.url);
      return pokDetails;
    }),
  );
};
