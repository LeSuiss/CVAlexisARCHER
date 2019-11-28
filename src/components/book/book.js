import React from 'react'
import {Row, Col, Container} from 'reactstrap'
import BookSquare from './bookSquare'
const Book = () => {


    const tab = [
        {title: "Projet Pro: Wadirumtent.com",
        url: "",
        image:require("../../images/wadirumtent.png"),
        toBeNoted:"Site réalisé pour un client jordanien. Sa finition est en standby/attente de retour client",
        description:"Vous souhaitez découvrir la Jordanie. Venez découvrir, avec Petra, la seconde merveille de la Jordanie: le desert du WadiRum. Bénéficiez des services d'hebergement & activités offert par Khaled de WadiRumtent", 
        skills:[10,1]

        },
        {title: "le guide du cancre",
        url: "",
        image:require("../../images/guideduCancre.png"),
        toBeNoted:"Réalisation du projet 2/3 de la formation à la WCS. Par équipe de 3, l'objectif était de réaliser un site en pur HTML5 et CSS3. Personnes sérieuses s'abstenir !",
        description:"parce que je suis persuadé que le rire est le meilleur vecteur d'apprentissage. Vous avez été étudiant? les farces de Gaston Lagaffe sont votre source d'inspiration? venez jetez un coup d'oeil !", 
        skills:[1,2,3,11]

        },
        {title: "Hackathon 1",
        url: "",
        image:require("../../images/Hackathon1.png"),
        toBeNoted:"Hackathon mené par équipe de 5 sur 24h. Réalisation en binome de la partie 'History' et forte contribution au CSS global" ,
        description:"Sur le theme d'Halloween, avec pour seules ressources notre motivation et une API: Un challenge pour ceux qui aiment le code et peu dormir. Decouvrez notre réalisation d'un bestiaires et d'une aventure dont vous êtes le heros ! ", 
        skills:[1,2,5,11]

        },
        {title: "Projet WCS 2: ISS VIEWERS",
        url: "", 
        image:require("../../images/issStreetView.png"),
        toBeNoted:"Réalisation du projet 2/3, finition en standby (attente retour client)",
        description:"par équipe de 5, sur le theme d'Halloween, avec pour seules ressources notre motivation et une API: Un challenge pour ceux qui aiment le code et peu dormir. Decouvrez notre réalisation d'un bestiaires et d'une aventure dont vous êtes le heros ! ", 
        skills:[1,2,3,5,11]

        },

        {title: "Ce site internet",
        url: "", 
        image:require("../../images/site.png"),
        toBeNoted: "Entierement responsive et réalisé en react. Il a vocation a évolué au fur et à mesure du temps et de mon apprentissage. N'hésitez pas à me faire par de vos retours sur celui-ci", 
        description:"Venez découvrir mon parcours, ma première vie professionnelle en tant que juriste propriété intellectuelle, puis ma reconversion pour ma passion d'adolescent: l'informatique", 
        skills:[1,2,3,5,11]

        },

    ]
    return(
        <Container id="bookContainer">

            <Row>
                <Col md="12">
                    <h2 className="title">Mes réalisations</h2>
                </Col>
            </Row>

            <Row >
                    {tab.map(x=> <BookSquare key="title" {...x}/>)}
                    </Row>
            </Container>

    )
}

export default Book