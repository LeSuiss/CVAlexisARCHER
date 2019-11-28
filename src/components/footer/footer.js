import React from 'react'
import linkedin from '../../images/linkedinImg.png'
import mail from '../../images/Mail.png'


const Footer = () => {

    return(
        <footer>
            <a>
                <img alt="Icon for contact" src={mail} />
            </a> 
            <div>
                <div>Alexis ARCHER</div>
                <div>07.61.29.72.72</div>
            </div>
            
            <a href="https://www.linkedin.com/in/alexis-archer-151179138/">
                <img alt="icon for contact"  src={linkedin} />
            </a> 
        
        </footer>
    )
}

export default Footer
