import React from "react";
import '../index.css';
import like from '../images/like.svg';

function Card({ card, onCardClick }) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="card">
            <img className="card__img" src={card.link} alt={card.name} onClick={handleClick} />
            <button className="card__delete" type="button"></button>
            <div className="card__caption">
                <h2 className="card__place">{card.name}</h2>
                <div className="card__likes">
                    <button className="card__like" type="button">
                        <img src={like} alt="Лайк" />
                    </button>
                    <p className="card__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}
export default Card;