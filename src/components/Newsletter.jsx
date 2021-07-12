const Newsletter = () => {

  const handleNewsletterPost = (e) => {
    e.preventDefault()
  }

  return (
    <section className="newsletter">
      <h3 className="newsletter__title">
        ¡Únete a nuestras novedades y promociones!
      </h3>

      <form className="newsletter__form" action="https://corebiz-test.herokuapp.com/api/v1/newsletter" method="POST" onSubmit={handleNewsletterPost}>
        <div className="newsletter__form-item">
          <input className="newsletter__input" type="text" name="name" id="name" maxLength="50" required/>
          <label className="newsletter__label" htmlFor="name">Ingresa tu nombre</label>
        </div>

        <div className="newsletter__form-item">
          <input className="newsletter__input" type="email" name="email" id="email" maxLength="50" required/>
          <label className="newsletter__label" htmlFor="email">Ingresa tu email</label>
        </div>

        <button className="newsletter__button" type="submit">Suscribirme</button>
      </form>
    </section>
  );
}

export default Newsletter;