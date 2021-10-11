import React from 'react';
import { CurrentUserContext, currentUser } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {

        const currentUser = React.useContext(CurrentUserContext);
        const avatarRef = React.useRef(); // записываем объект, возвращаемый хуком, в переменную

        function handleSubmit(e) {
            e.preventDefault();
            props.onUpdateAvatar({
              avatar: avatarRef.current.value,
              name: currentUser.name,
              about: currentUser.about,
            });
          } 
  
return (
    <PopupWithForm title="Новый Аватар" name="popup-avatar" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} buttonText="Загрузить">
          <input ref={avatarRef} type="url" placeholder="Ссылка на картинку" id= "avatarsrc" className="popup__input" name="avatar" required />
          <span className="popup__input-error avatarsrc-error" ></span>
    </PopupWithForm>
)
}

export default EditAvatarPopup;