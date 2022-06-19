import React from 'react';
import '../index.css';
import close from '../images/close-icon.svg';

function PopupWithForm({title, name, children, isOpen, onClose}) {
    return (
        <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}
        onClick={onClose}
        >
            <div className="popup__container">
                <form className="form" name={name} noValidate>
                    <button className="popup__exit popup__exit_edit" type="button" onClick={onClose}>
                        <img className="popup__exit-sign" src={close} alt="Кнопка выхода" />
                    </button>
                    <h3 className="popup__title">{title}</h3>
                    {children}
                    <button className="popup__submit" type="submit">Сохранить</button>
                </form>
            </div>
        </div>

    )
}

export default PopupWithForm