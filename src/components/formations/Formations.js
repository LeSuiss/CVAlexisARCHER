import React from 'react';
import {Container, Row, Col} from 'reactstrap';

const Formation = () => {
    return(
        <Container id="formationContainer">
            <Row>
                <Col md="12">
                    <h2 className="title">Formations</h2>
                </Col>
            </Row>
            <Row>
                
                <Col className="square" sm='5'>

                    <Row className="formationHeader title" >    
                        
                        <Col  sm="9 "><h4>Université de Nantes <br /><small>
                            <strong>IEMN - IAE</strong>
                        </small></h4>
                        </Col>
                        <Col sm="3" ><h5> 2010 <br/>-<br/> 2011</h5></Col>

                    </Row>
                    <Row className="lineDivider"></Row>
                    <Row className="formationBody">
                    
                        <Col sm="12">
                                <h4>Master Business  
                                &amp; Administration <br />(MBA) </h4>
                                <p>
                                Formation pluridisciplinaire relevant principalement de la gestion de projets, du management, et des aspects juridiques et financiers propres aux problématiques de gestion d’entreprise.
                                </p>           
                    </Col>
            </Row>
            </Col>
            
                <Col className="square" sm='5'>

                <Row className="formationHeader title" >    
                        
                        <Col sm="9 "><h4>University of Nantes <br /><small>
                            <strong>IEMN - IAE</strong>
                        </small></h4>
                        </Col>
                        <Col sm="3"><h5> 2009 <br/>-<br/> 2010</h5></Col>

                    </Row>
                    <Row className="lineDivider"></Row>
                   
            <Row className="formationBody">    

                <Col sm="12">
            <h4>Master 2 Droit privé <br /> <small>(Droit de la propriété intellectuelle)</small>
               </h4>

                <div class=" blue-divider"> </div>
            <p>Finance, accounting, business strategy, control management, etc...</p>

            </Col>

            </Row>
            </Col>

            </Row>
        </Container>


    )
}


export default Formation