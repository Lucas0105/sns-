import React from 'react';

import {Bar} from 'react-chartjs-2';


const ResultBarChart = (props)=>{

  const data = {
    labels: ['서울', '경기도', '충청북도', '충청남도', '강원도', '경상남도', '경상북도', '전라북도', '전라남도', '제주도'],
    datasets: [
      {
        label: '지역에 따른 좋아요 수',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',

        data: [props.data[0]['food_like'], props.data[1]['food_like'], props.data[2]['food_like'], props.data[3]['food_like'], props.data[4]['food_like'], props.data[5]['food_like'], props.data[6]['food_like'], props.data[7]['food_like'], props.data[8]['food_like'], props.data[9]['food_like']]
      }
    ]
  };

    return(
        <div>
            <h2>지역에 따른 음식 관심도</h2>
            <Bar
            data={data}
            width={1000}
            height={300}
            options={{
                scale: {
                    ticks: {
                       maxTicksLimit: 0
                    }
                 }
            }}
            />
        </div>
    )
}

export default ResultBarChart;
