
// tweets route
// const baseUrl = 'https://api.twitter.com/2/users/by/username/'
// const baseURL = 'https://api.twitter.com/2/users/by/username/'
const userURL = 'https://api.twitter.com/2/users/by?usernames'
const userTimelineURL = 'https://api.twitter.com/2/users/'

// const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAPfsEAEAAAAAcmpxXjg9u89D1s0skwAPSE1clQM%3D1hqL1fBT5cDXsaKGzzY9wqY2WKgvdG9JGoHWcBAVq0VdHdNYB7'
const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAALbZaAEAAAAAhIBBjaU4eUNvyu%2FWdLIeSB681cw%3Dl3CTTwhbyfFblJkU0GxPHYQZ6W3pvHT8NruoBy6jfHUI2iiIrE'


export default async function handler(req, res) {
    // perform user lookup
    console.log('endpoint hit')
    if (req.method === 'GET') {

       
        
        try{
            const username = req.query.username
            
 
           
            const userResponse  = await fetch(`https://api.twitter.com/2/users/by/username/${username}`, 
                {
                    method:'GET',
                    headers:{
                        'Authorization': 'Bearer ' + BEARER_TOKEN
                    }
                }
            )
            const userData = await userResponse.json()
           
           console.log(userData)
            
            console.log('user look up successful')
            
        // const tweetsResponse = await fetch(`https://api.twitter.com/2/users/${434883720}/tweets?max_results=10` ,
        const tweetsResponse = await fetch(`https://api.twitter.com/2/users/${434883720}/tweets?max_results=30&media.fields=public_metrics&place.fields=country`,    
        // const tweetsResponse = await fetch(`https://api.twitter.com/2/tweets/search/all?max_results=20&user.fields=${username} ` ,
                {
                    method:'GET',
                    headers:{
                        'Authorization': 'Bearer ' + BEARER_TOKEN
                    }
                }
            )
            const tweetsData = await tweetsResponse.json()
            console.log(tweetsData)
           console.log(tweetsData)
         res.status(200).json("userData")
            
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
