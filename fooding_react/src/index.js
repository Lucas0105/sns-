import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'; //redux 제공 yarn redux react-redux
import {createStore} from 'redux';
import axios from 'axios'

let _state = {
  name : '',
  location : '',
  search : '',
  agreeLocation : false,
  agree1 : false,
  agree2 : false,
  agree3 : false,
  agree4 : false,
  onJoin : false,
  onLogin : false,
  index : 1
}

function reducer(state = _state, action){

  let _cloneState = JSON.parse(JSON.stringify(state));
  if (action.type ==='login'){
    _cloneState.onLogin = action.onLogin;
    window.localStorage.setItem('onLogin', true)
    window.localStorage.setItem('name', action.name)
    _cloneState.name = action.name;
    _cloneState.location = action.location;
    if (parseInt(action.agreeLocation) === 1){
      console.log('true');
      _cloneState.agreeLocation = true
      window.localStorage.setItem('agreeLocation', true);
    }

    // (async ()=> {
    //   try{
    //     const {status, data} = await axios({
    //       method : 'POST',
    //       url : 'http://localhost:8080/api/user/find',
    //       data : JSON.stringify({
    //         uId: action.uId,
    //         password: action.password
    //       }),
    //       headers:{
    //         'Content-Type' : 'application/json'
    //       }
    //     });
    //     _cloneState.onLogin = true;

    //     console.log(status);
    //     console.log(data);
    //   }
    //   catch(e){
    //     _cloneState.onLogin = true;
    //     console.log(e);
    //   }
    // })();
  }
  else if (action.type ==='onLogin'){
    console.log(state.onLogin);
  }
  else if (action.type ==='joinAgree') {
    (async()=>{
      try{

      }
      catch(e){
        console.log(e);
      }
    })()
    _cloneState.agree1 = action.agree1;
    _cloneState.agree2 = action.agree2;
    _cloneState.agree3 = action.agree3;
    _cloneState.agree4 = action.agree4;
    _cloneState.agreeLocation = action.agree4;
  }
  else if (action.type ==='join'){
    (async ()=> {
      try{
        const {status, data} = await axios({
          method : 'POST',
          url : 'http://localhost:8080/api/user/insertData',
          data : JSON.stringify({
            uId: action.uId,
            password: action.password,
            name : action.name,
            gender:action.gender,
            phone : action.phone,
            address: action.address,
            birthday: action.birthday,
            agreeLocation:state.agreeLocation
          }),
          headers:{
            'Content-Type' : 'application/json'
          }
        });
        // console.log(status);
        // console.log(data);
        console.log(status);
        console.log(data);

        _cloneState.onJoin = true
      }
      catch(e){
        console.log(e);
      }
    })();
    
  }
  else if (action.type ==='search'){
    _cloneState.search = action.food;

  }
  else if (action.type ==='logout'){
    _cloneState.onLogin = false;
  }

  else if (action.type ==='detaile'){
    _cloneState.index = action.index;
  }

  return _cloneState;
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store = {store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
