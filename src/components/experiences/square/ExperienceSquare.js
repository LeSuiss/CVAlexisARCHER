import React, {useState} from 'react'
import {Row, Col, Collapse, Button} from 'reactstrap'


const ExperienceSquare = (props) => {
    const [toggle, setToggle] = useState(false);
    const [widthCol, setWidthCol] = useState(3)
    const [orderCol, setOrderCol] = useState(props.orderID)    
    
    const handleCol = ()=>{
        window.innerWidth>768 &&(
        orderCol>=50? setOrderCol(35):setOrderCol(45));
        setWidthCol(10);
        setToggle(!toggle);
        }
    
        const closeCol = () =>{
        setOrderCol(props.orderID)
        setToggle(!toggle)
        setWidthCol(3);
    }

    const displayToggle = ()=>{ toggle? closeCol() :handleCol() }


    return(     
                <Col className={`square col-md-${widthCol}`} style={{order :`${orderCol}`}}>
                    <div className="heading" >

                        <Row id="test" className="headingRow">
                            <Col lg="12" className="heading-logo">
                                <a href={props.url} target="_blank" rel="noopener noreferrer"> <img alt="" src={props.image} className="logo-img"/> </a>

                            <div className="heading-infos">

                                <div className="time-line-heading-infos-time">
                                    <h5 className="text-muted"> <small className="glyphicon glyphicon-time"> </small> {props.duration} </h5>
                                </div>
                                <div className="heading-infos-place">
                                    <h5> <small className="glyphicon glyphicon-map-marker"></small> {props.city} <small>({props.country})</small></h5>
                                </div>
                            </div>
                            </Col>

                        </Row>
                        
                        <Row className="titleRow">
                            <Col md="12" className="title-company">
                                <a href={props.url} target="_blank" rel="noopener noreferrer">
                                    <h3>{props.job} </h3>
                                </a>
                        
                            </Col>
                        
                        </Row>
                        <Row className="titleButton">
                        <Button onClick={()=>displayToggle()}   >plus d'informations</Button></Row>    
                    </div>
                    
                    <Collapse isOpen={toggle}>            
                    <Row className="lineDivider"></Row>
                    <div className="jobBody">
                        <h4>{props.title}<br/> <h6><small>{props.description}</small> </h6></h4>

                        <div className="jobTasks">
                            <ul>
                                {props.tasks.map(task=><li >{task}</li>)}
                            </ul>
                        </div>
                    </div>

                    </Collapse>

                </Col>
            )  
                
}



export default ExperienceSquare