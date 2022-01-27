import './App.scss';
import Home from './components/Home'
// import Rank from './components/Rank'
import Rec from './components/Rec'
import Recipe from './components/Recipe'
import Talk from './components/Talk'
import Login from './components/Login'
import Join from './components/Join'
import JoinAgree from './components/JoinAgree'
import Result from './components/Result'
import Write from './components/Write'
import Detaile from './components/Detaile'
import { Route, Switch, NavLink } from 'react-router-dom'
import {connect} from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function connectToStore(state)
{
    return {
        state : state
    }
}


function App({state, dispatch}) {
  function logout(){
    window.localStorage.setItem('onLogin', false)
    window.localStorage.setItem('name', '')
    window.localStorage.setItem('agreeLocation', false)

    dispatch({type:'logout'})
  }

  return (
    <div className="App">
      <div className="ulContainer">
        
        <ul>
        <div className="ul1">
            <li><NavLink exact to="/">HOME</NavLink></li>
            {/* <li><NavLink to="/Rank">푸딩랭킹</NavLink></li> */}
            <li><NavLink to="/Rec">전국푸딩</NavLink></li>
            <li><NavLink to="/Talk">푸딩톡</NavLink></li>
            <li><NavLink to="/Recipe">푸딩레시피</NavLink></li>
        </div>
            {

              window.localStorage.getItem('onLogin') === "true" ?
              <div className="ul2">
                <li>닉네임 : {window.localStorage.getItem('name')}</li>
                <li><button onClick={logout}>로그아웃</button></li>
              </div>
                : 
                
              <div className="ul2">
                <li><NavLink to="/Login">로그인</NavLink></li>
                <li><NavLink to="/JoinAgree">회원가입</NavLink></li>
              </div>
            }
          </ul>
      </div>


      {/* <div id="footer">
        <div>
          <img src="/images/f_flogo.png" alt=""/>
          <p>Name : 정원재</p>
          <p>Number : 010-4847-5806</p>
          <p>Address : 충북 청주시 서원구 충대로1 충북대학교 전자정보대학 소프트웨어학과 S4-1동</p>
        </div>
      </div> */}
      <Switch>
        {/* <Route path="/rank" component={Rank}></Route> */}
        <Route path="/rec" component={Rec}></Route>
        <Route path="/talk" component={Talk}></Route>
        <Route path="/recipe" component={Recipe}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/joinAgree" component={JoinAgree}></Route>
        <Route path="/join" component={Join}></Route>
        <Route path="/result" component={Result}></Route>
        <Route path="/write" component={Write}></Route>
        <Route path="/detaile" component={Detaile}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <div className="wrapper"> 
          <footer>
            <div className="footerContainer">

              <img src="/images/f_flogo.png" alt=""/>
              <div className="pPosition">
                <p> Team Name: All Is Well (정원재, 장원도, 김하민) </p>
                <p> Team Leader Number: 010-1234-5678 </p>
                <p> Address: 충북 청주시 서원구 충대로1 충북대학교 전자정보대학 소프트웨어학과 S4-1동 </p>
              </div>
            </div>
          </footer> 
        </div>
    </div>
  );
}

export default connect(connectToStore)(App);
