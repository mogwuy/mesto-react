import React from 'react';
import addButton from '../images/add_button.svg';
import profileEdit from '../images/profile_edit.svg';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {
const currentUser = React.useContext(CurrentUserContext);




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
            {props.cards}
            </section>
        </>
    );
  }



  export default Main;