import elementTrash from '../images/trash.svg'; 

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
      }  
return (
<div className="element" >
  <button className="popup__imgbutton" type="button" id="open-image" onClick={handleClick}><img className="element__image" src={props.link} alt="Изображение места" /></button>
  <button className="element__trashbutton" type="button" id="remove-image"  onClick={props.onDelPlace}><img className="element__trash" src={elementTrash} alt="Удалить изображение" /></button>
  <div className="element__string">
    <h2 className="element__title">{props.name}</h2>
    <button type="button" className="element__like"><p className="element__nlikes">{props.likes.length}</p></button>
  </div>    
</div>     
    )
}
export default Card;