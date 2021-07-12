import BannerImage from "@images/banner.jpg"

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__text">
        <h2 className="banner__text--caption">¡Hola! ¿Qué es lo que buscas?</h2>
        <h1 className="banner__text--title">¿Crear o migrar tu <br/> comercio electrónico?</h1>
      </div>

      <img className="banner__image" src={BannerImage} />

      <div className="banner__counter-container">
        <i className="banner__counter--active fas fa-circle"/>
        <i className="banner__counter fas fa-circle"/>
        <i className="banner__counter fas fa-circle"/>
        <i className="banner__counter fas fa-circle"/>
      </div>
    </section>
  );
}

export default Banner;