import { useContext } from "react";
import BuyContext from "../context/BuyContext";
import Searcher from "@components/Searcher"
import CorebizLogo from "@images/corebiz-logo.svg"

const Header = ({handleShowCart}) => {
  const { buyProducts } = useContext(BuyContext)

  return (
    <header className="header">
      <button className="header__menu-button">
        <i className="fas fa-bars" />
      </button>

      <img className="header__logo" src={CorebizLogo} alt="Corebiz Logo" title="Corebiz Logo" />
      <Searcher/>

      <div className="header__buttons">
        <button className="header__user">
          <i className="header__user--icon fas fa-user"/> Mi Cuenta
        </button>
        <button className="header__cart" onClick={handleShowCart}>
          <i className="fas fa-shopping-cart"/>
          {buyProducts
            ? <span className="header__cart--amount">{buyProducts.length}</span>
            : <></>
          }
        </button>
      </div>
    </header>
  )
}

export default Header;