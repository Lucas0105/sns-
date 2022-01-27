import { useEffect, useState } from 'react'
import axios from 'axios'


export default function ResultData(query) {
    const [foodsLocation, setfoodsLocation] = useState([])
    const [foodsTime, setfoodsTime] = useState([])
    const [foodsSenti, setfoodsSenti] = useState([])


    useEffect(() => {
        setfoodsLocation([])
        setfoodsTime([])
        setfoodsSenti([])
      }, [query])
    
      useEffect(() => {
        let cancel
        axios({
          method: 'GET',
          url: 'http://localhost:8080/api/result/location',
          params: { q: query},
          headers:{
            'Content-Type': 'application/json'
          },
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res =>{
        setfoodsLocation(prevfoods => {
            return [...new Set([...prevfoods, ...res.data.result.map(f => f)])]
          })
        }).catch(e => {
            if (axios.isCancel(e)) return 
        })
        return () => cancel()
      }, [query])

      useEffect(() => {
        let cancel
        axios({
          method: 'GET',
          url: 'http://localhost:8080/api/result/time',
          params: { q: query},
          headers:{
            'Content-Type': 'application/json'
          },
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res =>{
        setfoodsTime(prevfoods => {
            return [...new Set([...prevfoods, ...res.data.result.map(f => f)])]
          })
        }).catch(e => {
            if (axios.isCancel(e)) return 
        })
        return () => cancel()
      }, [query])

      useEffect(() => {
        let cancel
        axios({
          method: 'GET',
          url: 'http://localhost:8080/api/result/sentiment',
          params: { q: query},
          headers:{
            'Content-Type': 'application/json'
          },
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res =>{
        setfoodsSenti(prevfoods => {
            return [...new Set([...prevfoods, ...res.data.result.map(f => f)])]
          })
        }).catch(e => {
            if (axios.isCancel(e)) return 
        })
        return () => cancel()
      }, [query])

    return {foodsLocation, foodsTime, foodsSenti}
    // return {foodsLocation, foodsTime, foodsSenti}
}

