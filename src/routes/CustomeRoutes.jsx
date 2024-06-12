import { Routes ,Route} from "react-router-dom";
import Pokedex from "../components/pokedex/pokedex";
import Pokemon_details from "../components/pokemon_details/pokemon_details";
function CustomeRoutes(){
return( 
    <Routes>
        <Route path="/" element={<Pokedex/>}/>
  <Route  path="/pokemon/:id" element={<Pokemon_details/>}/>
    </Routes>
)
}
export default CustomeRoutes;