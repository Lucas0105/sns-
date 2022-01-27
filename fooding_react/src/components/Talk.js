import React, { useState} from 'react'
import { useHistory} from 'react-router-dom';
import boardSearch from "../redux/boardSearch"
import {connect} from 'react-redux';

function connectToStore(state)
{
    return {
        state : state
    }
}

const Talk = ({state, dispatch})=>{
    const history = useHistory();
    // const [query, setQuery] = useState('')
    const query = ''
    const [pageNumber, setPageNumber] = useState(1)
    // const [numberBuffer, setNumberBuffer] = useState(1)
    const {
        contents,
        contentNumber
      } = boardSearch(query, pageNumber)

    if (contentNumber){
        window.localStorage.setItem('key', contentNumber);
    }

    const listNum = () =>{
        const result = []
        for (let i = 0; i <=Math.ceil(window.localStorage.getItem('key')) / 10; i++){
            result.push(<span key={i}>{i + 1}</span>)
        }
        return result;
    }
    const changeNum = (i) => {
        setPageNumber(i.props.children)
        const pageNum = document.querySelectorAll('.pageNum')
        
        for (let a=0; a <=Math.ceil(window.localStorage.getItem('key')) / 10; a++){
            pageNum[a].style.color = 'black'
        }

        pageNum[i.props.children - 1].style.color = 'red'
        

        console.log(pageNum[i.props.children - 1])
    }

    const onWrite = ()=>{
        if (state.onLogin ===true){
            history.push('/write')
        }
        else {
            alert('로그인 해주세요.')
        }
    }
    const onTitle = (index) => {
        let _index = index
        
        return () => {
            window.sessionStorage.setItem('index', _index)
            dispatch({type : 'detaile', index : _index})
            history.push('/detaile')

        }
    }
    return(
        <div className="Talk">

            <img src="/images/f_logo.png" alt="talkPage"/>
            <h1>
                게시판
            </h1>
            <div className="tableContainer">
                <table>
                    <thead>
                    <tr>
                        <th>
                            <p>번호</p>
                        </th>
                        <th className="title">
                            <p>제목</p>
                        </th>
                        <th>
                            <p>작성자</p>
                        </th>
                        <th className="date">
                            <p>날짜</p>
                        </th>
                        <th>
                            <p>조회수</p>
                        </th>
                    </tr>
                    </thead>
                    </table>
                </div>
                <div className="dbTable">
                <table>
                    {contents.map((content, index) => {
                        return <div key={content.boardNo} onClick={onTitle(content.boardNo)}>
                            <tr>
                                <td>
                                    <p>{content.boardNo} </p>
                                </td>
                                <td className="title">
                                    <p>{content.title} </p>
                                </td>
                                <td>
                                    <p>{content.ID} </p>
                                </td>
                                <td className="date">
                                    <p>{content.regday} </p>
                                </td>
                                <td>
                                    <p>{content.view} </p>
                                </td>
                            </tr>
                        </div>
                        })
                    }
                    </table>
                </div>
                <div className="pageNumContainer">
                    {listNum().map((i, index) => (
                        <li key={i} className='pageNum' onClick={()=>changeNum(i)}>{i}</li>
                    ))}
                    <div className="newWrite" onClick={onWrite}>새글쓰기</div>
                </div>
                
                
        </div>
    )
}

export default connect(connectToStore)(Talk);