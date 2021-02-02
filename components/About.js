import React from 'react'
import {Box, Grid, GridItem, Image, useColorMode} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const AboutMe = () => {
  const bgColor = { light: 'gray.300', dark: 'gray.600', opacity: '0.5' };
  const { colorMode, toggleColorMode } = useColorMode();
    
    return (
        <motion.div 
        drag
        dragConstraints={{ left: 68, right: 80, top:20, bottom:20 }}
        dragElastic={0.5}
        initial="hidden" 
        animate="visible" 
        variants={{
          hidden: {
            x:-250,
            scale: .8,
            opacity:0
          },
          visible: {
            x:0,
            scale:1,
            opacity:1,
            transition: {
              delay: .5
            }
          }
        }}
        >
            <Grid
            mt={12}
            maxH="lg"
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
            >
            <GridItem colStart={1} rowStart={1} rowSpan={2}>
              <Box maxW="lg" maxH="md" boxShadow="lg" bg="gray.200" rounded="20px" borderWidth="1px" borderRadius="lg" overflow="hidden">
                {/* <Image src={property.imageUrl} alt={property.imageAlt} /> */}
          
                <Box 
                p="6"
                bgColor={bgColor[colorMode]}>
                  <Box d="flex" alignItems="baseline">
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="s"
                      textTransform="uppercase"
                      ml="2"
                      mt="1"
                    >
                      About Me
                    </Box>
                  </Box>
          
                  <Box
                    fontSize="xl"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    lineHeight="tight"
                    isTruncated
                  >
                    Roni Khudanyan
                  </Box>
          
                  <Box
                as="p"
                fontFamily="body"
                fontSize="md"
                fontWeight="light"
                mt="2"
                wrap
                >
                 A Software developer with the passion for tech instilled into his DNA. I come from a long line of devs which have taught me tech from the moment I could speak, this in turn gave me a passion that cannot be taught. My approach blends the passion I was brought up with and the 6 years of experience in the field. My success comes from my ability to step back, take a look at the bigger picture and apply skills and experience. I am able to pick apart an issue to apply logic and critical thinking, which then delivers a product that is beyond expectations. These traits combined directly contribute to the pride I hold with my work ethic. I can get the job done in ways that will exceed expectations and set presidents for the future.

                </Box>
                </Box>
              </Box>
              </GridItem>
              <GridItem colStart={2} rowStart={1}>
              <Box maxW="sm" boxShadow="lg" bg="gray.200" rounded="20px" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Image src="./losangeles.jpg"  objectFit="cover" />
                  </Box>
              </GridItem>
              <GridItem colStart={2} rowStart={2}>
              <Box maxW="md" boxShadow="lg" bg="gray.200" rounded="20px" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Image src="./root.jpg" objectFit="cover" />
                  </Box>
              </GridItem>
              <GridItem colStart={1} rowStart={2} rowEnd={4} alignSelf="center"  >
              <Box maxW="lg" boxShadow="lg" bg="gray.200" rounded="20px" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Image src="./lang.jpg" objectFit="cover" />
                  </Box>
              </GridItem>
              <GridItem colStart={1} rowStart={3}>
                <Box maxW="lg" h="sm" bg="transparent" borderRadius="lg" overflow="hidden">
                    
                </Box>
              </GridItem>
              </Grid>
              </motion.div>
              
        )
    }
    


export default AboutMe