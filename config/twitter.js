// export const configTwitter = {
// 		consumer_key: 'QPkdzXEVOz6TBCMSTPIVZ9zXB',
// 		consumer_secret: 'mEL0NbGO7816wBd4l7maGE7eoV1U2XiGTo63ehQPWBwAIRQWO4',
// 		access_token_key: '1385549809386463234-anMrU7OnpEOcAAyb3p1SqJfuhYPg0t',
// 		access_token_secret: 'XLqYwxbbM59uREN7jU1xMugkke0jUKhS9liH6pHtzzrgy',
// 		bearer: "AAAAAAAAAAAAAAAAAAAAALbZaAEAAAAAhIBBjaU4eUNvyu%2FWdLIeSB681cw%3Dl3CTTwhbyfFblJkU0GxPHYQZ6W3pvHT8NruoBy6jfHUI2iiIrE",
// }
import { TwitterClient } from 'twitter-api-client';

export const twitterClient = new TwitterClient({
  apiKey: 'QPkdzXEVOz6TBCMSTPIVZ9zXB',
  apiSecret: 'mEL0NbGO7816wBd4l7maGE7eoV1U2XiGTo63ehQPWBwAIRQWO4',
  accessToken: '1385549809386463234-anMrU7OnpEOcAAyb3p1SqJfuhYPg0t',
  accessTokenSecret: 'AAAAAAAAAAAAAAAAAAAAALbZaAEAAAAAhIBBjaU4eUNvyu%2FWdLIeSB681cw%3Dl3CTTwhbyfFblJkU0GxPHYQZ6W3pvHT8NruoBy6jfHUI2iiIrE',
  ttl: 120, // seconds. Defaults to 360
  disableCache: true, // Disables the caching behavior. Defaults to 'false'
  maxByteSize: 32000000, // Maximum (approximated) memory size for cache store. Defaults to 16000000.
});