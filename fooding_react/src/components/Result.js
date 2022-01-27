import React, { useEffect, useState } from 'react';
import ResultBarChart from './chart/ResultBarChart'
import ResultBubbleChart from './chart/ResultBubbleChart';
import ResultDonutChart from './chart/ResultDonutChart'
import ResultLineChart from './chart/ResultLineChart'
import resultData from '../redux/resultData';
import {connect} from 'react-redux';

function connectToStore(state)
{
    return {
        state : state
    }
}

const Result = ()=>{
    const arrnum = [];
    const arrstr = [];
    const [query, setQuery] = useState(window.localStorage.getItem('search'))
    const [buffer, setBuffer] = useState('')
    let sum = 0;
    
    const {
        foodsLocation,
        foodsTime,
        foodsSenti
        
      } = resultData(query)


      function saveBuffer(e){
        setBuffer(e.target.value)
      }
    
    
      function handleSearch(){
        window.localStorage.setItem('search', buffer)
        setQuery(window.localStorage.getItem('search'));
      }
    
      function onEnterKey(e){
        if(e.key==="Enter"){
          handleSearch();
        }
      }




    if(foodsSenti.length !== 0){
        let temp = 0;
        let tempstr = '';
        for (let i = 0; i <20; i++){
            sum += foodsSenti[i]['sen_num']
            
        }
        for (let i = 0; i <20; i++){
            arrnum.push(Math.ceil((foodsSenti[i]['sen_num']/sum)*100))
            arrstr.push(foodsSenti[i]['tag_name'])
        }
        for (let i = 0; i <9; i++){
            for (let j = i + 1; j<10; j++ ){
                if (arrnum[i] < arrnum[j]){
                    temp = arrnum[i];
                    arrnum[i] = arrnum[j];
                    arrnum[j] = temp;

                    tempstr = arrstr[i];
                    arrstr[i] = arrstr[j];
                    arrstr[j] = tempstr;
                }

                if (arrnum[i+10] < arrnum[j+10]){
                    temp = arrnum[i+10];
                    arrnum[i+10] = arrnum[j+10];
                    arrnum[j+10] = temp;

                    tempstr = arrstr[i+10];
                    arrstr[i+10] = arrstr[j+10];
                    arrstr[j+10] = tempstr;
                }

            }
        }

    }

    return(
        <div className="Result">
            <img src="/images/f_logo.png" alt="resultimg"/>
            <div className="inputContainer">
            <input onKeyPress={onEnterKey} onChange={saveBuffer} type="text"  placeholder="음식을 입력해주세요." />
            <button onClick={handleSearch}><img src="/images/searchBtn.png" alt="homeImage"/></button>

         </div>
         <h1>{window.localStorage.getItem('search')}에 대한 분석 데이터</h1>

            <div className="resultContainer">
                {/* location BarChart */}
                <div>
                    {
                        foodsLocation.length !== 0
                        ? <div><ResultBarChart data={foodsLocation}/>
                        <br/><br/><hr/><br/><br/><br/><br/>
                        </div>
                        : <div className="loading"><img src="/images/loading.png" alt="recImage"/></div>
                    }
                    
                </div>

                {/* Days ResultLineChart */}
                <div>
                {
                        foodsTime.length !== 0
                        ? <div><ResultLineChart data={foodsTime}/>
                        <br/><br/><hr/><br/><br/><br/><br/>
                        </div>
                        : null
                    }
                </div>
                {/* All P & N  ResultDonutChart */}
                <div className="doughnutChart">
                    <ResultDonutChart data={foodsSenti}/>             
                </div><br/>

                {/* Keyword P & N ResultBubbleChart */}
                <div className="bubbleContainer">
                    <div className="bubbleChart">
                    {
                        foodsSenti.length !== 0
                        ? <ResultBubbleChart data={foodsSenti}/>
                        : null
                    }
                    </div>
                    {
                        foodsSenti.length !== 0
                            ? <div className="resultTable">
                            <table>
                                <ul>
                                    <tr>
                                        <th>긍정</th>
                                        <th>부정</th>
                                    </tr>

                                    <tr>
                                    <td>{arrstr[0]}{arrnum[0]}%</td>
                                    <td>{arrstr[10]}{arrnum[10]}%</td>
                                    </tr>
                                    <tr>
                                    <td>{arrstr[1]}{arrnum[1]}%</td>
                                    <td>{arrstr[11]}{arrnum[11]}%</td>
                                    </tr>
                                    <tr>
                                    <td>{arrstr[2]}{arrnum[2]}%</td>
                                    <td>{arrstr[12]}{arrnum[12]}%</td>
                                    </tr>
                                    <tr>
                                    <td>{arrstr[3]}{arrnum[3]}%</td>
                                    <td>{arrstr[13]}{arrnum[13]}%</td>
                                    </tr>
                                    <tr>
                                    <td>{arrstr[4]}{arrnum[4]}%</td>
                                    <td>{arrstr[14]}{arrnum[14]}%</td>
                                    </tr>
                                    <tr>
                                    <td>{arrstr[5]}{arrnum[5]}%</td>
                                    <td>{arrstr[15]}{arrnum[15]}%</td>
                                    </tr>
                                    <tr>
                                    <td>{arrstr[6]}{arrnum[6]}%</td>
                                    <td>{arrstr[16]}{arrnum[16]}%</td>
                                    </tr>
                                    <tr>
                                    <td>{arrstr[7]}{arrnum[7]}%</td>
                                    <td>{arrstr[17]}{arrnum[17]}%</td>
                                    </tr>
                                    <tr>
                                    <td>{arrstr[8]}{arrnum[8]}%</td>
                                    <td>{arrstr[18]}{arrnum[18]}%</td>
                                    </tr>
                                    <tr>
                                    <td>{arrstr[9]}{arrnum[9]}%</td>
                                    <td>{arrstr[19]}{arrnum[19]}%</td>
                                    </tr>
                                </ul>
                            </table>
                        </div>
                        : null
                    }
                </div>
            </div>

            <br/>
            {/* Most related Keyowrd list  */}
        </div>
    )
}
export default connect(connectToStore)(Result);
