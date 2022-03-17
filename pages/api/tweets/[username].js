import { configTwitter } from "../../../config/twitter"

// receive bearer token from twitter config file
const BEARER_TOKEN = configTwitter.bearer

export default async function handler(req, res) {
    // perform tweet lookup
    console.log(`/api/tweets/${req.query.username} endpoint hit`)
    if (req.method === 'GET') {

        try{
            // query url for the username parameter
            const username = req.query.username
            
            // fetch api
             const tweetsResponse = await fetch(`https://api.twitter.com/1.1/search/tweets.json?q=(from%3A${username}&result_type=most_recent&count=100)` , 
                {
                    method:'GET',
                    headers:{
                        'Authorization': 'Bearer ' + BEARER_TOKEN
                    }
                }
            )

            // convert received data to json format
            const tweetsData = await tweetsResponse.json()

            // sort tweets in order of number of engagements ('likes + retweets')
            const sortedResult = tweetsData.statuses.sort(function(a,b){
                return (a.retweet_count + a.favorite_count) - (b.retweet_count + b.favorite_count)
            })
            
            // send success message along with payload
         res.status(200).json({
             message:'Successfull',
            //  data: tweetsData.statuses
            data: sortedResult.reverse()
         })
            
        }catch(error){
            console.log(error)
            res.status(400).json({
                message:'error retrieving data',
                data: error,
            
            })
        }

    // Process a POST request
   
 
  } else {
    // Handle any other HTTP method
    console.log('invalid http method')
   
  }
//   res.status(200).json({ name: 'John Doe' })
}
