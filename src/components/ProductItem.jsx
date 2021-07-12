import { useContext } from "react"
import BuyContext from "../context/BuyContext"

const ProductItem = ({ productData }) => {
  const { buyProducts, setBuyProducts } = useContext(BuyContext)

  //Set product data
  const name = productData.productName
  const stars = productData.stars
  const image = productData.imageUrl
  let price = productData.price.toString()
  price = price.slice(0, -2) + "." + price.slice(-2)
  let oldPrice = productData.listPrice
  const installments = productData.installments
  let installmentsQuantity
  let installmentsValue
  if(oldPrice){
    oldPrice = productData.listPrice.toString()
    oldPrice = oldPrice.slice(0, -2) + "." + oldPrice.slice(-2)
  }
  if(installments.length > 0){
    installmentsQuantity = productData.installments[0].quantity
    installmentsValue = productData.installments[0].value.toString()
    installmentsValue = installmentsValue.slice(0, -2) + "." + installmentsValue.slice(-2)
  }

  const handleAddProduct = () => {
    //Verificar si el producto ya a sido añadido
    let productExists = buyProducts.filter(product => product.productId === productData.productId)

    if(productExists.length > 0) {
      return
    } else {
      //Ordenar productos por ID
      let sortedProducts = [...buyProducts, productData]
      sortedProducts = sortedProducts.sort((a, b) => a.productId - b.productId)
      setBuyProducts(sortedProducts)

      //Guardar los productos en Session Storage
      sessionStorage.setItem('products', JSON.stringify(sortedProducts))
    }
  }

  return (
    <div className="product-item">
      <img className="product-item__image" src={image} alt={name} title={name} />

      <h4 className="product-item__name">{name}</h4>

      <div className="product-item__stars-container">
        {Array.from({length: stars}, () =>
          <i className="fas fa-star" />
        )}
        {Array.from({length: 5 - stars}, () =>
          <i className="far fa-star"></i>
        )}
      </div>

      {oldPrice
        ? <>
            <span className="product-item__price--old">de ${oldPrice}</span>
          </>
        : <></>
      }
      <span className="product-item__price">por ${price}</span>

      {oldPrice
        ? <div className="product-item__sale-poster">OFF</div>
        : <></>
      }

      {installments.length > 0
        ? <span className="product-item__installments">
            o en {installmentsQuantity}x de R$ {installmentsValue}
          </span>
        : <></>
      }

      <button className="product-item__button" onClick={handleAddProduct}>COMPRAR</button>
    </div>
  );
}

export default ProductItem;