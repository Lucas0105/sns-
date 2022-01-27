import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import {connect} from 'react-redux';

function connectToStore(state)
{
    return {
        state : state
    }
}

const Write = ({state})=>{
    const history = useHistory();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [status, setStatus] = useState(0)
    useEffect(() => {
        if (status !==0){
            history.goBack();
        }

    }, [status])
    function insert() {
        (async ()=> {
            try{
            const {status} = await axios({
                method : 'GET',
                url: 'http://localhost:8080/api/board/insertData',
                params : {title:title, content:content, name:state.name},
                headers:{
                'Content-Type' : 'application/json'
                }
                }
            );
            setStatus(status)
            }
            catch(e){
            console.log(e);
            }
            
        })();
        history.goBack();
    }
    return(
        <div className="write">
            <img src="/images/f_logo.png" alt="writeImg"/>
            <h1>
                새글쓰기
            </h1>
            <div className="inputTitle">
                <input type="text" placeholder="제목" onChange={(e)=>{setTitle(e.target.value)}}></input>
            </div>
            <div className="content">
                <textarea onChange={(e)=>{setContent(e.target.value)}}></textarea>
            </div>

            <div className="buttonContainer">
                <button onClick={()=>{history.goBack()}}>목록</button>
                <button onClick={()=>{insert()
                    
                }}>새글쓰기</button>
            </div>
        </div>
    )
}

export default connect(connectToStore)(Write);
