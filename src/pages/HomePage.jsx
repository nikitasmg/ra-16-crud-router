import React, {useEffect, useState} from 'react';
import MyButton from "../components/myButton/MyButton.jsx";
import CardList from "../components/cardList/CardList.jsx";
import {Link} from "react-router-dom";
import axios from "axios";

const HomePage = () => {
    const [cards, setCards] = useState([])
    useEffect( () => {
         getCards()
    },[])

    const getCards = async () => {
       await axios.get('https://immense-chamber-90015.herokuapp.com/api/card').then(({data}) => setCards(data.data))
    }
    return (
        <div>
            <header style={{background: "white", padding:10, marginBottom:20}} >
                <Link to={'/posts/new'}>
                <MyButton style={{marginLeft: 'auto'}}  type={'submit'}>Add post</MyButton>
                </Link>
            </header>
            <section>
                <CardList cards={cards}/>
            </section>
        </div>
    );
};

export default HomePage;