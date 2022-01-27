import React from 'react';
import { useHistory} from 'react-router-dom';
import detaileSearch from '../redux/detaileSearch';


const Detaile = ()=>{
    const history = useHistory();
    const {
        contents
      } = detaileSearch(window.sessionStorage.getItem('index'))

    function onTalk(){
        history.goBack();
    }
    console.log(contents)

    return(
        <div className="detaile">
            <img src="/images/f_logo.png" alt="login image"/>                

            <h1>
                상세 페이지
            </h1>
            <div>
                {contents[0] ? 
                <div className="boardContainer">
                    <h2>[NO : {contents[0].boardNo}] {contents[0].title}</h2>
                    <div><p>date : {contents[0].regday} </p></div>
                    <div className="view">view : {contents[0].view}</div>
                    <div className="ID">작성자 : {contents[0].ID}</div>

                    <br/>
                    <br/>
                    <hr/>
                    <br/>
                    <p>{contents[0].content}</p>
                    <button onClick={onTalk}>목록</button>
                </div>
                :
                null}
                
            </div>
        </div>
    )
}

export default Detaile;
