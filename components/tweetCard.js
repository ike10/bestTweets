
import { Image } from '@chakra-ui/image'

import {GoLocation} from 'react-icons/go'
import {AiOutlineRetweet} from 'react-icons/ai'
import {GrFavorite} from 'react-icons/gr'
import { Box, Flex, Spacer, Text } from '@chakra-ui/layout'


export default function TweetCard({tweet_text, favourite_count, tweet_location, author_name, author_username, profile_image_url, tweet_likes_count, tweet_retweets_count }) {
  return (
     <Flex direction='column' borderRadius='2xl' border='2px' borderWidth='thin' borderColor='gray.200' h='full' p='2' mt='5'
     width={[
                "90vw", // base
                "80vw", // 480px upwards
                "80vw", // 768px upwards
                "40vw", // 992px upwards
                ]}
      >
                            <Flex direction='row' w='full' h='16' mt='2'>
                                <Flex h='full' w='auto' pl='10px'>
                                
                                    <Image
                                    
                                        // boxSize='50px'
                                        boxSize={[
                                              "50px", // base
                                              "40px", // 480px upwards
                                              "40px", // 768px upwards
                                              "50px", // 992px upwards
                                        ]}
                                        objectFit='cover'
                                        src={profile_image_url}
                                        alt='image'
                                        borderRadius='full'
                                    />
                                </Flex>
                                <Flex ml='10px' textAlign='left' direction='column' h='full' w='80%' p='1'>
                                    <Text color='black' fontSize='lg' >{author_name}</Text>
                                    <Text color='gray.400' fontSize='md'>@{author_username}</Text>
                                </Flex>
                            </Flex>
                            <Flex h='24' pl='2' direction='row' textAlign='left' borderBottomWidth='thin' borderColor='gray.200'>
                                <Text color='black' 
                                w='100%'
                                
                                fontSize={[
                                    "sm",
                                    "md",
                                    "md",
                                    'md',
                                ]}
                                >{tweet_text}</Text>
                            </Flex>
                            <Flex alignItems='center' direction='row' h='10' pt='2' pl='2'>
                                <GoLocation/>
                                <Text fontSize={[
                                    "md",
                                    "md",
                                    "md",
                                    'md',
                                ]}
                                w='75%'
                                textAlign='left'
                                ml='2'
                                >{tweet_location}</Text>
                                
                                <AiOutlineRetweet/>
                                <Text fontSize={[
                                    "md",
                                    "md",
                                    "md",
                                    'md',
                                ]}
                                ml='2'
                                mr='2'
                                >{tweet_retweets_count}</Text>

                                <GrFavorite/>
                                <Text fontSize={[
                                    "md",
                                    "md",
                                    "md",
                                    'md',
                                ]}
                                ml='2'
                                
                                >{tweet_likes_count}</Text>
                            </Flex>
                        </Flex>
               
  )
}
