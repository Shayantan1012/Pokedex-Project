import './App.css'
import CustomeRoutes from './routes/CustomeRoutes'
import { Link } from 'react-router-dom'
function App() {
  return (
    <div className='app'>
      <h1 id="pokedex">< Link to="/">POKEDEX</Link></h1>
      <CustomeRoutes/>
  </div>
  )
}

export default App;
