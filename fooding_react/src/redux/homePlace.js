import { useEffect, useState } from 'react'
import axios from 'axios'


export default function HomePlace(query) {
    const [foodsAll, setfoodsAll] = useState([])
    
    const [foodsSeoul, setfoodsSeoul] = useState([])
    const [foodsQuery, setfoodsQuery] = useState([])

    useEffect(() => {
        setfoodsAll([])
        setfoodsSeoul([])
        setfoodsQuery([])
      }, [query])
    
      useEffect(() => {
        let cancel
        axios({
          method: 'GET',
          url: 'http://localhost:8080/api/food/allPlace',
          headers:{
            'Content-Type': 'application/json'
          },
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res =>{
        setfoodsAll(prevfoods => {
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
          url: 'http://localhost:8080/api/food/seoulPlace',
          headers:{
            'Content-Type': 'application/json'
          },
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res =>{
        setfoodsSeoul(prevfoods => {
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
          url: 'http://localhost:8080/api/food/queryPlace',
          params: { q: query},
          headers:{
            'Content-Type': 'application/json'
          },
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res =>{
        setfoodsQuery(prevfoods => {
            return [...new Set([...prevfoods, ...res.data.result.map(f => f)])]
          })
        }).catch(e => {
            if (axios.isCancel(e)) return 
        })
        return () => cancel()
      }, [query])

    return {foodsAll, foodsSeoul, foodsQuery}
}

