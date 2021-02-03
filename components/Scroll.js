import React from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import styles from '../styles/Home.module.css'
import { Box, useColorMode } from '@chakra-ui/react';

export default function Scroll() {
    const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  const { colorMode, toggleColorMode } = useColorMode();
	const bgColor = {
	  light: "rgba(204, 214, 224, 0.63)",
	  dark: "rgba(74, 85, 104, 0.7)",
    };
    const itemColor = {
        light: "teal.500",
        dark: "teal.300",
      };
  

    return (
        <Box 
        style={{
          width: "150px",
          height: "150px",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%) translateY(-50%)"
        }}>
          <motion.div
            
            style={{
              width:" 100%",
              height: "100%",
              overflow: "hidden",
              background: bgColor[colorMode],
              borderRadius: "30px",
              scale
            }}
          >
            <motion.div
              
              style={{
                width: "inherit",
                height: "inherit",
                background: itemColor[colorMode],
                transformOrigin: "50% 100%",
                scaleY: scrollYProgress
              }}
            />
          </motion.div>
        </Box>











    //     <Box w="150px" h="150px" position="fixed" top="10%" right="10%" transform={{translateX:"-20%", translateY:"-20%"}}>
    //         <Box w="100px" h="100px" overflow="hidden" bg={bgColor[colorMode]} borderRadius="30px">
    //   <motion.div
    //     style={{
    //       scale
    //     }}
    //   >
    //       <Box
    //        w= "inherit"
    //        h="inherit"
    //        bg={itemColor[colorMode]}
    //        transformOrigin= "50% 100%"
    //       >
    //     <motion.div
    //       style={{
    //         scaleY: scrollYProgress
    //       }}
    //     />
    //     </Box>
    //   </motion.div>
    // </Box>
    // </Box>
    )
}

