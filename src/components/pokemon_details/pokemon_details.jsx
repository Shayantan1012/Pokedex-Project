import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import './Pokemon-details.css'
function Pokemon_details(){
    const [pokemon,setPokemon]=useState({});
    const {id}=useParams();
    async function download_details(){
        const responce=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({
            name:responce.data.name,
            image:responce.data.sprites.other.dream_world.front_default,
            weight:responce.data.weight,
            height:responce.data.height,
            types:responce.data.types.map((t)=>{t.type.name}),
        })
    }
    useEffect(()=>{
        download_details();
    },[]);
return (
    <div className="pokemon-details">
<div className="pokemon-details-name">Name:{pokemon.name}</div>
<img className="pokemon-details-image" src={pokemon.image}/>
<div className="pokemon-details-height">Height:{pokemon.height}</div>
<div className="pokemon-details-weight">Weight:{pokemon.weight}</div>
<div className="pokemon-details-type">
    {pokemon.types && pokemon.types.map((t)=>(<div key={t}>{t}</div>))}
</div>
</div>
)
}
export default Pokemon_details;