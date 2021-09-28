import React from 'react';
import {api} from '../utils/Api.js';
import Card from './Card.js';
import addButton from '../images/add_button.svg';
import profileEdit from '../images/profile_edit.svg';

function Main(props) {
const [userName, setUserName] = React.useState();
const [userDescription, setUserDescription] = React.useState();
const [userAvatar, setUserAvatar] = React.useState();
const [cards, setCards] = React.useState([]);

React.useEffect(() => {
api.getProfileData()
.then((usersData) => {
  //Подставляем данные о пользователе.
  setUserAvatar(usersData.avatar);
  setUserName(usersData.name);
  setUserDescription(usersData.about)
  })
  .catch((err) => {
    //Вывод ошибки
    console.log(`Ошибка: ${err}`); 
    });
 
  api.getInitialCards('cards')
  .then((cardsData) => {
     setCards(cardsData)
    })
    .catch((err) => {
      //Вывод ошибки
      console.log(`Ошибка: ${err}`); 
      });
}, [] );


cards.reverse();

const cardElements = cards.map((card) => {
  return (<Card key={card._id} card={card} link={card.link} name={card.name} likes={card.likes} onDelPlace={props.onDelPlace} onCardClick={props.onCardClick} />)
});



  return (
        
        <>
            <section className="profile">
              <div className="profile__avatar">
                <div className="profile__avatar-image" style={{ backgroundImage: `url(${userAvatar})` }} /><button className="profile__avatar-edit" onClick={props.onEditAvatar}></button>
                 </div>
                  <div className="profile__info">
                    <div className="profile__name">
                      <h1 className="profile__title" id="profileName">{userName}</h1>
                      <button className="profile__edit-button" type="button" onClick={props.onEditProfile}>
                          <img className="profile__edit-image" src={profileEdit} alt="Редактировать профиль" />
                      </button>
                  </div>
                  <p className="profile__subtitle" id="profileSubname">{userDescription}</p>
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