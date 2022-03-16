import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { Box, Flex, Spacer, Text } from '@chakra-ui/layout'
// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function TweetCard() {
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
                                        src='https://bit.ly/dan-abramov'
                                        alt='Dan Abramov'
                                        borderRadius='full'
                                    />
                                </Flex>
                                <Flex ml='10px' textAlign='left' direction='column' h='full' w='80%' p='1'>
                                    <Text color='black' fontSize='lg' >Vulkan</Text>
                                    <Text color='gray.400' fontSize='md'>@oche_ike</Text>
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
                                >CEO of @microacquire. Former CEO of Bizness Apps & Altcoin (both acquired). EIR at @500startups. Occasionally write for @entrepreneur and @forbes.</Text>
                            </Flex>
                            <Flex direction='row' h='10' pt='2' pl='2'>
                                <Text fontSize={[
                                    "md",
                                    "md",
                                    "md",
                                    'md',
                                ]}
                                
                                >Lagos, Abuja</Text>
                            </Flex>
                        </Flex>
               
  )
}
