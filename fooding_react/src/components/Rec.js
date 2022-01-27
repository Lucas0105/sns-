import React, { useState, useRef, useCallback } from 'react'
import placeSearch from '../redux/placeSearch'

export default function Rec() {
  const [query, setQuery] = useState('')
  const [buffer, setBuffer] = useState('')
  const [onSearch, setOnSearch] = useState(false)
  const onSearchBtn = true
  const [pageNumber, setPageNumber] = useState(1)
  
  const {
    foods,
    hasMore,
    loading,
    error
  } = placeSearch(query, pageNumber)

  
  const observer = useRef()
  const lastfoodElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  function saveBuffer(e){
    setBuffer(e.target.value)
  }


  function handleSearch(e){
    setQuery(buffer)
    setPageNumber(1)
    setOnSearch(true)
  }

  function buttonSearch(e){
    setQuery(e.target.innerText)
    setPageNumber(1)
    // setOnSearchBtn(false)
    setOnSearch(true)
  }

  function onEnterKey(e){
    if(e.key==="Enter"){
      handleSearch();
    }
  }
  return (
    <div className="Rec">
      <div className="logo">
        <img src="/images/f_logo.png" alt="recImg"/>
      </div>
      <h2>지역을 선택하시거나 검색해주세요.</h2>
      <div>
        <a href="#">
          <img src="/images/upArrow.png" className="arrow" alt="RecImage"/>
        </a>
      </div>
      <div className="inputAp">
        <input type="text" onKeyPress={onEnterKey} onChange={saveBuffer}  placeholder="지역을 검색해주세요."></input>
        <div className="btn">
          <button onClick={handleSearch}><img src="/images/searchBtn.png"/></button>
        </div>
      </div>
      <div>
        {
        onSearchBtn 
        ? <div>
          <div className="boxContainer1">

        <button onClick={buttonSearch}><div className = "box c1">서울</div></button>
        <button onClick={buttonSearch}><div className = "box c2">경기도</div></button>
        <button onClick={buttonSearch}><div className = "box c1">강원도</div></button>
        <button onClick={buttonSearch}><div className = "box c2">충청북도</div></button>
        <button onClick={buttonSearch}><div className = "box c1">충청남도</div></button>
        </div>
        <br/>
        <div className="boxContainer2">
        <button onClick={buttonSearch}><div className = "box c3">전라북도</div></button>
        <button onClick={buttonSearch}><div className = "box c4">전라남도</div></button>
        <button onClick={buttonSearch}><div className = "box c3">경상북도</div></button>
        <button onClick={buttonSearch}><div className = "box c4">경상남도</div></button>
        <button onClick={buttonSearch}><div className = "box c3">제주도</div></button>
        </div>
        </div>
        :null
        }
        
        
      </div>
      {onSearch && foods.map((food, index) => {
        if (foods.length === index + 1) {
          return <div ref={lastfoodElementRef} key={food.food_id}>
            <table>
              <tr>
                <td>
                   <img src={"/foods/"+food.food_name + ".jpg"} alt="imgslider" className="recImg"/>

                </td>
                <td className="recText">
                  
                  <h1>{food.food_name}</h1><br/>
                  {food.food_content}<br/><br/>
                  <img src = "/images/like.png" className="like" alt="RecImage"/> <div className="likeText">{food.food_like}</div>
                  <div className="place">place</div> {food.food_place}<br/>
                  <img src = "/images/calendar.png" className="calendar" alt="RecImage"/><div className="calendarText"> {food.food_date}</div>
                </td>
              </tr>
            </table>
            </div>
        } else {
          return <div key={food.food_id}>
            <table>
              <tr>
                <td>
                  <img src={"/foods/"+food.food_name + ".jpg"} alt="imgslider" className="recImg"/>
                </td>
                <td className="recText">
                  <h1>{food.food_name}</h1><br/>
                  {food.food_content}<br/><br/>
                  <img src = "/images/like.png" className="like" alt="RecImage"/> <div className="likeText">{food.food_like}</div>
                  <div className="place">place</div> {food.food_place}<br/>
                  <img src = "/images/calendar.png" className="calendar" alt="RecImage"/> <div className="calendarText">{food.food_date}</div>
                </td>
            </tr>
            </table>
          </div>
        }
      })}
      <br/><br/>
      <div className="loading">{loading && <img src="/images/loading.png" alt="recImage"/>}</div>
      <div>{error && 'Error'}</div>
    </div>
  )
}