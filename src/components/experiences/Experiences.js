import React from 'react'
import ExperienceSquare from './square/ExperienceSquare'
import ExperienceListe from './square/experienceListe/ExperienceListe'
import {Row, Col, Container} from 'reactstrap'


const Experiences = () => {
    return(

        <Container className="xpContainer">
            <Row>
                <Col md="12">
                    <h2 className="title">Experiences professionnelles</h2>
                </Col>
            </Row>
            <Row>
                {ExperienceListe.map(x=> <ExperienceSquare key="title" {...x}/>)}
            </Row>
            </Container>

    )
}

export default Experiences 