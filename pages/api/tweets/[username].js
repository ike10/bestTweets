
// tweets route
// const baseUrl = 'https://api.twitter.com/2/users/by/username/'
// const baseURL = 'https://api.twitter.com/2/users/by/username/'
const userURL = 'https://api.twitter.com/2/users/by?usernames'
const userTimelineURL = 'https://api.twitter.com/2/users/'

const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAPfsEAEAAAAAcmpxXjg9u89D1s0skwAPSE1clQM%3D1hqL1fBT5cDXsaKGzzY9wqY2WKgvdG9JGoHWcBAVq0VdHdNYB7'
// const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAALbZaAEAAAAAhIBBjaU4eUNvyu%2FWdLIeSB681cw%3Dl3CTTwhbyfFblJkU0GxPHYQZ6W3pvHT8NruoBy6jfHUI2iiIrE'


export default async function handler(req, res) {
    // perform user lookup
    console.log('endpoint hit')
    if (req.method === 'GET') {

        try{
            const username = req.query.username
            
            
          const tweetsResponse = await fetch(`https://api.twitter.com/1.1/search/tweets.json?q=(from%3A${username}&result_type=popular)` , 
       
                {
                    method:'GET',
                    headers:{
                        'Authorization': 'Bearer ' + BEARER_TOKEN
                    }
                }
            )
            const tweetsData = await tweetsResponse.json()
            
            console.log(tweetsData.statuses)
       
         res.status(200).json({
             message:'Successfull',
             data: tweetsData
         })
            
        }catch(error){
            console.log(error)
        }

    // Process a POST request
   
 
  } else {
    // Handle any other HTTP method
    console.log('invalid http method')
   
  }
//   res.status(200).json({ name: 'John Doe' })
}
