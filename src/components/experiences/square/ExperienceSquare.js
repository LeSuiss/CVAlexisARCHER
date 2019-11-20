import React, {useState} from 'react'
import {Row, Col, Collapse, Button} from 'reactstrap'


const ExperienceSquare = (props) => {
    const [toggle, setToggle] = useState(false);
    const [className, setClassName] = useState("square")
        
    const handleCol = ()=>{
        setToggle(!toggle);
        setClassName("updatedSquare");
    }

    const getParentID=(e)=>{
        if (e.target.id === undefined)
        return("faaaa")
        
       else {
        getParentID(e.target.parent)}}
    
    
    return(     
                <Col md="3"
                className={className} >
                    <img  alt="" className="back-img" src={props.image} />
                    <div className="heading" >
                        <Row id="test" className="headingRow">
                            <Col lg="12" className="heading-logo">
                                <a href={props.url} target="_blank"> <img alt="" src={props.image} className="logo-img"/> </a>

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
                                <a href={props.url} target="_blank">
                                    <h3>{props.job} </h3>
                                </a>
                        
                            </Col>
                        
                        </Row>
                        <Row className="titleButton">
                        <Button onClick={(e)=>console.log(e.target)}   >plus d'informations</Button></Row>    
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