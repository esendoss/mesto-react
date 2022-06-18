import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="page__box">
      <header className="header page__borders">
            <img className="header__logo" src="" alt="Логотип проекта Mesto" />
      </header>
      <main className="main">
            <section className="profile page__borders">
                <div className="profile__info">
                    <img className="profile__avatar" src="" alt="Аватарка" />
                    <h1 className="profile__name"></h1>
                    <button className="profile__edit-button" type="button" aria-label="Редактировать"></button>
                    <p className="profile__about"></p>
                </div>
                    <button className="profile__add-button" type="button" aria-label="Добавить"></button>
            </section>
            <ul className="gallery page__borders"></ul>
            <template id="gallery-cards">
                <li className="card">
                    <img className="card__img" src="#" alt="" />
                    <button className="card__delete" type="button"></button>
                    <div className="card__caption"> 
                        <h2 className="card__place"></h2>
                        <div className="card__likes">
                            <button className="card__like" type="button">
                                <img src="" alt="Лайк" />
                            </button>
                            <p className="card__like-counter">0</p>
                        </div>
                    </div>
                </li>
            </template>
        </main>
        <footer className="footer page__borders">
            <p className="footer__author">&copy; 2022 Mesto Russia</p>
        </footer>
    </div>
     <section className="popup popup_edit">
     <div className="popup__container">
         <form className="form form_validate edit-form" name="edit-form" novalidate>
             <button className="popup__exit popup__exit_edit" type="button">
                 <img className="popup__exit-sign" src="" alt="Кнопка выхода" />
             </button>
             <h3 className="popup__title">Редактировать профиль</h3>
             <input className="popup__input popup__input_data_name" type="text" id="name" value="" placeholder="Имя" name="userName" minlength="2" maxlength="40" required />
             <span className="popup__input-error name-error" id="name-error"></span>
             <input className="popup__input popup__input_data_job" type="text" id="job" value="" placeholder="О себе" name="description" minlength="2" maxlength="200" required />
             <span className="popup__input-error job-error" id="job-error"></span>
             <button className="popup__submit" type="submit">Сохранить</button>
         </form>
     </div>
 </section>
 <section className="popup popup_add">
     <div className="popup__container">
         <form className="form form_validate add-form" name="add-form" novalidate>
             <button className="popup__exit popup__exit_add" type="button">
                 <img className="popup__exit-sign" src="<%=require('./images/close-icon.svg')%>" alt="Кнопка выхода" />
             </button>
             <h3 className="popup__title">Новое место</h3>
             <input className="popup__input popup__input_data_title" type="text" id="title" value="" name="title" placeholder="Название" minlength="2" maxlength="30" required />
             <span className="popup__input-error title-error" id="title-error"></span>
             <input className="popup__input popup__input_data_img" type="url" id="url" value="" name="url" placeholder="Ссылка на картинку" required />
             <span className="popup__input-error url-error" id="url-error"></span>
             <button className="popup__submit popup__submit_add" type="submit" id="add-card">Создать</button>
         </form>
     </div>
 </section>
 <section className="popup popup_picture">
         <form className="form" name="pic-form">
             <div className="popup__container-image">
                 <img className="popup__image" src="#" alt="" />
                 <button className="popup__exit popup__exit_pic" type="button">
                     <img className="popup__exit-sign" src="<%=require('./images/close-icon.svg')%>" alt="Кнопка выхода" />
                 </button>
             </div>
             <h4 className="popup__name"></h4>
         </form>
 </section>
 <section className="popup popup_avatar">
     <div className="popup__container">
        <form className="form form_validate avatar-form" name="avatar">
         <button className="popup__exit popup__exit_add" type="button">
             <img className="popup__exit-sign" src="<%=require('./images/close-icon.svg')%>" alt="Кнопка выхода" />
         </button>
           <p className="popup__title">Обновить аватар</p>
           <input  className="popup__input popup__input_data_avatar" type="url" id="avatar" value="" name="avatar" placeholder="Ссылка на картинку" required />
           <span className="popup__input-error avatar-error" id="avatar-error"></span>
           <button className="popup__submit" type="submit">Сохранить</button>
        </form>
     </div>
  </section>
  <section className="popup popup_warning">
     <div className="popup__container">
        <form className="form" name="warning">
         <button className="popup__exit popup__exit_add" type="button">
             <img className="popup__exit-sign" src="<%=require('./images/close-icon.svg')%>" alt="Кнопка выхода" />
         </button>
           <p className="popup__title popup__title_warning">Вы уверены?</p>
           <button className="popup__submit popup__submit_warning" type="submit">Да</button>
        </form>
     </div>
  </section>
  </>
  );
}

export default App;
