import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MemeCard=(props)=>{
const navigate=useNavigate();
   
    return(
      <Card className="Card" style={{ width: '17rem', margin:'20px'}}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title >{props.title}</Card.Title>
          <Button style={{backgroundColor:"black"}} onClick={(e)=>navigate(`/edit?url=${props.img}`)}   //query parameter
          >Edit</Button> 
        </Card.Body>
      </Card>
  
    );
};

export default MemeCard;