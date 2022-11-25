import React, { useState } from "react";
import BookDeatails from "./BookDeatails";

const Card = ({ card, wishList, setWishList }) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const editWishList = (currentCard) => {
        if (wishList.includes(card))
            setWishList(wishList.filter(card => card !== currentCard));
        else
            setWishList([...wishList, currentCard]);
    }

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        
            <article>
                <button onClick={toggleModal}>
                    <h2>{card.volumeInfo.title}</h2>
                </button>
                {modal ? <BookDeatails card={card}/> : null}
                <button style={{display: 'block'}} onClick={editWishList(card)}> add to wish list </button>
            </article>
    )
}
export default Card