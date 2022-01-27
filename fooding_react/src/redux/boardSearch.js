import { useEffect, useState } from 'react'
import axios from 'axios'


export default function BoardSearch(query, pageNumber) {
    const [contents, setContents] = useState([])
    const [contentNumber, setContentNumber] = useState(1)

    useEffect(() => {
        let cancel
        axios({
          method: 'GET',
          url: 'http://localhost:8080/api/board/findFirst',
          params : {q:query},
          headers:{
            'Content-Type': 'application/json'
          },
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res =>{
            setContentNumber(res.data.result[0].contentNumber)
        }).catch(e => {
            if (axios.isCancel(e)) return 
        })
        return () => cancel()
      }, [query])
    
      useEffect(() => {
        let cancel
        axios({
          method: 'GET',
          url: 'http://localhost:8080/api/board/find',
          params : {q:query, p:pageNumber},
          headers:{
            'Content-Type': 'application/json'
          },
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res =>{
        setContentNumber(res.data.result.contentNumber)
        setContents(
            [...res.data.result.map(f => f)]
          )
        }).catch(e => {
            if (axios.isCancel(e)) return 
        })
        return () => cancel()
      }, [query, pageNumber])
      
    return {contents, contentNumber}
}

