
const pokedex = document.getElementById("pokedex")

function fetchPokemon(){
const promises =[]
for(let i =1;i<=150;i++)
{
    promises.push(
fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(name => name.json()))
    
    }
    Promise.all(promises).then(results =>{
        const pokemon = results.map (data => (
            {
                name : data.name,
                ability :data.abilities.map(able => able.ability.name).join(","),
                image :  data.sprites['front_default'],
            }

        ))
      displayPokemon(pokemon)})
    .catch()
    }
   fetchPokemon()
    function displayPokemon(pokemon){
        const pokemonHTMLString = pokemon.map(pokemon=>`
        <li>
           <img src = "${pokemon.image}">
             <h2>${pokemon.name}</h2>
             <h4>${pokemon.ability}</h2>
        </li>
        `).join("")
      pokedex.innerHTML=pokemonHTMLString
   }