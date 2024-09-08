import { ToastContainer } from 'react-toastify'
import './App.css'
import Contacto from './componentes/Contacto/Contacto'
import Estudios from './componentes/Estudios/Estudios'
import Header from './componentes/Header/Header'
import Presentacion from './componentes/Presentacion/Presentacion'
import Proyectos from './componentes/Proyectos/Proyectos'
import Robot from './componentes/Robot/Robot'
import Footer from './componentes/Footer/Footer'
import Waves from './componentes/Waves/Waves'
import Flecha from './componentes/Flecha/Flecha'
import TypeWriter from './componentes/TypeWriter/TypeWriter'

function App() {

  return (
    <div className='container-fluid'>
    <div className='row mt-5 justify-content-center'>
    <Header></Header>
    <Robot></Robot>
    <TypeWriter></TypeWriter>
    <Presentacion></Presentacion>
    <Flecha id="proyectos"></Flecha>
    <Proyectos></Proyectos>
    <Estudios></Estudios>
    <Flecha id="contacto"></Flecha>
    <Contacto></Contacto>
    <Footer></Footer>
    <Waves></Waves>
    <ToastContainer />
    </div>
    </div>
  )
}

export default App
