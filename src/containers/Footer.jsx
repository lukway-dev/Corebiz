import CorebizLogo from "@images/corebiz-logo(white).svg"
import VtexLogo from "@images/vtex-logo.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__data">
        <h3 className="footer__caption">Ubicación</h3>
        <span className="footer__data-item">Avenida Andr&ocirc;meda, 2000. Bloco 6 e 8</span>
        <span className="footer__data-item">Alphavile SP</span>
        <a className="footer__data-item" href="mailto:brasil@corebiz.ag">brasil@corebiz.ag</a>
        <a className="footer__data-item" href="tel:+55 11 3090 1039">+55 11 3090 1039</a>
      </div>

      <div className="footer__contact">
        <a className="footer__contact-button" href="mailto:brasil@corebiz.ag">
          <i className="footer__contact-icon fas fa-envelope"/> CONTÁCTANOS
        </a>
        <a className="footer__contact-button  " href="tel:+55 11 3090 1039">
          <i className="footer__contact-icon fas fa-headset"/> HABLA CON UN CONSULTOR
        </a>
      </div>

      <div className="footer__credits">
        <div className="footer__credits-item">
          <span className="footer__credits-caption">Desarrollado por</span>
          <img className="footer__credits-image" src={CorebizLogo} alt="Corebiz Logo" title="Corebiz Logo" />
        </div>
        <div className="footer__credits-item">
          <span className="footer__credits-caption">Powered by</span>
          <img className="footer__credits-image" src={VtexLogo} alt="Vtex Logo" title="Vtex Logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;