import React, {useState} from "react";
import "./SearchBar.css"

// const product = [
//    "tooth paste",
//    "tooth brush",
//    "mouth wash",
//    "dental floss",
//    "mouth guard"
// ]


const SearchBar = (props) => {

   const [searchValue, setSearchValue] = useState("")
   // const searchValue = "the search value"
   const handleInputChange = (event) =>
   {
      setSearchValue(event.target.value)
      // console.log(event.target.value)
   }

   const handleClearClik = () =>
   {
   setSearchValue("")
   }

   const shouldDisplayButton = searchValue.length > 0 //boolean
   // console.log(shouldDisplayButton)

   const filterProduct = props.product.filter((product) => {
      return product.includes(searchValue)
   })

   return (
   <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
     {shouldDisplayButton && <button onClick={handleClearClik}>clear</button>}

<ul>
      {filterProduct.map((product) => {
      return <li key={product}>{product}</li>
     })}
</ul>
  
   </div>
   )
}

export default SearchBar

