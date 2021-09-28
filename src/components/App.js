import React from 'react';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import '../index.css';




function App() {
const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState();
const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState();
const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState();
const [isDelPlacePopupOpen, setDelPlacePopupOpen] = React.useState();
const [selectedCard, setSelectedCard] = React.useState("undefined");


function handleEditAvatarClick() {
  setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
   }
function handleEditProfileClick() {
  setEditProfilePopupOpen(!isEditProfilePopupOpen);
   }
function handleAddPlaceClick() {
  setAddPlacePopupOpen(!isAddPlacePopupOpen);
   }
function handleDelPlaceClick() {
  setDelPlacePopupOpen(!isDelPlacePopupOpen);
  }
  function closeAllPopups() {
    const popupList = document.querySelectorAll('.popup_opened');
    popupList.forEach(elem => elem.classList.remove('popup_opened'));
    setSelectedCard("undefined")
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setDelPlacePopupOpen(false);
  }
  function handleCardClick(props) {
    setSelectedCard(props)
     }


  return (
<>

<Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onDelPlace={handleDelPlaceClick}  onCardClick={handleCardClick} />

<PopupWithForm title="Новый Аватар" name="popup-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input type="url" placeholder="Ссылка на картинку" id= "avatarsrc" className="popup__input" name="avatar" required />
          <span className="popup__input-error avatarsrc-error" ></span>
          <input type="submit" className="popup__submit" id="submit-edit-avatar" value="Загрузить" />
</PopupWithForm>

<PopupWithForm title="Редактировать Профиль" name="popup-edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input type="text" placeholder="Имя" id= "name" className="popup__input" name="name" required />
          <span className="popup__input-error name-error" ></span>
          <input type="text" placeholder="О себе" id= "about" className="popup__input" name="about" required />
          <span className="popup__input-error about-error" ></span>
          <input type="submit" className="popup__submit" id="submitedit" value="Сохранить" />  
</PopupWithForm>

<PopupWithForm title="Новое Место" name="popup-add" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input type="text" placeholder="Название" id= "mestoname" className="popup__input" name="name" required />
          <span className="popup__input-error mestoname-error" ></span>
          <input type="url" placeholder="Ссылка на картинку" id= "mestosrc" className="popup__input" name="link" required />
          <span className="popup__input-error mestosrc-error" ></span>
          <input type="submit" className="popup__submit" id="submitadd" value="Создать" />
</PopupWithForm> 

<PopupWithForm title="Вы уверены?" name="popup-del" isOpen={isDelPlacePopupOpen} onClose={closeAllPopups}>
          <input type="button" className="popup__submit" id="submitdel" value="Да" />  
</PopupWithForm>    

<ImagePopup card={selectedCard} onClose={closeAllPopups} />
 
   

 </>
  );
}

export default App;
