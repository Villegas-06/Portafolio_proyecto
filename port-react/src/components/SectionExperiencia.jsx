import React from 'react'
import LogoAgile from '../images/logo-agile.png'

class SectionExp extends React.Component{
    render(){
        return(

            <div className="container">
                <div className="row">

            <h2 className="event-list-title">Más sobre mi experiencia</h2>
            <section id="eventos" className="event-list">
                <article className="event">
                    <figure className="event-imageContainer">
                        <img className="event-image" src={LogoAgile} width="500" height="300" alt=""/>
                    </figure>
                    <div className="event-detail">
                        <h3 className="event-title">Mentor en Agile Innova</h3>
                        <p className="event-description">Asesoramos colaborativamente a startups o empresas 
                            para que puedan definir nuevos modelos de negocio o nuevos procesos que 
                            sean innovadores, escalables, sostenibles y repetibles.
                        </p>
                        <a className="event-url" href="https://agileinnova.org/" target="_blank">Ver Más</a>
                    </div>
                </article>
                <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={LogoAgile} width="500" height="300" alt=""/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Mentor en Agile Innova</h3>
                            <p className="event-description">Asesoramos colaborativamente a startups o empresas 
                                para que puedan definir nuevos modelos de negocio o nuevos procesos que 
                                sean innovadores, escalables, sostenibles y repetibles.
                            </p>
                            <a className="event-url" href="https://agileinnova.org/" target="_blank">Ver Más</a>
                        </div>
                </article>
                <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={LogoAgile} width="500" height="300" alt=""/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Mentor en Agile Innova</h3>
                            <p className="event-description">Asesoramos colaborativamente a startups o empresas 
                                para que puedan definir nuevos modelos de negocio o nuevos procesos que 
                                sean innovadores, escalables, sostenibles y repetibles.
                            </p>
                            <a className="event-url" href="https://agileinnova.org/" target="_blank">Ver Más</a>
                        </div>
                </article>
                <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={LogoAgile} width="500" height="300" alt=""/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Mentor en Agile Innova</h3>
                            <p className="event-description">Asesoramos colaborativamente a startups o empresas 
                                para que puedan definir nuevos modelos de negocio o nuevos procesos que 
                                sean innovadores, escalables, sostenibles y repetibles.
                            </p>
                            <a className="event-url" href="https://agileinnova.org/" target="_blank">Ver Más</a>
                        </div>
                </article>
            </section>
            
            </div>
        </div>
        );
    }
}

export default SectionExp;