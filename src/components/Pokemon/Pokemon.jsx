import { Link } from 'react-router-dom';
import './pokemon.css';
function Pokemon({name,image,id}){
return (
    <div className='pokemons'>
        <Link to={`/pokemon/${id}`}>
        <div id='name'>{name}</div>
        <div className='pokemon-image'><img src={image}/></div>
        </Link>
    </div>
)
}
export default Pokemon;