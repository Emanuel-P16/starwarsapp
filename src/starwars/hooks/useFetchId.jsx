import { useEffect, useState } from "react"
export const useFetchId = (url,id) => {        
    // return Number(id)+1
    const [state,setState] = useState({data: null, loading: true, error: null})
    useEffect(()=>{
        fetch(`${url}/${Number(id)}`)
        .then(resp=> resp.json())
        .then(data => {
            setState(
                {
                    loading:false,
                    error:null,
                    data: data
                }
            )
        })
    },[url])
    return state
}