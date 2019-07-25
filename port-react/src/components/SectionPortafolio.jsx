import React from 'react'
import LogoAca from '../images/academia-geek.jpg'
class SectionPortafolio extends React.Component{
    render(){
        return(
            <section id="portafolio" className="portfolio">
            <div className="container">
                <h2>Portafolio (Proyectos Destacados)</h2>
                <article className="project">
                    <div className="project-details">
                        <h3 className="project-title">Academia Geek</h3>
                        <h6 className="project-course">Agile Innova</h6>
                        <p className="project-date"><small><strong>Fecha</strong> 01/01/2019</small></p>
                        <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://makaia.org/es/academiageek/" target="_blank">www.makaia.org/es/academiageek/</a></small></p>
                        <p className="project-description">Academia Geek es el resultado de una alianza estratégica entre,
                            Agile Innova, Makia, y E-volution con el fin de ayudarte en adquirir competencias
                            y habilidades en desarrollo junior en aplicaciones webpreparándote así para comenzar tu 
                            camino en el emprendimiento tecnológico o trabajar con alguno de nuestros aliados.
                        </p>
                    </div>
                    <figure className="project-imageContainer">
                        <img className="project-image" src={LogoAca} width="500" height="400" alt=""/>
                    </figure> 
                </article>
                <article className="project">
                        <div className="project-details">
                            <h3 className="project-title">Academia Geek</h3>
                            <h6 className="project-course">Agile Innova</h6>
                            <p className="project-date"><small><strong>Fecha</strong> 01/01/2019</small></p>
                            <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://makaia.org/es/academiageek/" target="_blank">www.makaia.org/es/academiageek/</a></small></p>
                            <p className="project-description">Academia Geek es el resultado de una alianza estratégica entre,
                                Agile Innova, Makia, y E-volution con el fin de ayudarte en adquirir competencias
                                y habilidades en desarrollo junior en aplicaciones webpreparándote así para comenzar tu 
                                camino en el emprendimiento tecnológico o trabajar con alguno de nuestros aliados.
                            </p>
                        </div>
                        <figure className="project-imageContainer">
                                <img className="project-image" src={LogoAca} width="500" height="400" alt=""/>
                        </figure> 
                </article>
            </div>
        </section> 
        );
    }
}

export default SectionPortafolio;