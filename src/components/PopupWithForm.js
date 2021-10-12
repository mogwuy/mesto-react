import addButton from '../images/add_button.svg';
function PopupWithForm(props) {
  const isOpened = props.isOpen ? 'popup_opened' : " ";
    return (
        <section className={`popup ${isOpened}`} id={props.name}>
        <div className="popup__window">
          <button className="popup__button" type="button"  onClick={props.onClose}><img className="popup__close" src={addButton} alt="Закрыть" /></button>
          <div className="popup__content">
            <h2 className="popup__title">{props.title}</h2>
            <form className="popup__container" name={props.name} onSubmit={props.onSubmit}>
            {props.children} 
            <input type="submit" className="popup__submit" value={props.buttonText} />
            </form>
          </div>
        </div>
      </section>
    );
  }
  
  export default PopupWithForm;