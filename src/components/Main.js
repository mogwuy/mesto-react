import React from 'react';
import {api} from '../utils/Api.js';
import Card from './Card.js';
import addButton from '../images/add_button.svg';
import profileEdit from '../images/profile_edit.svg';
import { CurrentUserContext, currentUser } from '../contexts/CurrentUserContext.js';
import { CardContext, currentCards } from '../contexts/CardContext.js';

function Main(props) {
const currentUser = React.useContext(CurrentUserContext);
const [currentCards, setCards] = React.useState([]);

React.useEffect(() => {
  api.getInitialCards('cards')
  .then((cardsData) => {
    setCards(cardsData)
   })
   .catch((err) => {
           //Вывод ошибки
     console.log(`Ошибка: ${err}`); 
     });
}, [] );

function handleCardLike(card) {
  // Снова проверяем, есть ли уже лайк на этой карточке
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  
  // Отправляем запрос в API и получаем обновлённые данные карточки
  api.getPutLike(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  });
} 

function handleCardDelete(card) {
  api.deleteСard(card._id)
  setCards((state) => state.filter((c) => c._id !== card._id));
} 

//currentCards.reverse();

const cardElements = currentCards.map((card) => {
  return (<Card key={card._id} card={card} link={card.link} name={card.name} likes={card.likes} onDelPlace={props.onDelPlace} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />)
});



  return (
        
        <>
            <section className="profile">
              <div className="profile__avatar">
                <div className="profile__avatar-image" style={{ backgroundImage: `url(${currentUser.avatar})` }} /><button className="profile__avatar-edit" onClick={props.onEditAvatar}></button>
                 </div>
                  <div className="profile__info">
                    <div className="profile__name">
                      <h1 className="profile__title" id="profileName">{currentUser.name}</h1>
                      <button className="profile__edit-button" type="button" onClick={props.onEditProfile}>
                          <img className="profile__edit-image" src={profileEdit} alt="Редактировать профиль" />
                      </button>
                  </div>
                  <p className="profile__subtitle" id="profileSubname">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
                  <img className="profile__add-image" src={addButton} alt="Добавить изображение" />
                </button>
            </section>
            <section className="elements">
            {cardElements}
            </section>
        </>
   
 
   
    );


  }



  export default Main;