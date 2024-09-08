import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header className="row justify-content-center align-items-center py-3">
    <nav className="list-unstyled col-12 col-md-4 text-center navder d-none d-sm-block">
        <ul className="list-inline">
            <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer"href="https://github.com/gastonvar" className='githublogo'>‎</a></li>
            <li className="list-inline-item"><a href="#sobreMi" className="text-decoration-none">Sobre mi</a></li>
            <li className="list-inline-item"><a href="#proyectos" className="text-decoration-none">Proyectos</a></li>
            <li className="list-inline-item"><a href="#estudios" className="text-decoration-none">Estudios</a></li>
            <li className="list-inline-item"><a href="#contacto" className="text-decoration-none">Contacto</a></li>
            <li className="list-inline-item"><a href="./Escolaridad/Escolaridad.png" target="_blank" className="text-decoration-none">Escolaridad</a></li>
            <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="" className='linkedinlogo'>‎</a></li>
        </ul>
    </nav>
    <nav className="list-unstyled col-12 col-md-4 text-center navder d-sm-none">
        <ul className="list-inline">
            <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer"href="https://github.com/gastonvar" className='githublogo'>‎</a></li>
            <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="" className='linkedinlogo'>‎</a></li>
        </ul>
    </nav>
</header>
  )
}

export default Header