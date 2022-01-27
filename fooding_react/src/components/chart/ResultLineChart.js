import React from 'react';
import {Line} from 'react-chartjs-2';

const ResultLineChart = (props)=>{
  const data = {
    labels: ['10월 28일', '10월 29일', '10월 30일', '10월 31일', '11월 1일', '11월 2일', '11월 3일'],
    datasets: [
      {
        label: '시간에 따른 게시글 수',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [props.data[6]['num'], props.data[5]['num'], props.data[4]['num'], props.data[3]['num'], props.data[2]['num'], props.data[1]['num'], props.data[0]['num']],
        options : {
          legend : {
            display : false
          }
        }
      }
    ]
  };


  return (
    <div>
        <h2>시간에 따른 관심도 변화율</h2>
        <Line data={data} 
          width={800}
          height={300}
          options={{
            legend : {
              display : false
            }
          }}
        />
    </div>
  );
}

export default ResultLineChart;