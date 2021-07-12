import { useContext } from "react"
import BuyContext from "../context/BuyContext"
import useGetData from "../hooks/useGetData"
import ProductItem from "@components/ProductItem"

const Cart = ({handleShowCart}) => {
  const { buyProducts, setBuyProducts} = useContext(BuyContext)

  const handleDeleteProduct = (id) => {
    let remainingProducts = buyProducts.filter(product => product.productId !== id)
    setBuyProducts(remainingProducts)

    //Guardar los productos en Session Storage
    sessionStorage.setItem('products', JSON.stringify(remainingProducts))
  }

  return (
    <div className="cart">
      <div className="cart__container">
        <h2 className="cart__title">Tus Productos</h2>
        <button className="cart__close" onClick={handleShowCart}>
          <i className="fas fa-times" />
        </button>

        {buyProducts.length > 0
          ? <div className="cart__item-container">
              {
                buyProducts.map(product =>
                  <div className="cart__item">
                    <button className="cart__item-delete" onClick={() => {handleDeleteProduct(product.productId)}}>
                      <i className="fas fa-times" />
                    </button>
                    <ProductItem key={product.productId} productData={product}/>
                  </div>
                )
              }
            </div>
          : <span>Elegí uno de nuestros excelentes productos</span>
        }

        {buyProducts.length > 0
          ? <button className="cart__button"><i class="fas fa-dollar-sign" /> PAGAR</button>
          : <button className="cart__button" onClick={handleShowCart}>Ver Productos</button>
        }
      </div>
    </div>
  );
}

export default Cart;