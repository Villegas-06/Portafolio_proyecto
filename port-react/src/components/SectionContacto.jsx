import React from 'react'

class SectionContacto extends React.Component{
    render(){
        return(
            <section id="contacto" class="contact">
            <div className="container">
                <form action="/suscripcion/" className="form-email">
                    {/*<label for="email">Dejame tu email</label>*/}
                    <h3>Creamos algo juntos?</h3>
                    <input type="email" placeholder="Dejame tu email" id="email"/>
                    <button>Enviar</button>
                </form>
                <div className="social">
                    <a href="#" className="social-link twitter"></a>
                    <a href="#" className="social-link facebook"></a>
                    <a href="#" className="social-link instagram"></a>
                    <a href="#" className="social-link github"></a>
                </div>
            </div>
        </section>
        );
    }
}

export default SectionContacto;