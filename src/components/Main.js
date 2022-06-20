import { useEffect, useState } from 'react';
import Api from '../utils/Api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setuUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    //запросы к API
    useEffect(() => {
        Api.getUserInfo().then(({ name, about, avatar }) => {
            setUserName(name);
            setUserDescription(about);
            setuUserAvatar(avatar);
        })
            .catch(err => console.log(`Ошибка: ${err}`));
        Api.getInitialCards().then((data) => {
            setCards(data);
        })
            .catch(err => console.log(`Ошибка: ${err}`));
    }, []);

    return (
        <main className="main">
            <section className="profile page__borders">
                <div className="profile__info">
                    <img className="profile__avatar" onClick={onEditAvatar}
                        style={{ backgroundImage: `url(${userAvatar})` }}
                    />
                    <h1 className="profile__name">{userName}</h1>
                    <button onClick={onEditProfile} className="profile__edit-button" type="button" aria-label="Редактировать"></button>
                    <p className="profile__about">{userDescription}</p>
                </div>
                <button onClick={onAddPlace} className="profile__add-button" type="button" aria-label="Добавить"></button>
            </section>
            <ul className="gallery page__borders">
                {cards.map((card) => (
                    <Card key={card._id} card={card} onCardClick={onCardClick} />
                ))}
            </ul>
        </main>
    )
}

export default Main