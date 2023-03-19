import React from "react";
import { AiFillPhone } from "react-icons/ai";
import {MdEmail} from "react-icons/md"

const Card = (props) =>
{
   return(
      <div className="row">
  <div className="column">
    <div className="card">
      <img src={props.photo} alt="" width="270px" />
      <div className="text">
         <h1>{props.name}</h1>
         <AiFillPhone size="27px"/> {props.phone}
         <br />
         <MdEmail size="22px" style={{marginTop:"10px"}}/>
         <span className="emails">{"  "+props.email}</span>
      </div>
    </div>
  </div>
  </div>
   )
}

export default Card