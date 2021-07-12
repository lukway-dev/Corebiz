import React, { useEffect, useState } from "react"

const BuyContext = React.createContext({})

export function BuyContextProvider({ children }) {
  const [buyProducts, setBuyProducts] = useState([])

  useEffect(()=> {
    let products = sessionStorage.getItem('products')
    products ? setBuyProducts(JSON.parse(products)) : null
  }, [])

  return(
    <BuyContext.Provider value={{ buyProducts, setBuyProducts }}>
      {children}
    </BuyContext.Provider>
  )
}

export default BuyContext