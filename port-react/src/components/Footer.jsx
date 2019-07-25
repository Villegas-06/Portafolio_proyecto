import React from 'react'

class Footer extends React.Component{
    render(){
        return(
        <footer class="footer">
        <div class="container">
            <div>
                <p>Fundamentos en desarrollo web 2019 </p>  
            </div>
            <div>
              <p>With love by <a class="link" href="https://makaia.org/es/inicio/" target="_blank">Makaia.org</a> </p>
            </div>
        </div>
    </footer>
        );
    }
}

export default Footer;