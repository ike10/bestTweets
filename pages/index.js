import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { FaSun } from 'react-icons/fa';
// import {IoSunnySharp} from 'react-icons/io'
import { Box, Flex, Spacer, Text } from '@chakra-ui/layout'
import Head from 'next/head'
import { useState } from 'react'
import TweetCard from '../components/tweetCard'
// import styles from '../styles/Home.module.css'

import { TwitterClient } from 'twitter-api-client';




export default function Home() {
  
    const [loading, isLoading] = useState(false)
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState(null)
    const [tweets, setTweets] = useState([])
    const fetchTweets = async()=>{
        try{
            console.log('button fired')
            //  const data = await twitterClient.accountsAndUsers.usersSearch({ q: username });
            const response = await fetch(`/api/tweets/${username}`)
            // const response = await fetch(`https://api.twitter.com/2/users/by?usernames=${username}`, fetchParameters)
            const data = await response.json()
             console.log(data)
            // const response = await fetch(`/api/tweets/${username}`)
            // const data = await response.json()
            // console.log(data)
            // setTweets(data)
            // setMessage('Succes!')
        }catch(error){
            setMessage(error)
        }
    }


  return (
    <Flex direction="column" w="100vw" h='auto'>
      <Head>
        <title>Best Tweets</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Flex direction='column' w="100%" h='auto'>
        {/* header */}
        <Flex  w='full' h='20' mb='20' pr={[
            '2',
            '5',
            '8',
            '10'
        ]}>
             <Spacer />
                <Box  p='4' h='10' w='10' alignItems='center' justifyContent='center'>
                      <FaSun size={20} />
                </Box>
              
               {/* <IoSunnySharp/> */}
        </Flex>
        {/* end of header */}
        {/* main section */}
        <Flex direction='column' justify='center' align='center' textAlign='center' w='full' h='full'>
            <Text fontSize='2xl' fontWeight='bold' m='2'>My Best Tweets 🚀</Text>
            <Text fontSize='xl' m='2' color='gray.400'>Find the best tweets posted by any user.</Text>
            <Flex direction='column'  m='4' justifyContent='center' alignItems='center'
            width={[
                "100vw", // base
                "80vw", // 480px upwards
                "80vw", // 768px upwards
                "50vw", // 992px upwards
                ]}
            >
            
                <Flex direction='row' m='2' h='12' 
                width={[
                "90vw", // base
                "80vw", // 480px upwards
                "80vw", // 768px upwards
                "40vw", // 992px upwards
                ]}
                >
               
                <Input 
                    value={username}
                    onChange={e=>{
                        e.preventDefault
                        setUsername(e.target.value)
                    }}
                    placeholder='Enter name of handle' m='1' h='full' w='80%'/>
                <Button
                 onClick={()=>{
                     fetchTweets()
                 }}
                 colorScheme='green' m='1' h='full' w='20%'>Submit</Button>
                </Flex>
                {/* tweets container */}
                <Flex direction='column' justifyContent='center' m='5' w='full'  alignItems='center'>
                   {/* tweet card */}
                       <TweetCard/>
                       <TweetCard/>
                       <TweetCard/>
                       <TweetCard/>
                   {/* end of tweet card */}
                </Flex>
                {/* end of tweets container */}
                
            </Flex>
        </Flex>
        {/* end of main section */}
    </Flex>
    </Flex>
  )
}
