import elementTrash from '../images/trash.svg'; 
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card(props) {

const currentUser = React.useContext(CurrentUserContext);
const isOwn = props.card.owner._id === currentUser._id;
const cardDeleteButtonClassName = (
  ` ${isOwn ? 'element__trash_visible' : 'element__trash'}`
); 
const isLiked = props.card.likes.some(i => i._id === currentUser._id);
const cardLikeButtonClassName = (
  ` ${isLiked ? 'element__like_active' : 'element__like'}`
); 

function handleClick() {
  props.onCardClick(props.card);
}  

function handleLikeClick() {
  props.onCardLike(props.card);
}  

function handleDeleteClick() {
  props.onCardDelete(props.card);
}  


return (
<div className="element" >
  <button className="popup__imgbutton" type="button" id="open-image" onClick={handleClick}><img className="element__image" src={props.link} alt="Изображение места" /></button>
  <button className="element__trashbutton" type="button" id="remove-image"  onClick={handleDeleteClick}><img className={cardDeleteButtonClassName} src={elementTrash} alt="Удалить изображение" /></button>
  <div className="element__string">
    <h2 className="element__title">{props.name}</h2>
    <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}><p className="element__nlikes">{props.likes.length}</p></button>
  </div>    
</div>     
    )
}
export default Card;