import { useState } from "react";

// reusable logic for processing api request
const useTwitterApi = (url) =>{

    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [tweets, setTweets] = useState([])

    const fetchTwitterApi = async() =>{
         try{
           
            setIsLoading(true)
           
            const response = await fetch(url)
            
            // convert payload to json('done already but just to be sure')
            const data = await response.json()
            const result = data.data

            // trim data from 100 to 20 tweets
            const trimmedResult = result.slice(0, 20)

            // setTweets([ ...result])
            setMessage(result.message)
            setTweets([ ...trimmedResult ])
            // console.log(trimmedResult)
            setIsLoading(false)
           
        }catch(error){
            // catch error and send response
            setIsLoading(false)
            setMessage(error.message)
        }
    }

   

    return {isLoading, tweets, fetchTwitterApi, message, setMessage}

}
// export reusable hook
export default useTwitterApi