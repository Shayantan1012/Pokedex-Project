import { useEffect } from "react";
import './pokemonlist.css';
import { useState } from "react";
import axios from 'axios'
import Pokemon from "../Pokemon/Pokemon";
function PokemonList(){
    const [pokemonList,setPokemonList]=useState([]);
    const [isLoading,setLoading]=useState(true);
    const [pokedexUrl,setpokedexUrl]=useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl,setnextUrl]=useState("");
    const [preUrl,setpreUrl]=useState("");
async function download_data(){
    setLoading(true);
    const responce=await axios.get(pokedexUrl);
    const pokemonResults=responce.data.results;
    console.log(responce.data);
    setnextUrl(responce.data.next);
    setpreUrl(responce.data.previous);
    const pokemonResultPromise=pokemonResults.map((pokemon)=>axios.get(pokemon.url));
    const pokemonData=await axios.all(pokemonResultPromise);
    //console.log(pokemonData);
    const res=pokemonData.map((pokeData)=>{
        const pokemon=pokeData.data;
        return ({
            name:pokemon.name,
            id:pokemon.id,
            image:pokemon.sprites.other.dream_world.front_default,
            types:pokemon.types})
    });
setPokemonList(res);
setLoading(false);
}

    useEffect(()=>{
        download_data();
    },[pokedexUrl]);
    return (
    <div className="pokemon-list-wrapper"> 
   <div id="list">List of Pokemon</div> 
   <div className="pokemon_wrapper">  
    {(isLoading)? 'Loading...':pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)}</div> 
    <div className="controls">
        <button id="pre"  disabled={preUrl==null} onClick={()=>setpokedexUrl(preUrl)}>PREV</button>
        <button id="next" disabled={nextUrl==null} onClick={()=>setpokedexUrl(nextUrl)}>NEXT</button>
    </div>
        </div>
    )
}
export default PokemonList;