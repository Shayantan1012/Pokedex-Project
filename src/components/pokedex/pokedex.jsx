import PokemonList from "../pokemonlist/pokemonlist";
import Search from "../search/search";
import './pokedex.css'
function Pokedex(){
    return (
    <div className='pokedex-wrapper'>
    <div>
    </div>
    <Search/>
    <PokemonList/>
    </div>
    )
}
export default Pokedex;