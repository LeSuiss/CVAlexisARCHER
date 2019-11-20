import React from 'react'
import {Container, Row, Col} from 'reactstrap'

const Footer = () => {
    
    const Bookliste = {
        1: {title: "Réalisation professionnelle: Wadirumtent.com",
        url: "",
        image:"",
        toBeNoted:"Site réalisé, finition en standby (attente retour client)",
        description:"Site réalisé pour un client jordanien. Il s'agit d'un site 'vitrine' pour une entreprise organisant hebergement & activités dans le desert du Wadi Rum (sud de la Jordanie)", 
        skills:" WordPress (avada), CSS3"

        },


        2: {title: " Projet WCS 1: le guide des farceurs",
        url: "",
        image:"",
        toBeNoted:"Site réalisé dans le cadre de la formation à la WildCodeSchool. Par équipe de 3, l'objectif était de réaliser un site en pur HTML5 et CSS3. Personnes sérieuses s'abstenir !",
        description:"parce que je suis persuadé que le rire est le meilleur vecteur d'apprentissage. Vous avez été étudiant? les farces de Gaston Lagaffe sont votre source d'inspiration? venez jetez un coup d'oeil !", 
        skills:" HTML5, CSS3, Bootstrap4"

        },

        3: {title: "Hackathon 1",
        url: "",
        image:"",
        description:"Faire un site en 24h, par équipe de 5, sur le theme d'Halloween, avec pour seules ressources notre motivation et une API: Un challenge pour ceux qui aiment le code et peu dormir. Decouvrez notre réalisation d'un bestiaires et d'une aventure dont vous êtes le heros ! ", 
        skills:" HTML5, CSS3, ReactJS (ES6, Hooks), GitHub"

        },
        4: {title: "Projet WCS 2: ISS VIEWERS",
        url: "", 
        image:"",
        description:"par équipe de 5, sur le theme d'Halloween, avec pour seules ressources notre motivation et une API: Un challenge pour ceux qui aiment le code et peu dormir. Decouvrez notre réalisation d'un bestiaires et d'une aventure dont vous êtes le heros ! ", 
        skills:" HTML5, CSS3, ReactJS (ES6, Hooks), GitHub"

        },

    }
    
    
    
    
    
    return(
        <Container>
            <Row>
                <Col>
                {Bookliste.map(x=> <ExperienceSquare key="title" {...x}/>)}
                </Col>
            </Row>
        </Container>


    )
}

export default Footer