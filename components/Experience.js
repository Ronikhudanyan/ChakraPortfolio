import React, {useState} from 'react'
import {Grid, GridItem, Box, Badge, Image, Center, Stack, useColorMode} from '@chakra-ui/react'
import { motion } from "framer-motion";




export default function Experience() {
    
  const { colorMode, toggleColorMode } = useColorMode();
	const bgColor = {
	  light: "rgba(204, 214, 224, 0.63)",
	  dark: "rgba(74, 85, 104, 0.80)",
	};
	const textColor = { light: "black", dark: "gray.100" };
    return (
        
    
      <motion.div 
      drag
      dragConstraints={{ left: 68, right: 80, top:20, bottom:20 }}
      dragElastic={0.5}
      >
          <Grid
          
          maxH="lg"
          templateRows="repeat(5, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
          
          >
          <GridItem colStart={1} rowStart={1} rowSpan={1}>
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity:0,
              x:-250,
              delayChildren: 0.3,
            },
            visible: {
              scale:1,
              opacity:1,
              x: -1,
              transition: {
                delay: .4
              }
            }

        }}>
            <Box maxW="lg" maxH="md" boxShadow="lg" bg="gray.200" rounded="20px" borderWidth="1px" borderRadius="lg" overflow="hidden" color={textColor[colorMode]} bgColor={bgColor[colorMode]}>
              <Center>
              <Image mt="2" boxSize="36" borderRadius="full"  src="./1.jpg" />
              </Center>
              <Box p="6">
                <Center>
                <Box d="flex" alignItems="baseline" mb="2">
                  
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    Current Position
                  </Badge>
                  
                </Box>
                </Center>
        
                <Box
                  fontSize="xl"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  lineHeight="tight"
                  isTruncated
                >
                  Manager of Global Tech
                </Box>
                <Box
                    color={textColor[colorMode]}
                    fontWeight="light"
                    // letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                    mt="1"
                  >
                    FleetUp - San Jose, CA / Glendale, CA
                  </Box>
                  <Box
                    color={textColor[colorMode]}
                    fontWeight="light"
                    // letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                    mt="1"
                  >
                    Oct 2019 - Present
                  </Box>
                <Box
              as="p"
              fontFamily="body"
              fontSize="sm"
              fontWeight="light"
              mt="2"
              wrap
              >
                <ul>
                  <li>Oversee two departments in organizing our efforts to a common goal, creating a user friendly working app/software that can freely communicate with hardware in order to deliver a happy customer experience.</li>
                  <li>Project management, Debugging, JSON editor, Case management</li>
                  <li>Debugging general issues from customer complaints.</li>
                  <li>Engineer solutions to customer needs and wants</li>
                </ul>
              </Box>
              </Box>
            </Box>
            </motion.div>
            </GridItem>

            <GridItem colStart={2} rowStart={1}>
            <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity:0,
              x:-250,
              delayChildren: 0.3,
            },
            visible: {
              scale:1,
              opacity:1,
              x: -1,
              transition: {
                delay: .5
              }
            }

        }}>
            <Box maxW="lg" maxH="md" boxShadow="lg" bg="gray.200" rounded="20px" borderWidth="1px" borderRadius="lg" overflow="hidden" color={textColor[colorMode]} bgColor={bgColor[colorMode]}>
              <Center>
              <Image mt="2" boxSize="36" borderRadius="full"  src="./0.jpg" />
              </Center>
              <Box p="6">
                <Center>
                <Box d="flex" alignItems="baseline" mb="2" >
                  <Stack direction="row">
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    Full Stack
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    JS
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    React.Js
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    Postman
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    SQL
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    Node.JS
                  </Badge>
                  </Stack>
                </Box>
                </Center>
        
                <Box
                  fontSize="xl"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  lineHeight="tight"
                  isTruncated
                >
                  Technical Researcher I
                </Box>
                <Box
                    color={textColor[colorMode]}
                    fontWeight="light"
                    // letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                    mt="1"
                  >
                    Netflix - Salt Lake City, Utah
                  </Box>
                  <Box
                    color={textColor[colorMode]}
                    fontWeight="light"
                    // letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                    mt="1"
                  >
                    Sept  2017 - October 2019
                  </Box>
                <Box
              as="p"
              fontFamily="body"
              fontSize="sm"
              fontWeight="light"
              mt="2"
              wrap
              >
                <ul>
                  <li>Oversaw a team of 15, which investigated customer issues and bugs to then send in for repair at HQ.</li>
                  <li>Project management, Debugging, JSON editor, Case management</li>
                  <li>Research and Debugging of general issues from customer complaints.</li>
                  <li>Troubleshooting on front and back ends of applications across multiple devices and user interfaces, Mobile, console, PC, Mac, Tablet</li>
                </ul>
              </Box>
              </Box>
            </Box>
            </motion.div>
            </GridItem>


            <GridItem colStart={2} rowStart={2}>
            <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity:0,
              x:-250,
              delayChildren: 0.3,
            },
            visible: {
              scale:1,
              opacity:1,
              x: -1,
              transition: {
                delay: .6
              }
            }

        }}>
               <Box maxW="lg" maxH="md" boxShadow="lg" bg="gray.200" rounded="20px" borderWidth="1px" borderRadius="lg" overflow="hidden" color={textColor[colorMode]} bgColor={bgColor[colorMode]}>
              <Center>
              <Image mt="2" boxSize="36" borderRadius="full"  src="./2.jpg" />
              </Center>
              <Box p="6">
                <Center>
                <Box d="flex" alignItems="baseline" mb="2" >
                  <Stack direction="row">
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    Terminal
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    Network Connection
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    IT
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    Postman
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    Data
                  </Badge>
                  </Stack>
                </Box>
                </Center>
        
                <Box
                  fontSize="xl"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  lineHeight="tight"
                  isTruncated
                >
                  ITC
                </Box>
                <Box
                    color={textColor[colorMode]}
                    fontWeight="light"
                    // letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                    mt="1"
                  >
                    La County, Department of Public Works - Los Angeles, CA
                  </Box>
                  <Box
                    color={textColor[colorMode]}
                    fontWeight="light"
                    // letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                    mt="1"
                  >
                    Oct  2018 - October 2019
                  </Box>
                <Box
              as="p"
              fontFamily="body"
              fontSize="sm"
              fontWeight="light"
              mt="2"
              wrap
              >
                <ul>
                  <li>Manages incomming constituent calls and requests</li>
                  <li>Internal IT and Coputing setup</li>
                  <li>Network engineer for Hanes Yard Office</li>
                  <li>Troubleshooting internal computing issues using various IT softwares</li>
                  <li>Data entry and Data migration</li>

                </ul>
              </Box>
              </Box>
            </Box>

            </motion.div>
            </GridItem>

            <GridItem colStart={1} rowStart={2} alignSelf="center"  >
            <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity:0,
              x:-250,
              delayChildren: 0.3,
            },
            visible: {
              scale:1,
              opacity:1,
              x: -1,
              transition: {
                delay: .7
              }
            }

        }}>
            <Box maxW="lg" maxH="md" boxShadow="lg" bg="gray.200" rounded="20px" borderWidth="1px" borderRadius="lg" overflow="hidden" color={textColor[colorMode]} bgColor={bgColor[colorMode]}>
              <Center>
              <Image mt="2" boxSize="36" borderRadius="full"  src="./3.jpg" />
              </Center>
              <Box p="6">
                <Center>
                <Box d="flex" alignItems="baseline" mb="2" >
                  <Stack direction="row">
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    Liquid.JS
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    Full Stack
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    HTML
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    CSS
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    JavaScript
                  </Badge>
                  </Stack>
                </Box>
                </Center>
        
                <Box
                  fontSize="xl"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  lineHeight="tight"
                  isTruncated
                >
                  Lead Web Developer
                </Box>
                <Box
                    color={textColor[colorMode]}
                    fontWeight="light"
                    // letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                    mt="1"
                  >
                    RC Hair La - Los Angeles, CA
                  </Box>
                  <Box
                    color={textColor[colorMode]}
                    fontWeight="light"
                    // letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                    mt="1"
                  >
                    August 2020- Present
                  </Box>
                <Box
              as="p"
              fontFamily="body"
              fontSize="sm"
              fontWeight="light"
              mt="2"
              wrap
              >
                <ul>
                  <li>Lead role in engineering and developing full stack e-commerce store</li>
                  <li>Maintain shopify and merchant APIs</li>
                  <li>Maintain SQL databases for customer sales and information</li>
                  <li>Integrating APIs and Custom code to further advance shipping process</li>
                  <li>General technical upkeep and maintenance of online store</li>

                </ul>
              </Box>
              </Box>
            </Box>

            </motion.div>
            </GridItem>

            <GridItem colStart={1} rowStart={3} >
            <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity:0,
              x:-250,
              
            },
            visible: {
              scale:1,
              opacity:1,
              x: -1,
              transition: {
                delay: .8
              }
            }

        }}>
              <Box maxW="lg" maxH="md" boxShadow="lg" bg="gray.200" rounded="20px" borderWidth="1px" borderRadius="lg" overflow="hidden" color={textColor[colorMode]} bgColor={bgColor[colorMode]}>
              <Center>
              <Image mt="2" boxSize="36" borderRadius="full"  src="./4.jpg" />
              </Center>
              <Box p="6">
                <Center>
                <Box d="flex" alignItems="baseline" mb="2" >
                  <Stack direction="row">
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    JS
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    Full Stack
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    React.JS
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    Python
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    Node.JS
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    SQL/Mongo
                  </Badge>
                  </Stack>
                </Box>
                </Center>
        
                <Box
                  fontSize="xl"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  lineHeight="tight"
                  isTruncated
                >
                  Full Stack Immersive - Fellow
                </Box>
                <Box
                    color={textColor[colorMode]}
                    fontWeight="light"
                    // letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                    mt="1"
                  >
                    General Assembly- Los Angeles, CA
                  </Box>
                  <Box
                    color={textColor[colorMode]}
                    fontWeight="light"
                    // letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                    mt="1"
                  >
                    August 2020- Present
                  </Box>
                <Box
              as="p"
              fontFamily="body"
              fontSize="sm"
              fontWeight="light"
              mt="2"
              wrap
              >
                <ul>
                  <li>Gained 27 weeks of intense FullStack development training</li>
                  <li>Created various apps using both front and back end technologies/languages</li>
                  <li>Created a Fullstack CRUD and RESTful web apps.</li>
                  <li>API Integration</li>
                  <li>Database and Sata Structure training</li>
                  <li>Deployment and DB connections</li>
                </ul>
              </Box>
              </Box>
            </Box>
            </motion.div>
            </GridItem>
            <GridItem colStart={1} rowStart={5}>
                <Box maxW="lg" h="sm" bg="transparent" borderRadius="lg" overflow="hidden">
                    
                </Box>
              </GridItem>
            </Grid >
            </motion.div>
              
        )
    }