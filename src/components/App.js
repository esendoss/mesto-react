import { useState } from 'react';
import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

    //открытие попапов

    function handleEditProfileClick() {
        setisEditProfilePopupOpen(!isEditProfilePopupOpen);
    };
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    };
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    };

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    //закрытие попапов
    function closeAllPopups() {
        setisEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({});
    }

    return (
        <div className="page">
            <div className="page__box">
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />
                <Footer />
            </div>

            <PopupWithForm
                isOpen={isEditProfilePopupOpen}
                name='edit'
                title='Редактировать профиль'
                onClose={closeAllPopups}
                buttonText='Сохранить'
            >
                <input className="popup__input popup__input_data_name" type="text" id="name" placeholder="Имя" name="userName" minLength="2" maxLength="40" required />
                <span className="popup__input-error name-error" id="name-error"></span>
                <input className="popup__input popup__input_data_job" type="text" id="job" placeholder="О себе" name="description" minLength="2" maxLength="200" required />
                <span className="popup__input-error job-error" id="job-error"></span>

            </PopupWithForm>

            <PopupWithForm
                isOpen={isAddPlacePopupOpen}
                name='add'
                title='Новое место'
                onClose={closeAllPopups}
                buttonText='Создать'
            >
                <input className="popup__input popup__input_data_title" type="text" id="title" name="title" placeholder="Название" minLength="2" maxLength="30" required />
                <span className="popup__input-error title-error" id="title-error"></span>
                <input className="popup__input popup__input_data_img" type="url" id="url" name="url" placeholder="Ссылка на картинку" required />
                <span className="popup__input-error url-error" id="url-error"></span>
            </PopupWithForm>

            <PopupWithForm
                isOpen={isEditAvatarPopupOpen}
                name='avatar'
                title='Обновить аватар'
                onClose={closeAllPopups}
                buttonText='Сохранить'
            >
                <input className="popup__input popup__input_data_avatar" type="url" id="avatar" name="avatar" placeholder="Ссылка на картинку" required />
                <span className="popup__input-error avatar-error" id="avatar-error"></span>

            </PopupWithForm>

            <PopupWithForm
                name='warning'
                title='Вы уверены?'
                onClose={closeAllPopups}
                buttonText='Да'
            >
            </PopupWithForm>

            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            >
            </ImagePopup>
        </div>
    );
}

export default App;
