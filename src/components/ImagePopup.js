import React from 'react';
import addButton from '../images/add_button.svg';
function ImagePopup(props) {
const isOpened = (typeof(props.card.link) === 'string') ? 'popup_opened' : " "
    return (
    
        <section className={`popup ${isOpened}`} id="popup-image">
        <div className="popup__window">
          <button className="popup__button popup__button-image" type="button" id="close-button-image" onClick={props.onClose}><img className="popup__close" src={addButton} alt="Закрыть" /></button>
            <img className="popup__image" src={props.card.link} alt="Изображение" />
            <p className="popup__text">{props.card.name}</p>
        </div>
      </section>

    );
  }
  
  export default ImagePopup;