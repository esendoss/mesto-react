import { useState } from 'react';
import like from '../images/like.svg';
function Main({onEditProfile, onAddPlace, onEditAvatar}) {
    const [] =useState('');




    return (
        <main className="main">
            <section className="profile page__borders">
                <div className="profile__info">
                    <img className="profile__avatar" onClick={onEditAvatar} src="" alt="Аватарка" />
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button onClick={onEditProfile} className="profile__edit-button" type="button" aria-label="Редактировать"></button>
                    <p className="profile__about">Исследователь океана</p>
                </div>
                    <button onClick={onAddPlace} className="profile__add-button" type="button" aria-label="Добавить"></button>
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
                                <img src={like} alt="Лайк" />
                            </button>
                            <p className="card__like-counter">0</p>
                        </div>
                    </div>
                </li>
            </template>
        </main>
    )
}

export default Main