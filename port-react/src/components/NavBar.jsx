import React from 'react';

class NavBar extends React.Component{
    render(){
        return(
        <header className="header">
            <div className="container">
                <h1>Mi Portafolio</h1>
                <nav className="menu">
                    <ul>
                        <li>
                            <a className="link" href="#">Portafolio</a>
                        </li>
                        <li>
                            <a className="link" href="#eventos">Experiencia</a>
                        </li>
                        <li>
                            <a className="link" href="#contacto">Trabajemos Juntos</a>
                        </li>
                    </ul>
                </nav>               
            </div>
        </header>
        )
    }
}

export default NavBar;