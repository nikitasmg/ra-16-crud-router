import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import CardItem from "../components/cardItem/CardItem.jsx";
import MyButton from "../components/myButton/MyButton.jsx";
import MyInput from "../components/myInput/MyInput.jsx";
import CloseButton from "../components/closeButton/CloseButton.jsx";

const PostDetail = () => {
    let {id} = useParams()
    const [card, setCard] = useState({})
    const [edit, setEdit] = useState(false)
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        getCard()
    }, [id])

    const getCard = () => {
        axios.get(`https://immense-chamber-90015.herokuapp.com/api/card/${id}`)
            .then(({data}) => {
                setCard(data.data)
                setContent(data.data.content)
            })
    }
    const deleteCard = async () => {
        await axios.delete(`https://immense-chamber-90015.herokuapp.com/api/card/${id}`)
        navigate('/')
    }
    const editCard = async () => {
        await axios.put(`https://immense-chamber-90015.herokuapp.com/api/card/${id}`, {content})
        setEdit(false)
        await getCard()
    }
    return (
        <div style={{padding:'20px 50px'}}>
            <Link to={'/'}> Домой </Link>
            {
                edit
                    ? <>
                        <MyInput type="text" value={content} onChange={(value) => setContent(value)}/>
                        <CloseButton onClick={() => setEdit(false)}/>
                    </>
                    : <CardItem card={card}/>
            }
            {edit
                ? <MyButton onClick={editCard}> Сохранить </MyButton>
                : <div style={{display: "flex", gap: 20}}>
                    <MyButton onClick={() => setEdit(true)}> Изменить</MyButton>
                    <MyButton onClick={deleteCard} style={{background: 'red'}}>Удалить</MyButton>
                </div>
            }
        </div>
    );
};

export default PostDetail;