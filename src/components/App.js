import React from 'react';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import ImagePopup from './ImagePopup.js';
import '../index.css';
import {api} from '../utils/Api.js';
import { CurrentUserContext, currentUser } from '../contexts/CurrentUserContext.js';
import { CardContext, currentСards } from '../contexts/CardContext.js';




function App() {
const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
const [isDelPlacePopupOpen, setDelPlacePopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
const [currentUser, setСurrentUser] = React.useState({
  name: "Имя",
  about: "О Себе",
  avatar: " ",
  _id: "1111"
});

React.useEffect(() => {
  api.getProfileData()
  .then((usersData) => {
    //Подставляем данные о пользователе.
    setСurrentUser(usersData);
    })
    .catch((err) => {
      //Вывод ошибки
      console.log(`Ошибка: ${err}`); 
      });  
}, [] );

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

     function handleUpdateUser(currentUser) {
      api.updateUserInfo(currentUser)
      setСurrentUser(currentUser)
      closeAllPopups()
     }



  return (
<>
<CurrentUserContext.Provider value={ currentUser }>
<CardContext.Provider value={ currentСards }>
<main className="content">
<Header />
<Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onDelPlace={handleDelPlaceClick}  onCardClick={handleCardClick} />
<Footer />
</main>
<PopupWithForm title="Новый Аватар" name="popup-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText="Загрузить">
          <input type="url" placeholder="Ссылка на картинку" id= "avatarsrc" className="popup__input" name="avatar" required />
          <span className="popup__input-error avatarsrc-error" ></span>
          
</PopupWithForm>

<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

<PopupWithForm title="Новое Место" name="popup-add" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText="Создать">
          <input type="text" placeholder="Название" id= "mestoname" className="popup__input" name="name" required />
          <span className="popup__input-error mestoname-error" ></span>
          <input type="url" placeholder="Ссылка на картинку" id= "mestosrc" className="popup__input" name="link" required />
          <span className="popup__input-error mestosrc-error" ></span>
</PopupWithForm> 

<PopupWithForm title="Вы уверены?" name="popup-del" isOpen={isDelPlacePopupOpen} onClose={closeAllPopups} buttonText="Да" />    

<ImagePopup card={selectedCard} onClose={closeAllPopups} />
</CardContext.Provider>
</CurrentUserContext.Provider>   

 </>
  );
}

export default App;
