import React from "react";
import { useState } from "react";
import { motion,  AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Box, Badge, Center, Image, Stack, Button, Link, Grid, GridItem, Text, Tooltip, Flex } from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'




export default function Projects() {
  return (
        <AnimateSharedLayout>
        <Flex ml="20"  paddingTop="20" justifyContent='center' alignItems='center'>
      <motion.div layout initial={{ borderRadius: 25 }}>
        <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(3, 1fr)" gap={4}>
          <GridItem colStart={1}>
          <motion.div whileHover={{ scale: 1.1 }}>
          <Hool />
          </motion.div> 
          </GridItem> 
          <GridItem colStart={2} justifySelf="center">
          <motion.div whileHover={{ scale: 1.1 }}>
          <FindCareer />
          </motion.div>
          </GridItem>
          <GridItem colStart={3} justifySelf="center">
          <motion.div whileHover={{ scale: 1.1 }}>
          <TronRun />
          </motion.div>
          </GridItem>
          </Grid>
          <Box h="10" w="200" />
      </motion.div>
      </Flex>
    </AnimateSharedLayout>
  );
}



function Hool() {
  const [isHoolOpen, setIsHoolOpen] = useState(false);

  const toggleHoolOpen = () => setIsHoolOpen(!isHoolOpen);

  return (
    <motion.div layout onClick={toggleHoolOpen} initial={{ borderRadius: 10 }}>
       <Box> 
      <motion.div>
        <Center>
        <Tooltip label="HOOL Armenia" placement="top" colorScheme="twitter" mb="1" >
      <Image  mt="2" boxSize="48" borderRadius="full"  src="./yerevan.jpg" layout/>
        </Tooltip>
      </Center>
      </motion.div>
      <AnimatePresence>{isHoolOpen && <HoolContent />}</AnimatePresence>
      </Box>
    </motion.div>
  );
}

function HoolContent() {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        
        <Box
          maxW="md"
          maxH="2xl"
          boxShadow="lg"
          bg="gray.200"
          rounded="20px"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        
          
        >
          <Center>
            <Image
              maxW="md"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              src="./hool.jpg"
            />
          </Center>
          <Box p="6">
            <Center>
              <Box d="flex" alignItems="baseline" mb="2" spacing="0.2">
                <Stack direction="row">
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    Full Stack
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    JS
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    Node.JS
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    SQL
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="twitter">
                    Express/EJS
                  </Badge>
                </Stack>
              </Box>
            </Center>
  
            <Center>
              <Box
                fontSize="lg"
                fontWeight="semibold"
                textTransform="uppercase"
                lineHeight="tight"
                isTruncated
              >
                Hool Armenia
              </Box>
            </Center>
            <Center>
              <Box
                as="p"
                fontFamily="body"
                fontSize="sm"
                fontWeight="light"
                mt="2"
                wrap
              >
                <p>
                  An app I created for a cause, to help the Armenian diaspora get
                  organized. The main purpose of this app is to organized the
                  diaspora with call to actions, donations, news and anything that
                  can help our motherland. Fully functional mern stack app.
                </p>
              </Box>
            </Center>
            <Center>
              <Stack spacing={2} mt="4" direction="row">
                <Link
                  href="https://hands-off-our-lands.herokuapp.com/"
                  isExternal
                >
                  <Button
                    rightIcon={<CheckCircleIcon />}
                    colorScheme="blue"
                    variant="outline"
                  >
                    Deployed Site
                  </Button>
                </Link>
                <Link
                  href="https://github.com/Ronikhudanyan/HoolArmenia"
                  isExternal
                >
                  <Button
                    rightIcon={<LinkIcon />}
                    colorScheme="blue"
                    variant="outline"
                  >
                    GitHub Repo
                  </Button>
                </Link>
              </Stack>
            </Center>
          </Box>
        </Box>
      </motion.div>
    );
  }
  
  function FindCareer() {
    const [isFCOpen, setIsFCOpen] = useState(false);
  
    const toggleFCOpen = () => setIsFCOpen(!isFCOpen);
  
    return (
      <motion.div  layout onClick={toggleFCOpen} initial={{ borderRadius: 10 }}>
        <Box> 
      <motion.div>
        <Center>
        <Tooltip label="Find(Career)" placement="top" colorScheme="twitter" mb="1" >
      <Image mt="2" boxSize="48" borderRadius="full"  src="./findcsm.jpg" layout/>
      </Tooltip>
      </Center>
      </motion.div>
        <AnimatePresence>{isFCOpen && <FCContent />}</AnimatePresence>
        </Box>
      </motion.div>
    );
  }
  
  function FCContent() {
      return (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 5 }}
          exit={{ opacity: 0 }}
        >
          
          <Box
            maxW="md"
            maxH="2xl"
            boxShadow="lg"
            bg="gray.200"
            rounded="20px"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            // zIndex="2"
          >
            <Center>
              <Image
                maxW="md"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                src="./findc.jpg"
              />
            </Center>
            <Box p="6">
              <Center>
                <Box d="flex" alignItems="baseline" mb="2">
                  <Stack direction="row" spacing="0.5">
                    <Badge borderRadius="full" px="2" colorScheme="twitter">
                      Full Stack
                    </Badge>
                    <Badge borderRadius="full" px="2" colorScheme="twitter">
                      React.JS
                    </Badge>
                    <Badge borderRadius="full" px="2" colorScheme="twitter">
                      Node.JS
                    </Badge>
                    <Badge borderRadius="full" px="2" colorScheme="twitter">
                      Postman
                    </Badge>
                    <Badge borderRadius="full" px="2" colorScheme="twitter">
                      MongoDB
                    </Badge>
                  </Stack>
                </Box>
              </Center>
    
              <Center>
                <Box
                  fontSize="lg"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  lineHeight="tight"
                  isTruncated
                >
                  Find(Career)
                </Box>
              </Center>
              <Center>
                <Box
                  as="p"
                  fontFamily="body"
                  fontSize="sm"
                  fontWeight="light"
                  mt="2"
                  wrap
                >
                <p>
                    As a student my collegues and I were very excited to join the work force after
                    graduation. We decided to build out a full stack react/ node application that
                    hosts a spereate mongo db. This app is a dashboard for anyone looking to join
                    the code work force. Set goals, search job listings, keep track of
                    applications and even create a network!
                </p>
                </Box>
              </Center>
              <Center>
                <Stack spacing={2} mt="4" direction="row">
                  <Link
                    href="https://findcareer.surge.sh"
                    isExternal
                  >
                    <Button
                      rightIcon={<CheckCircleIcon />}
                      colorScheme="blue"
                      variant="outline"
                    >
                      Deployed Site
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/orgs/SFX818/teams/charoniles-angels/repositories"
                    isExternal
                  >
                    <Button
                      rightIcon={<LinkIcon />}
                      colorScheme="blue"
                      variant="outline"
                    >
                      GitHub Repo
                    </Button>
                  </Link>
                </Stack>
              </Center>
            </Box>
          </Box>
        </motion.div>
      );
    }

    function TronRun() {
        const [isTronOpen, setIsTronOpen] = useState(false);
      
        const toggleTronOpen = () => setIsTronOpen(!isTronOpen);
      
        return (
          <motion.div  layout onClick={toggleTronOpen} initial={{ borderRadius: 10 }}>
            <Box> 
            <motion.div>
            <Center>
            <Tooltip label="Tron Run" placement="top" colorScheme="twitter" mb="1" >
            <Image mt="2" boxSize="48" borderRadius="full"  src="./tronsm.jpg" layout />
            </Tooltip>
            </Center>
            </motion.div>
            <AnimatePresence>{isTronOpen && <TronContent />}</AnimatePresence>
            </Box>
          </motion.div>
        );
      }
      
      function TronContent() {
          return (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 5 }}
              exit={{ opacity: 0 }}
            >
              
              <Box
                maxW="md"
                maxH="2xl"
                boxShadow="lg"
                bg="gray.200"
                rounded="20px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                zIndex="2"
              >
                <Center>
                  <Image
                    maxW="md"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    src="./tronrun.jpg"
                  />
                </Center>
                <Box p="6">
                  <Center>
                    <Box d="flex" alignItems="baseline" mb="2">
                      <Stack direction="row">
                        <Badge borderRadius="full" px="2" colorScheme="twitter">
                          Full Stack
                        </Badge>
                        <Badge borderRadius="full" px="2" colorScheme="twitter">
                          Vanilla JavaScript
                        </Badge>
                        <Badge borderRadius="full" px="2" colorScheme="twitter">
                          Node.JS
                        </Badge>
                        <Badge borderRadius="full" px="2" colorScheme="twitter">
                          Postman
                        </Badge>
                      </Stack>
                    </Box>
                  </Center>
        
                  <Center>
                    <Box
                      fontSize="lg"
                      fontWeight="semibold"
                      textTransform="uppercase"
                      lineHeight="tight"
                      isTruncated
                    >
                      Tron Run
                    </Box>
                  </Center>
                  <Center>
                    <Box
                      as="p"
                      fontFamily="body"
                      fontSize="sm"
                      fontWeight="light"
                      mt="2"
                      wrap
                    >
                    <p>
                    Its always fun to see where you started off! Tron Legacy Run was the first
                    project I ever built using Vanilla JS. This game is built with inspo from the
                    original Flappy bird game. I love to look at it as a marker of where Ive
                    started and where im at today. Going back to this game to rebuild it was
                    challenging for me because since then ive learned about the wonderous world of
                    full stack apps.
                    </p>;
                    </Box>
                  </Center>
                  <Center>
                    <Stack spacing={2} mt="4" direction="row">
                      <Link
                        href="https://ronikhudanyan.github.io/Tron-Legacy-Project-One-Roni-Bruno/"
                        isExternal
                      >
                        <Button
                          rightIcon={<CheckCircleIcon />}
                          colorScheme="blue"
                          variant="outline"
                        >
                          Deployed Site
                        </Button>
                      </Link>
                      <Link
                        href="https://github.com/Ronikhudanyan/Tron-Legacy-Project-One-Roni-Bruno"
                        isExternal
                      >
                        <Button
                          rightIcon={<LinkIcon />}
                          colorScheme="blue"
                          variant="outline"
                        >
                          GitHub Repo
                        </Button>
                      </Link>
                    </Stack>
                  </Center>
                </Box>
              </Box>
            </motion.div>
          );
        }

