import React from 'react'
import Experience from '../components/Experience'
import {Flex, Box } from '@chakra-ui/react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'



const experience = () => {
    return (
        
        <Box bgImage="url(./darkmarble.jpg)" bgSize="cover" minH="120%" minW="1024px" w="100%" h="auto"  backgroundRepeat="repeat" position="fixed" overflowX="scroll" top="0" right="0">
        <Flex ml="20"justify='center' align='center' h='93vh'>
        
        <Experience />
        </Flex>
        </Box>
        
    )
}

export default experience