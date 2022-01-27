import React, {useEffect, useState} from 'react';
import { useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios'


function connectToStore(state)
{
    return {
        state : state
    }
}


const Login = ({state, dispatch})=>{
    const history = useHistory();
    let [uId, uIdSet] = useState('');
    let [password, passwordSet] = useState('');

    useEffect(()=>{
        if (state.onLogin ===true){
            alert('이미 로그인 하셨습니다.');
            history.push("/");

        }
    })

    return(
        <div className="Login">
            <img src="/images/f_logo.png" alt="login image"/>                
            <p>로그인</p>
            <div>
                <label htmlFor="userId"></label>
                <input type="text" name="userId" placeholder="아이디" onChange={(evt)=>{
                    uIdSet(evt.target.value);
                    console.log(`id : ${evt.target.value}`);                }}/><br></br>

                <label htmlFor="password"></label>
                <input type="password" name="password" placeholder="비밀번호" onChange={(evt)=>{
                    passwordSet(evt.target.value);
                    console.log(`password : ${evt.target.value}`);
                }}/><br></br>
                <div className="aTeg"><a href="#">아이디 · 비밀번호 찾기</a><br/></div>
                <div className="registContainer">
                    <div className="regist">
                        <button onClick={()=>{history.push("/joinAgree")}}>회원가입</button>
                    </div>
                    <div className="loginBtn">
                    <button onClick={()=>{
                        if(uId === ''){
                            alert('아이디를 입력해주세요.');
                        }
                        else if(password === ''){
                            alert('비밀번호를 입력해주세요.');
                            
                        }
                        else {
                            (async ()=> {
                                try{
                                const {status, data} = await axios({
                                    method : 'POST',
                                    url : 'http://localhost:8080/api/user/find',
                                    data : JSON.stringify({
                                    uId: uId,
                                    password: password
                                    }),
                                    headers:{
                                    'Content-Type' : 'application/json'
                                    }
                                });
                                console.log(status);
                                if (data.r ==='ok'){
                                    console.log()
                                    history.push("/");
                                    dispatch({type : 'login', onLogin : true, name:data.result[0].name, location:data.result[0].address, agreeLocation:data.result[0].agreeLocation})
                                    
                                }
                                else{
                                    alert('아이디 또는 비밀번호를 확인해주세요.')
                                }
                                console.log(data);
                                }
                                catch(e){
                                console.log(e);
                                }
                            })();
                        }
                        }}>로그인</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default connect(connectToStore)(Login);