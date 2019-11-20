import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap'
import portrait from '../../images/linkedin.jpeg'
import background from '../../images/background/imageHeader.jpg'

const Header = () => {
    return(
        <Container id="headerContainer" >
            <img alt="" id="background" src={background}/>
          
            <Row >
                <Col sm="12">

                    <div className="headerHeading">
                        <h2>Alexis ARCHER</h2>
                        
                    <div className="col-xs-8 col-md-4 profile-picture">
                        <img src={portrait} alt="" className="img-circle"/>
                    </div>
                        <h4>Developpeur web Full/stack</h4>
                        <h4>spéclisation en Javascript / React / Node.js</h4>
                        <Button> <a href="Alexis_ARCHER_Consultant.pdf"> télécharger mon CV</a></Button>
                    </div>
                    </Col>            
            </Row>

        </Container>

    )

    
}


export default Header