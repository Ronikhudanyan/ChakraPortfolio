import React from 'react'
import Projects from '../components/Projects'
import { motion } from "framer-motion";
import { Box } from '@chakra-ui/react';



export default function projects() {
    return (
        <Box bgImage="url(./whitemarb.jpg)" bgSize="cover" minH="100%" minW="1024px" w="100%" h="auto" position="fixed" overflowX="scroll"  top="0" right="0">
        <Projects /> 
        </Box>
    )
}
