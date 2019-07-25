import React from 'react'

class SectionHero extends React.Component{
    render(){
        return(
            
        <section className="hero">
        <div className="container">
            <h1>
                Hola soy <strong>Miguel Montoya Villegas</strong> <br/> desarrollador   
                <strong>FrontEnd</strong> con <br/> enfásis en <strong>JavaScript</strong>
            </h1>
            <img  className="hero-image" src="https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png" alt="Imagen principal del sitio"/> 
        </div>
    </section>
        )
    }
}

export default SectionHero;