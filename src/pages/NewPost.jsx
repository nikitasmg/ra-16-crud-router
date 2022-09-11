import React, {useState} from 'react';
import MyInput from "../components/myInput/MyInput.jsx";
import MyButton from "../components/myButton/MyButton.jsx";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import CloseButton from "../components/closeButton/CloseButton.jsx";

const NewPost = () => {
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const sendData = () => {
        if (content) {
            const post = {
                id: Date.now() + '',
                content
            }
            axios.post('https://immense-chamber-90015.herokuapp.com/api/card', post)
                .then((data) => {
                    setContent('');
                    navigate("/", { replace: true });
                })
                .catch(e => console.error(e))
        }
    }
    return (
        <div style={{padding:'20px 50px'}}>
            <MyInput type="text" value={content} onChange={(value) => setContent(value)}/>
            <MyButton onClick={sendData}>Опубликовать</MyButton>
            <CloseButton onClick={() => navigate('/',{replace: true})}/>
        </div>
    );
};

export default NewPost;