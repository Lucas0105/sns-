import React, {useState} from 'react';
import Slide from './Slide';
import homePlace from '../redux/homePlace'
import {connect} from 'react-redux';
import { useHistory} from 'react-router-dom';

function connectToStore(state)
{
    return {
        state : state
    }
}


const Home = ({state, dispatch})=>{
    const history = useHistory();
    const query = '충북';
    const [buffer, setBuffer] = useState('')

  const {
        foodsAll, 
        foodsSeoul, 
        foodsQuery
      } = homePlace(query)
      
  function saveBuffer(e){
    setBuffer(e.target.value)
  }


  function handleSearch(){
    window.localStorage.setItem('search', buffer)

    dispatch({type : 'search', food : buffer})
    history.push("/result")
  }

  function onEnterKey(e){
    if(e.key==="Enter"){
      handleSearch();
    }
  }
    return(
        <div className="Home">
         <img src="/images/f_logo.png"alt="homeImage"/><br/>
         <div className="inputContainer">
            <input onKeyPress={onEnterKey} onChange={saveBuffer} type="text"  placeholder="음식을 입력해주세요." />
            <button onClick={handleSearch}><img src="/images/searchBtn.png" alt="homeImage"/></button>
         </div>

            <Slide />
            <div className="tableContainer">
                <table>
                    <tr className="topRaw">
                        <div className="top">
                            <td >전국</td> 
                        </div>
                    </tr>
                    {foodsAll.map((food, index) => {
                            return <div key={food.food_id}>
                            <tr>
                                <td className="homeText">
                                <h1> {index + 1} {food.food_name}</h1>
                                </td>
                                <td>
                                    <p>like {food.food_like}</p>
                                </td>
                            </tr>
                        </div>
                        })
                    }
                </table>
                <table className="table2">
                    <tr>
                         <div className="top">
                            <td>서울</td> 
                         </div>
                    </tr>
                    
                    {foodsSeoul.map((food, index) => {
                            return <div key={food.food_id}>
                            <tr>
                                <td className="homeText">
                                    <h1> {index + 1} {food.food_name}</h1>
                                </td>
                                <td>
                                    <p>like {food.food_like}</p>
                                </td>
                            </tr>
                        </div>
                        })
                    }
                </table>
                <table className="table3">

                    <tr>
                        <div className="top">
                            <td>충북</td> 
                         </div>
                    </tr>
                    {foodsQuery.map((food, index) => {
                            return <div key={food.food_id}>
                            <tr>
                                <td className="homeText">
                                    
                                    <h1> {index + 1} {food.food_name}</h1>
                                </td>
                                <td>
                                    <p>like {food.food_like}</p>
                                </td>
                            </tr>
                        </div>
                        })
                    }
                </table>
            </div>
            
        
        </div>
    )
}
export default connect(connectToStore)(Home);