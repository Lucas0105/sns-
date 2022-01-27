import React from 'react';
import {Bubble} from 'react-chartjs-2';

const ResultBubbleChart = (props) => {

let sum = 0;


for (let i = 0; i <20; i++){
    sum += props.data[i]['sen_num']
}




const data = {
  datasets: [{
    label: ['긍정'],
    data: [{
      x: Math.ceil((props.data[0]['sen_num']/sum)*100),
      y: Math.ceil((props.data[0]['sen_score']/sum)*100),
      r: Math.ceil((props.data[0]['sen_num']/sum)*100)
    }, {
      x: Math.ceil((props.data[1]['sen_num']/sum)*100),
      y: Math.ceil((props.data[1]['sen_score']/sum)*100),
      r: Math.ceil((props.data[1]['sen_num']/sum)*100)
    }, {
      x: Math.ceil((props.data[2]['sen_num']/sum)*100),
      y: Math.ceil((props.data[2]['sen_score']/sum)*100),
      r: Math.ceil((props.data[2]['sen_num']/sum)*100)
    }, {
      x: Math.ceil((props.data[3]['sen_num']/sum)*100),
      y: Math.ceil((props.data[3]['sen_score']/sum)*100),
      r: Math.ceil((props.data[3]['sen_num']/sum)*100)
    }, {
      x: Math.ceil((props.data[4]['sen_num']/sum)*100),
      y: Math.ceil((props.data[4]['sen_score']/sum)*100),
      r: Math.ceil((props.data[4]['sen_num']/sum)*100)
    }, {
      x: Math.ceil((props.data[5]['sen_num']/sum)*100),
      y: Math.ceil((props.data[5]['sen_score']/sum)*100),
      r: Math.ceil((props.data[5]['sen_num']/sum)*100)
    }, {
      x: Math.ceil((props.data[6]['sen_num']/sum)*100),
      y: Math.ceil((props.data[6]['sen_score']/sum)*100),
      r: Math.ceil((props.data[6]['sen_num']/sum)*100)
    }, {
      x: Math.ceil((props.data[7]['sen_num']/sum)*100),
      y: Math.ceil((props.data[7]['sen_score']/sum)*100),
      r: Math.ceil((props.data[7]['sen_num']/sum)*100)
    }, {
      x: Math.ceil((props.data[8]['sen_num']/sum)*100),
      y: Math.ceil((props.data[8]['sen_score']/sum)*100),
      r: Math.ceil((props.data[8]['sen_num']/sum)*100)
    }, {
      x: Math.ceil((props.data[9]['sen_num']/sum)*100),
      y: Math.ceil((props.data[9]['sen_score']/sum)*100),
      r: Math.ceil((props.data[9]['sen_num']/sum)*100)
    }],
    backgroundColor: "#00BFFF",
    hoverBackgroundColor: "#00BFFF"

  },
  {
    label: '부정',
      data: [
        {
            x: Math.ceil((props.data[10]['sen_num']/sum)*100),
            y: Math.ceil((props.data[10]['sen_score']/sum)*100),
            r: Math.ceil((props.data[10]['sen_num']/sum)*100)
          },
          {
            x: Math.ceil((props.data[11]['sen_num']/sum)*100),
            y: Math.ceil((props.data[11]['sen_score']/sum)*100),
            r: Math.ceil((props.data[11]['sen_num']/sum)*100)
          },
          {
            x: Math.ceil((props.data[12]['sen_num']/sum)*100),
            y: Math.ceil((props.data[12]['sen_score']/sum)*100),
            r: Math.ceil((props.data[12]['sen_num']/sum)*100)
          },
          {
            x: Math.ceil((props.data[13]['sen_num']/sum)*100),
            y: Math.ceil((props.data[13]['sen_score']/sum)*100),
            r: Math.ceil((props.data[13]['sen_num']/sum)*100)
          },        
          {
            x: Math.ceil((props.data[14]['sen_num']/sum)*100),
            y: Math.ceil((props.data[14]['sen_score']/sum)*100),
            r: Math.ceil((props.data[14]['sen_num']/sum)*100)
          },
          {
            x: Math.ceil((props.data[15]['sen_num']/sum)*100),
            y: Math.ceil((props.data[15]['sen_score']/sum)*100),
            r: Math.ceil((props.data[15]['sen_num']/sum)*100)
          },
          {
            x: Math.ceil((props.data[16]['sen_num']/sum)*100),
            y: Math.ceil((props.data[16]['sen_score']/sum)*100),
            r: Math.ceil((props.data[16]['sen_num']/sum)*100)
          },
          {
            x: Math.ceil((props.data[17]['sen_num']/sum)*100),
            y: Math.ceil((props.data[17]['sen_score']/sum)*100),
            r: Math.ceil((props.data[17]['sen_num']/sum)*100)
          },
          {
            x: Math.ceil((props.data[18]['sen_num']/sum)*100),
            y: Math.ceil((props.data[18]['sen_score']/sum)*100),
            r: Math.ceil((props.data[18]['sen_num']/sum)*100)
          },        
          {
            x: Math.ceil((props.data[19]['sen_num']/sum)*100),
            y: Math.ceil((props.data[19]['sen_score']/sum)*100),
            r: Math.ceil((props.data[19]['sen_num']/sum)*100)
          },
          {
            x: 0,
            y: 4,
            r: 0
          },
          {
            x: 0,
            y: -2,
            r: 0
          },
      ],
      backgroundColor:"#FA8072",
      hoverBackgroundColor: "#FA8072"
  }],
  
};

  return (
    <div>
        <h2>감성분석</h2>
        <Bubble data={data} 

        options={{
          
          
            scale: {
                ticks: {
                   maxTicksLimit: 0
                }
             },
        }}/>
    </div>
  );
}
export default ResultBubbleChart;