import React, {useState, useEffect} from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'
import Button from './Button/Button'

// function App()
// {
//   return(
//    <div>
//       <CountButton incrementBy={1} btncolour={"blue"}/>
//       <CountButton incrementBy={5} btncolour={"Red"}/>
//       <CountButton incrementBy={800} btncolour={"green"}/>
//    </div>
//   )

// }
// const product = 



const App = () =>
{

  const [productState, setProductState] = useState([])

useEffect(() => {

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(productArray => {
              const newProductState = productArray.map((product) => {
                return product.title
              })
              setProductState(newProductState)
            })


  // setTimeout(() => {
  //   setProductState([ "Nasi ayam",
  //  "Nasi Goreng",
  //  "Telur dada",
  // ])
  // },2000)
}, [])

const hasProduct = productState.length >0

return(
  <div>
    {/* <SearchBar product={[
   "tooth paste",
   "tooth brush",
   "mouth wash",
   "dental floss",
   "mouth guard"
]}/> */}

    {hasProduct ? <SearchBar product={productState}/>: "Loading...."}

    {/* <Button /> */}
{/* <CountButton incrementBy={2} btncolour="lime"/> */}
  </div>
)
}

export default App