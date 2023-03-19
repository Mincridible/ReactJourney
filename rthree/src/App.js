import React from "react";
import Card from "./component/card";
import cat1 from "./images/cat1.jpg"
import cat2 from "./images/cat2.jpg"
import cat3 from "./images/cat3.jpg"
import cat4 from "./images/cat4.jpg"

import './style.css'

const App = () =>{

  return(
    <div>
      <Card photo={cat1} 
      name="Mr. Whiskerson" 
      phone="019-4703276" 
      email="mr.whiskaz@catnip.meow"/>
      
      <Card photo={cat2} 
      name="Fluffykins" 
      phone="(212) 555-2345" 
      email="fluffy@me.com"/>
      
      <Card photo={cat3} 
      name="Felix" 
      phone="(212) 555-4657" 
      email="thecat@hotmail.com"/>
      
      <Card photo={cat4} 
      name="Pumkin" 
      phone="(212) CAT KING" 
      email="pumpkin@scrimba.com"/>
      
    </div>
  )
}


export default App;
