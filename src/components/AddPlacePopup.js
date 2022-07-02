import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

    const cardRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        onAddPlace({
            card: cardRef.current.value,
        })
    }

    return (
        <PopupWithForm
            isOpen={isOpen}
            name='add'
            title='Новое место'
            onClose={onClose}
            buttonText='Создать'
            onSubmit={handleSubmit}
        >
            <input
                className="popup__input popup__input_data_title"
                type="text"
                id="title"
                name="title"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                ref={cardRef}
                required />
            <span className="popup__input-error title-error" id="title-error"></span>
            
            <input 
            className="popup__input popup__input_data_img" 
            type="url"
            id="url" 
            name="url" 
            placeholder="Ссылка на картинку" 
            ref={cardRef}
            required />
            <span className="popup__input-error url-error" id="url-error"></span>
        </PopupWithForm>
    )

}

export default AddPlacePopup;