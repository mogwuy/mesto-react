import React from 'react';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js';
import '../index.css';
import {api} from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { CardContext, currentСards } from '../contexts/CardContext.js';
import Card from './Card.js';




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
    setСurrentUser(usersData);
    })
    .catch((err) => {
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
      setSelectedCard(props);
     }

     function handleUpdateUser(currentUser) {
      api.updateUserInfo(currentUser);
      setСurrentUser(currentUser);
      closeAllPopups();
     }

     function handleUpdateAvatar(data) {
      api.updateAvatar(data);
      setСurrentUser(data);
      closeAllPopups();
     }


     const [currentCards, setCards] = React.useState([]);

     React.useEffect(() => {
      api.getInitialCards('cards')
      .then((cardsData) => {
        setCards(cardsData)
       })
       .catch((err) => {
         console.log(`Ошибка: ${err}`); 
         });
    }, [] );

 

     function handleAddPlaceSubmit(card) {
      api.updateСardInfo(card)
      .then((newCard) => {
        setCards([newCard, ...currentCards]);
       })
       .catch((err) => {
        console.log(`Ошибка: ${err}`); 
     });
      closeAllPopups()
     }

     
     function handleCardLike(card) {
       const isLiked = card.likes.some(i => i._id === currentUser._id);
       api.getPutLike(card._id, !isLiked).then((newCard) => {
           setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
       })
       .catch((err) => {
        console.log(`Ошибка: ${err}`); 
      });
     } 
     
     function handleCardDelete(card) {
       api.deleteСard(card._id).then(() => {
      })
       .catch((err) => {
        console.log(`Ошибка: ${err}`); 
      });
      setCards((state) => state.filter((c) => c._id !== card._id))
     } 
     
     
     const cardElements = currentCards.map((card) => {
       return (<Card key={card._id} card={card} link={card.link} name={card.name} likes={card.likes} onDelPlace={handleDelPlaceClick} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />)
     });


    console.log(currentCards)


  return (
<>
<CurrentUserContext.Provider value={ currentUser }>
<CardContext.Provider value={ currentСards }>
<main className="content">
<Header />
<Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} cards={cardElements}/>
<Footer />
</main>

<EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

<AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdatePlace={handleAddPlaceSubmit}/>

<PopupWithForm title="Вы уверены?" name="popup-del" isOpen={isDelPlacePopupOpen} onClose={closeAllPopups} buttonText="Да" />    

<ImagePopup card={selectedCard} onClose={closeAllPopups} />
</CardContext.Provider>
</CurrentUserContext.Provider>   

 </>
  );
}

export default App;
