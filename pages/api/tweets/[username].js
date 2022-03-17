

const BEARER_TOKEN = process.env.NEW_BEARER_TOKEN


export default async function handler(req, res) {
    // perform user lookup
    console.log('endpoint hit')
    if (req.method === 'GET') {

        try{
            const username = req.query.username
            
            
        //   const tweetsResponse = await fetch(`https://api.twitter.com/1.1/search/tweets.json?q=(from%3A${username}&result_type=popular)` , 
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
            res.status(400).json({
                message:'error',
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
