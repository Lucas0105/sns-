import { useEffect, useState } from 'react'
import axios from 'axios'


export default function TestSearch(query, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [foods, setfoods] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setfoods([])
      }, [query])
    
      useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
          method: 'GET',
          url: 'http://localhost:8080/api/food/find',
          params: { q: query, page: pageNumber },
          headers:{
            'Content-Type': 'application/json'
          },
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res =>{
          setfoods(prevfoods => {
            return [...new Set([...prevfoods, ...res.data.result.map(f => f)])]
          })
          setHasMore(res.data.result.length > 0)
          setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return 
            setError(true)
        })
        return () => cancel()
      }, [query, pageNumber])
    

    return { loading, error, foods, hasMore }
}

