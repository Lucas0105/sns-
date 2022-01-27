import React from 'react';
import {Doughnut} from 'react-chartjs-2';
const data = {
  labels: [
    '긍정',
    '부정',
  ],
  datasets: [{
    data: [63, 37],
    backgroundColor: [
    '#00BFFF',
    '#FA8072',
    ],
    hoverBackgroundColor: [
    '#00BFFF',
    '#FA8072',
    ]
  }]
};
function ResultDonutChart() {
  return (
    <div>
        <h2>전체 감성분석 비율</h2>
        <Doughnut data={data} 
        />
    </div>
  );
}
export default ResultDonutChart;