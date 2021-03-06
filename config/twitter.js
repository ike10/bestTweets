// process environment variables and expose for use
export const configTwitter = {
        consumer_key: process.env.CONSUMER_KEY,
    	consumer_secret: process.env.CONSUMER_SECRET,
		access_token_key: process.env.ACCESS_TOKEN_KEY,
		access_token_secret: process.env.ACCESS_TOKEN_SECRET,
		bearer: process.env.NEW_BEARER_TOKEN
}