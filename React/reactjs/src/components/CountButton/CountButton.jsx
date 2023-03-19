import React, {useState, useEffect} from "react";
import "./countBtn.css"

const CountButton = (props) => {
   const [currentCount, setCurrentCount] = useState(0)
   

   const handleClick = () =>
{
setCurrentCount(currentCount + props.incrementBy)
}

useEffect(() => {
   if(currentCount === 10)
   {
      setCurrentCount(0)
   }
}, [currentCount])

const buttonStyle =
{
background : props.btncolour,
// borderRadius: "10px",
// fontSize: "20px"
}

return(
   <div>
      <button style={buttonStyle} onClick={handleClick}>+{props.incrementBy}</button>
      <div className={"count-display"}>{currentCount}</div>
   </div>
)
}
export default CountButton