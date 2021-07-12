const Searcher = () => {
  return (
    <div className="searcher">
      <input
        className="searcher__input"
        type="text"
        placeholder="¿Qué estás buscando?"
        maxLength="50"/>
      <button className="searcher__button">
        <i className="searcher__icon fas fa-search"/>
      </button>
    </div>
  );
}

export default Searcher;