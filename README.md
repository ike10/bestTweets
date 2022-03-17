## Best Tweets web app
This is a simple web app that displays the best tweets by a twitter user.
Tools and Frameworks used:
* NextJS
* Functional Components
* ChakraUI
* React-icons
* Twitter  API

## Getting Started

First, clone this repo:
```bash
git clone <repo>
```
Then, install all required dependencies:
```bash
npm install
```

lastly, run the development server by:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## Getting a User's tweets
To get a user's tweets. send a `GET` request to [api/tweets/:username] endpoint. where 'username' is the handle of the twitter user you are searching for. This will communicate with teh twitter api and provide with the information we need. 

The response body will look like this.
check [https://developer.twitter.com/en/docs/twitter-api/v1/tweets/search/api-reference/get-search-tweets] to have an idea of how the response body will look like.


## Deployment on Vercel
to deploy on vercel is easy , simply follow these steps

```bash
# step 1 (to install vercel cli)
npm i -g vercel
# step 2 (to deploy)
vercel
```

For further information on deployment. check.[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Limitation (Areas for modification/improvement)
* Number of tweets retrieved from the user is limited on the standard plan
* Time range which tweets can be searched for is limited on the standard plan
* More work to be done to handle error from API