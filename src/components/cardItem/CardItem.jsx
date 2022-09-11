import React from 'react';
import s from './cardItem.module.scss'
import {useNavigate} from "react-router-dom";
const CardItem = ({card}) => {
    const timeFromAdd = () => {
        const minutes = Math.floor((new Date(Date.now()) - new Date(card.createdAt)) / 1000 / 60)

        switch (minutes) {
            case minutes > 60:
                return minutes / 60 + ' час назад'
            case minutes > 1440:
                return minutes / 1440 + ' сутки назад'
            default:
                return minutes + ' мин назад'
        }
    }
    const navigate = useNavigate()
    return (
        <div className={s.card} onClick={() => navigate(`/posts/${card.id}`)}>
            <header className={s.header}>
                <img src="" alt="" className={s.avatar}/>
                <div className={s.top}>
                    <span className={s.name}>Имя Имя</span>
                    <div className={s.info}>
                        <span className={s.subtitle}>Основатель группы</span>
                        <span className={s.time}>{timeFromAdd()}</span>
                    </div>
                </div>
            </header>
            <div className={s.content}>
                {card.content}
            </div>
        </div>
    );
};

export default CardItem;