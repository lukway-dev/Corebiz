import React, { useState } from "react"
import Cart from "@containers/Cart"
import Header from "@containers/Header"
import Products from "@containers/Products"
import Footer from "@containers/Footer"
import Banner from "@components/Banner"
import Newsletter from "@components/Newsletter"
import { BuyContextProvider } from "../context/BuyContext"

const App = () => {
  const [showCart, setShowCart] = useState(false)

  const handleShowCart = () => {
    setShowCart(!showCart)
  }

  return (
    <BuyContextProvider>
      <Header handleShowCart={handleShowCart}/>
      <Banner/>
      <Products/>
      <Newsletter/>
      <Footer/>

      {showCart
        ? <Cart handleShowCart={handleShowCart}/>
        : <></>
      }
    </BuyContextProvider>
  )
}

export default App