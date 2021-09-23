import './index.css';
import headerLogo from './images/header-logo.svg';
import avatarImage from './images/profile_avatar.jpg';
import profileEdit from './images/profile_edit.svg';
import addButton from './images/add_button.svg';
document.body.classList.add("page");
function App() {
  return (

<main className="content">
  <header className="header">
    <a href="#" target="_self"><img className="header__logo" src={headerLogo} alt="Логотип" /></a>
  </header>
      <section className="profile">
        <div className="profile__avatar">
          <img className="profile__avatar-image" src={avatarImage} alt="Аватар"/><div className="profile__avatar-edit"></div>
           </div>
            <div className="profile__info">
              <div className="profile__name">
                <h1 className="profile__title" id="profileName">Жак-Ив Кусто</h1>
                <button className="profile__edit-button" type="button">
                    <img className="profile__edit-image" src={profileEdit} alt="Редактировать профиль" />
                </button>
            </div>
            <p className="profile__subtitle" id="profileSubname">Исследователь океана</p>
          </div>
          <button className="profile__add-button" type="button">
            <img className="profile__add-image" src={addButton} alt="Добавить изображение" />
          </button>
      </section>
      <section className="elements">
        <h2 className="elements__loading">Загрузка...</h2>
      </section>
   <footer className="footer">
    <p className="footer__copyright">© 2021 Mesto Russia</p>
  </footer>
  </main>
 
  );
}

export default App;
