import { useState } from "react";

const useTwitterApi = (url) =>{
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [tweets, setTweets] = useState([])

    const fetchTwitterApi = async() =>{
         try{
           
            setIsLoading(true)
           
            const response = await fetch(url)
           
            const data = await response.json()
            const result = data.data

            // trim data
            const trimmedResult = result.slice(0, 20)

            // setTweets([ ...result])
            setMessage(result.message)
            setTweets([ ...trimmedResult ])
            // console.log(trimmedResult)
            setIsLoading(false)
           
        }catch(error){
            setIsLoading(false)
            setMessage(error.message)
        }
    }

    // useEffect(()=>{
    //     fetchTwitterApi()
    // }, [])

    return {isLoading, tweets, fetchTwitterApi, message}

}

export default useTwitterApi