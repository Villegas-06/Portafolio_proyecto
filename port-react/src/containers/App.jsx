import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/NavBar'
import SectioHero from '../components/SectionHero'
import SectionPortafolio from '../components/SectionPortafolio'
import SectionExp from '../components/SectionExperiencia'
import SectionContacto from '../components/SectionContacto'
import Footer from '../components/Footer'

const App = () =>{
    return(
        <Main>
            <Navbar/>
            <SectioHero/>
            <SectionPortafolio/>
            <SectionExp/>
            <SectionContacto/>
            <Footer/>
            
        </Main>
    );
}

export default App;