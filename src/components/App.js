import React from 'react';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import '../index.css';




function App() {
const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
const [isDelPlacePopupOpen, setDelPlacePopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});


function handleEditAvatarClick() {
  setEditAvatarPopupOpen(true);
   }
function handleEditProfileClick() {
  setEditProfilePopupOpen(true);
   }
function handleAddPlaceClick() {
  setAddPlacePopupOpen(true);
   }
function handleDelPlaceClick() {
  setDelPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setSelectedCard({name: '', link: ''})
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
<main className="content">
<Header />
<Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onDelPlace={handleDelPlaceClick}  onCardClick={handleCardClick} />
<Footer />
</main>
<PopupWithForm title="Новый Аватар" name="popup-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText="Загрузить">
          <input type="url" placeholder="Ссылка на картинку" id= "avatarsrc" className="popup__input" name="avatar" required />
          <span className="popup__input-error avatarsrc-error" ></span>
          
</PopupWithForm>

<PopupWithForm title="Редактировать Профиль" name="popup-edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
          <input type="text" placeholder="Имя" id= "name" className="popup__input" name="name" required />
          <span className="popup__input-error name-error" ></span>
          <input type="text" placeholder="О себе" id= "about" className="popup__input" name="about" required />
          <span className="popup__input-error about-error" ></span>
</PopupWithForm>

<PopupWithForm title="Новое Место" name="popup-add" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText="Создать">
          <input type="text" placeholder="Название" id= "mestoname" className="popup__input" name="name" required />
          <span className="popup__input-error mestoname-error" ></span>
          <input type="url" placeholder="Ссылка на картинку" id= "mestosrc" className="popup__input" name="link" required />
          <span className="popup__input-error mestosrc-error" ></span>
</PopupWithForm> 

<PopupWithForm title="Вы уверены?" name="popup-del" isOpen={isDelPlacePopupOpen} onClose={closeAllPopups} buttonText="Да" />    

<ImagePopup card={selectedCard} onClose={closeAllPopups} />
 
   

 </>
  );
}

export default App;
