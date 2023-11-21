import { getPokemon, getPokemonAll } from "./pokemonAPI.js"



//MAIN
(async() => {
    const list = await getPokemonAll();
    console.log(list);
})();

