import React from 'react';
import {Container, Row, Col} from 'reactstrap';



const Skills = () => {

    const tabImage = [1,2,3,4,5,6,7,8,9,10,11]
    return(
        
        <Container className="skillsContainer">
            <Row>
                <Col md="12">
                    <h2 className="title">Mes Compétences</h2>
                </Col>
            </Row>
            
            <Row id="rowSkills">

            <Col md="10" className="colSkills ">
                <h4 className="title">Développement informatique</h4>
                <Row className="lineDivider"></Row>

                <Row className="icons">
            {tabImage.map(x=> <img alt="" src={require(`./img/${x}.svg`)}/>)}
            </Row>
            </Col>
            </Row>
            <Row id="rowSkills">
            <Col md="3" className="colSkills">
                    <h4 className="title"> Management</h4>

                    <div className="lineDivider"></div>

                    <div className="icons">
                        <ul>
                        <li>Encadrement d’équipes (jusqu'à 7personnes)</li>
                        <li>Mise en place d’outil de suivi</li>
                        <li>Pilotage d’activités</li>
                        <li>Gestion des conflits</li>

                        </ul>
            </div>
            </Col>

            <Col md="3" className="colSkills">
                <h4 className="title">Juridique</h4>
                <Row className="lineDivider"></Row>

                <Row className="icons">
                    <ul>
                    <li>Droit de la propriété intellectuelle (droit des logiciels, droit d'auteur, droit des brevets)</li>
                    <li>Droit privé / droit des affaires</li>
                    <li>Négociation contractuelle et gestion de consortiums internationaux</li>
                    <li>Analyse des risques et appui aux décisions politiques</li>

                    </ul>
                </Row>

            </Col>

            <Col md="3" className="colSkills">
                <h4 className="title">Gestion de projets</h4>
                <Row className="lineDivider"></Row>

                <Row className="icons">
                    <ul>
                    <li>Réponse aux appels à candidatures</li>
                    <li>Montage de projets</li>
                    <li>Ingénierie financière</li>
                    <li>Coordination de projets</li>

                    </ul>
                </Row>

            </Col>
            </Row>
        
        </Container>



    )

}

export default Skills