import { useEffect, useState } from 'react'
import axios from 'axios'


export default function DetaileSearch(query) {
    const [contents, setContents] = useState([])

    useEffect(() => {
        let cancel
        axios({
          method: 'GET',
          url: 'http://localhost:8080/api/board/detaile',
          params : {q:query},
          headers:{
            'Content-Type': 'application/json'
          },
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res =>{
            setContents(prevfoods => {
            return [...new Set([...prevfoods, ...res.data.result.map(f => f)])]
          })
        }).catch(e => {
            if (axios.isCancel(e)) return 
        })
        return () => cancel()
      }, [query])
          
    return {contents}
}

