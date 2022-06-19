import { useState } from 'react';
import close from '../images/close-icon.svg';
import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);

    //открытие попапов

    function handleEditProfileClick() {
        setisEditProfilePopupOpen(!isEditProfilePopupOpen);
    };
    function handleAddPlaceClick() {
        setisAddPlacePopupOpen(!isAddPlacePopupOpen);
    };
    function handleEditAvatarClick() {
        setisEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    };

    //закрытие попапов
    function closeAllPopups() {
        setisEditProfilePopupOpen(false);
        setisAddPlacePopupOpen(false);
        setisEditAvatarPopupOpen(false);
    }

    return (
        <body className="page">
            <div className="page__box">
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                />
                <Footer />
            </div>
            <PopupWithForm
                isOpen={isEditProfilePopupOpen}
                name='edit'
                title='Редактировать профиль'
                onClose={closeAllPopups}
            >
                <input className="popup__input popup__input_data_name" type="text" id="name" value="" placeholder="Имя" name="userName" minLength="2" maxLength="40" required />
                <span className="popup__input-error name-error" id="name-error"></span>
                <input className="popup__input popup__input_data_job" type="text" id="job" value="" placeholder="О себе" name="description" minLength="2" maxLength="200" required />
                <span className="popup__input-error job-error" id="job-error"></span>

            </PopupWithForm>
            <PopupWithForm
                isOpen={isAddPlacePopupOpen}
                name='add'
                title='Новое место'
                onClose={closeAllPopups}
            >
                <input className="popup__input popup__input_data_title" type="text" id="title" value="" name="title" placeholder="Название" minLength="2" maxLength="30" required />
                <span className="popup__input-error title-error" id="title-error"></span>
                <input className="popup__input popup__input_data_img" type="url" id="url" value="" name="url" placeholder="Ссылка на картинку" required />
                <span className="popup__input-error url-error" id="url-error"></span>
            </PopupWithForm>

            <PopupWithForm
                isOpen={isEditAvatarPopupOpen}
                name='avatar'
                title='Обновить аватар'
                onClose={closeAllPopups}
            >
                <input className="popup__input popup__input_data_avatar" type="url" id="avatar" value="" name="avatar" placeholder="Ссылка на картинку" required />
                <span className="popup__input-error avatar-error" id="avatar-error"></span>

            </PopupWithForm>
            <PopupWithForm
                name='warning'
                title='Вы уверены?'
                onClose={closeAllPopups}
            >
            </PopupWithForm>
            /*
            <section className="popup popup_picture">
                <form className="form" name="pic-form">
                    <div className="popup__container-image">
                        <img className="popup__image" src="#" alt="" />
                        <button className="popup__exit popup__exit_pic" type="button">
                            <img className="popup__exit-sign" src={close} alt="Кнопка выхода" />
                        </button>
                    </div>
                    <h4 className="popup__name"></h4>
                </form>
            </section>
            */
        </body>
    );
}

export default App;
