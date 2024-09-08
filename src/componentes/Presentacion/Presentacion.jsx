import React from 'react';
import './Presentacion.css';

const Presentacion = () => {
  return (
    <div className='presentacion_div col-12 mt-0'>
      <aux id="sobreMi"></aux>
      <section className="row justify-content-center align-items-center mb-5">
        <figure className="text-center d-none d-lg-block col-lg-2 bracketopen">
          <img src="./sprites/open-bracket.png" alt="Open Bracket" className="img-fluid" />
        </figure>
        <div className="col-12 col-lg-8 mb-5">
          <h3>Hola, mi nombre es</h3>
          <h1>Gastón Varela.</h1>
          <p>Actualmente soy estudiante avanzado de la carrera <span>Analista en tecnologías de la información</span> en la universidad <span className="ORT">ORT Uruguay</span>.</p>
          <p>Poseo una <span>gran pasión por la resolución de problemas.</span> Cuento con habilidades técnicas sólidas respaldadas por proyectos académicos y experiencia práctica en <span>entornos de desarrollo de clase</span> y <span>proyectos personales</span>.</p>
          <p>Estoy ansioso por obtener mi primera experiencia laboral en el área IT.</p>
          <article className='text-center'>
          <a href="#curriculum" className="text-decoration-none curriculumButton">Currículum</a>
          </article>
         
        </div>
        <figure className="text-center d-none d-lg-block col-lg-2 bracketopen">
          <img src="./sprites/close-bracket.png" alt="Close Bracket" className="img-fluid" />
        </figure>
        <div className="row w-50 align-items-center">
          <article className="col-12 col-lg-6 text-center articulos_secundarios">
            <h2 className="text-center">Idiomas</h2>
            <p className="text-start">Español - Nativo</p>
            <p className="text-start">
              Inglés - <a target="_blank" rel="noopener noreferrer" href="https://www.efset.org/cert/6upzXT" className="text-decoration-none rounded">Certificado</a>
            </p>
          </article>
          <article className="col-12 col-lg-6 mt-5 mt-lg-0 articulos_secundarios">
            <h2 className="text-center">Tecnologías conocidas</h2>
            <p className="text-center"><span className='info-tag'>CSS/bootstrap</span><span className='info-tag'>C#/.net</span><span className='info-tag'>JS</span> <span className='info-tag'>SQL</span></p>
            <p className='text-center'><span className='info-tag'>Java</span><span className='info-tag'>MongoDB</span><span className='info-tag'>HTML</span><span className='info-tag'>REACT</span></p>
          </article>
        </div>
      </section>
      
    </div>
  );
};

export default Presentacion;
