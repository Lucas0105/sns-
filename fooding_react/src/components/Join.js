import React, { useState } from 'react';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';

function connectToStore(state)
{
    return {
        state : state
    }
}

const Join = ({state, dispatch})=>{
    const history = useHistory();

    const monthOption = () =>{
        const result = [];
        for(let i =1; i<=12; i++){
            result.push(
                <option key={i} value={i}>{i}</option>
            )
        }
        return result;
    };

    const [uId, uIdSet] = useState('');
    const [password1, password1Set] = useState('');
    const [password2, password2Set] = useState('');
    const [name, nameSet] = useState('');
    const [year, yearSet] = useState('');
    const [month, monthSet] = useState('');
    const [day, daySet] = useState('');
    const [gender, genderSet] = useState('');
    const [address, addressSet] = useState('');
    const [phone, phoneSet] = useState('');
    
    return(
        <div className="Join">
            <h1>
                JOIN
            </h1>
            <p>안녕하세요 푸딩입니다.</p><br/>
            <div>
                <label htmlFor="uId"></label>
                <input type="text" name="uId" placeholder="아이디" onChange={(evt)=>uIdSet(evt.target.value)} /><br/>

                <label htmlFor="password1"> </label>
                <input type="password" name="password1" placeholder="비밀번호" onChange={(evt)=>password1Set(evt.target.value)} /><br/>

                <label htmlFor="password2"></label>
                <input type="password" name="password2" placeholder="비밀번호 확인" onChange={(evt)=>password2Set(evt.target.value)} /><br/>
                <br/>
                <br/>
                <label htmlFor="name"><p>이름</p></label>
                <input type="text" name="name" placeholder="이름" onChange={(evt)=>nameSet(evt.target.value)} /><br/>
                <br/><br/>
                <label htmlFor="year"><p>생년월일</p></label>
                <input className="birth" type="text" name="year" placeholder="년(4자)" onChange={(evt)=>yearSet(evt.target.value)} />
                <select className="birth" name="month"  onChange={(evt)=>monthSet(evt.target.value)}>
                    <option value='0'>월</option>
                    {monthOption()}
                </select>
                <input className="birth" type="text" name="day"  onChange={(evt)=>daySet(evt.target.value)} />
                <br/><br/>


                <label htmlFor="gender"><p>성별</p></label>
                <select className="gender" name="gender"  onChange={(evt)=>genderSet(evt.target.value)}>
                    <option value='0'>성별</option>
                    <option value='m'>남자</option>
                    <option value='w'>여자</option>
                    <option value='3'>선택안함</option>
                </select>
                <br/><br/>
                <label htmlFor="address"><p>주소</p></label>
                <input type="text" name="address"  onChange={(evt)=>addressSet(evt.target.value)} /><br/><br/>
                <label htmlFor="phone"><p>연락처</p></label>
                <input type="text" name="phone" onChange={(evt)=>phoneSet(evt.target.value)} /><br/>
                <br/>
                <div className="regist">
                    <button onClick={()=>{
                        if(uId === ''){
                            alert('아이디를 입력해주세요.');
                        }
                        else if (password1 === ''){
                            alert('비밀번호를 입력해주세요.');
                        }
                        else if (password2 === ''){
                            alert('비밀번호를 입력해주세요.');
                        }
                        else if (name === ''){
                            alert('이름을 입력해주세요.');
                        }
                        else if ((year === '' || month === 0 || month === '' || day ==='')===true){
                            alert('생년월일을 입력해주세요..');
                        }
                        else if (gender === '0' || gender ===''){
                            alert('성별을 선택해주세요.');
                        }
                        else if (address === ''){
                            alert('주소를 입력해주세요.');
                        }
                        else if (phone === ''){
                            alert('휴대전화를 입력해주세요.');
                        }
                        else {// write regular expression
                            if(password1 !== password2){
                                alert('비밀번호가 일치하지 않습니다.');
                            }
                            else{
                                const birthday = year + month + day;
                                
                                dispatch({type : 'join', uId:uId, password:password1, name:name, birthday:birthday, gender:gender, address:address, phone:phone})
                                
                                alert('회원가입에 성공하셨습니다.')
                                history.push('/');
                            }
                            
                        }
                    }}>가입하기</button>
                </div>
            </div>
        </div>
    )
}

export default connect(connectToStore)(Join);