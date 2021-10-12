import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value);
      }

      function handleChangeDescription(e) {
        setDescription(e.target.value);
      }


const currentUser = React.useContext(CurrentUserContext);


React.useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
}, [currentUser]);   

function handleSubmit(e) {
    e.preventDefault();
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