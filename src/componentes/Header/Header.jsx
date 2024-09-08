import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header className="row justify-content-center align-items-center py-3">
    <nav className="col-8 list-unstyled navizq">
      <ul className="list-inline">
        <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer"href="https://github.com/gastonvar" className='githublogo'></a></li>
        <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="" className='linkedinlogo'></a></li>
      </ul>
    </nav>
    <nav className="list-unstyled col-4 text-center navder">
        <ul className="list-inline">
            <li className="list-inline-item"><a href="#sobreMi" className="text-decoration-none">Sobre mi</a></li>
            <li className="list-inline-item"><a href="#proyectos" className="text-decoration-none">Proyectos</a></li>
            <li className="list-inline-item"><a href="#estudios" className="text-decoration-none">Estudios</a></li>
            <li className="list-inline-item"><a href="#contacto" className="text-decoration-none">Contacto</a></li>
            <li className="list-inline-item"><a href="Portfolio2/Escolaridad/Escolaridad.png" target="_blank" className="text-decoration-none">Escolaridad</a></li>
        </ul>
    </nav>
</header>
  )
}

export default Header