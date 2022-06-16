import { useEffect, useState } from "react"
export const useFetchId = (url,id) => {        
    // return Number(id)+1
    const [state,setState] = useState({data: null, loading: true, error: null})
    console.log(`${url}/${Number(id)+1}`)
    useEffect(()=>{
        fetch(`${url}/${Number(id)+1}`)
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