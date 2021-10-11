import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext, currentUser } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value);
      }

      function handleChangeDescription(e) {
        setDescription(e.target.value);
      }

    // Подписка на контекст
   const currentUser = React.useContext(CurrentUserContext);

// После загрузки текущего пользователя из API
// его данные будут использованы в управляемых компонентах.
React.useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
}, [currentUser]);   

function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
      avatar: currentUser.avatar
    });
  } 

return (
  <PopupWithForm title="Редактировать Профиль" name="popup-edit" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} buttonText="Сохранить">
          <input type="text" placeholder="Имя" id= "name" className="popup__input" name="name" value={name} onChange={handleChangeName} required />
          <span className="popup__input-error name-error" ></span>
          <input type="text" placeholder="О себе" id= "about" className="popup__input" name="about" value={description} onChange={handleChangeDescription} required />
          <span className="popup__input-error about-error" ></span>
   </PopupWithForm>
    );
}
export default EditProfilePopup;