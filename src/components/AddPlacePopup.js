import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {
    const [title, setTitle] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleChangeTitle(e) {
        setTitle(e.target.value);
      }

      function handleChangeLink(e) {
        setLink(e.target.value);
      }

      function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdatePlace({
          name: title,
          link: link,
        });
      } 
return (
    <PopupWithForm title="Новое Место" name="popup-add" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} buttonText="Создать">
          <input type="text" placeholder="Название" id= "mestoname" className="popup__input" name="name" onChange={handleChangeTitle} value={title} required />
          <span className="popup__input-error mestoname-error" ></span>
          <input type="url" placeholder="Ссылка на картинку" id= "mestosrc" className="popup__input" name="link" onChange={handleChangeLink} value={link} required />
          <span className="popup__input-error mestosrc-error" ></span>
    </PopupWithForm> 
)
}

export default AddPlacePopup;