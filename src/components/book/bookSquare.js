import React from 'react'
import {Row, Col} from 'reactstrap'


const BookSquare = ({title, image, url, skills, toBeNoted, description}) => {
    

    return ( 
        <Col md="5" className="bookSquare">


            <Row className="rowTitle">

                <h4 className="title">{title}</h4>
                <Row className="lineDivider"></Row>
            </Row>


            <Row className="bookBody"><a href={url}>
                <img alt="" src={image}/>
            {
        title === "Ce site internet"?
        "": "visitez ce site"}
            </a>

            </Row>

            <Row>
                <p><small>{toBeNoted}</small></p>
            </Row>

            <Row className="rowMain" >
               <strong>Compétences sollicitées</strong>
               {skills.map(x=> <img alt="" src={require(`../skills/img/${x}.svg`)}/>)}

                <strong>Descriptif</strong>
                
                {description}
                </Row>

        </Col>



     );
}


export default BookSquare;