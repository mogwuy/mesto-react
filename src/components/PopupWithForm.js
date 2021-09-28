import addButton from '../images/add_button.svg';
function PopupWithForm(props) {
  let isOpened = props.isOpen ? 'popup_opened' : " ";
    return (
        <section className={`popup ${isOpened}`} id={props.name}>
        <div className="popup__window">
          <button className="popup__button" type="button" id="close-button-edit" onClick={props.onClose}><img className="popup__close" src={addButton} alt="Закрыть" /></button>
          <div className="popup__content">
            <h2 className="popup__title">{props.title}</h2>
            <form className="popup__container" name={props.name} >
            {props.children} 
            </form>
          </div>
        </div>
      </section>
    );
  }
  
  export default PopupWithForm;