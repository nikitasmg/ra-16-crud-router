import React from 'react';
import CardItem from "../cardItem/CardItem.jsx";

const CardList = ({cards}) => {

    return (
        <div>
            {cards.map(card =>
                <CardItem card={card} key={card.id}/>
            )}
            
        </div>
    );
};

export default CardList;