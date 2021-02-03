import React from 'react'
import {Box, Flex} from '@chakra-ui/react'
import AboutMe from '../components/About'
import { Parallax } from 'react-scroll-parallax'

const About = () => {
    return (
        
        <Box bgImage="url(./darkmarble.jpg)" bgSize="cover" minH="100%" minW="1024px" w="100%" h="auto" position="fixed" top="0" right="0">
        <Flex ml="20"justify='center' align='center' >
        
        <AboutMe />
        </Flex>
        </Box>

        
    )
}

export default About