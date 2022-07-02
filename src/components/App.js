import { useEffect, useState } from 'react';
import '../index.css'
import '../App.css';
import Api from '../utils/Api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
    const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [cards, setCards] = useState([]);

    const [currentUser, setCurrentUser] = useState([]);

    //Api
    useEffect(() => {
        Api.getUserInfo()
            .then((name, about, avatar) => {
                setCurrentUser(name, about, avatar)
            })
            .catch(err => console.log(`Ошибка: ${err}`));
    }, []);

    useEffect(() => {
        Api.getInitialCards()
            .then((data) => {
                setCards(data);
            })
            .catch(err => console.log(`Ошибка: ${err}`));
    }, []);

    function handleUpdateUser(data) {
        Api.editProfileInfo(data)
            .then((newProfile) => {
                setCurrentUser(newProfile);
                closeAllPopups();
            })
            .catch(err => console.log(`Ошибка: ${err}`));
    }

    function handleUpdateAvatar(data) {
        Api.editAvatar(data)
            .then((newAvatar) => {
                setCurrentUser(newAvatar);
                closeAllPopups();
            })
            .catch(err => console.log(`Ошибка: ${err}`));
    }

    function handleAddPlaceSubmit(data) {
        Api.addUserCard(data)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch(err => console.log(`Ошибка: ${err}`))
    }

    //лайк
    function handleCardLike(card) {
        //Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some((i) => i._id === currentUser._id);

        //Отправляем запрос в API и получаем обновлённые данные карточки
        Api.like(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => (c._id === card._id ? newCard : c))
                );
            });
    }

    //удаление карточки
    function handleCardDelete(card) {
        //Снова проверяем, являемся ли мы владельцем текущей карточки
        const isOwn = card.owner._id === currentUser._id;

        // Отправляем запрос в API и получаем обновлённые данные карточки
        Api.deleteCard(card._id, !isOwn)
            .then(() => {
                setCards((state) => state.filter((c) => c._id !== card._id))
            });
    }



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
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <div className="page__box">
                    <Header />
                    <Main
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                        cards={cards}
                    />
                    <Footer />
                </div>
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
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
        </CurrentUserContext.Provider>
    );
}

export default App;
