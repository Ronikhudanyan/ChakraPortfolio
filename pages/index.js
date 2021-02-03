import { Box, Image, Flex, Center, Grid, GridItem, Spacer } from '@chakra-ui/react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Scroll from '../components/Scroll'


import theme from '../styles/theme'
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -100]);
  const y2 = useTransform(scrollY, [0, 400], [0, -200]);
  const y3 = useTransform(scrollY, [0, 500], [0, -280]);

 

  const y4 = useTransform(scrollY, [0, 1500], [-1200, 0]);
  const y5 = useTransform(scrollY, [0, 1600], [-1300, 0]);
  


  const [ref, inView, entry] = useInView({
    
    threshold: 0.5,
    triggerOnce: false
  })



  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };
  

  return (
  
    // <div className={styles.container}>
    <Box>
      <Head>
        <title>RoniKode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Box bgImage="url(./whitemarb.jpg)" bgSize="cover" minH="120%" minW="1024px" w="100%" h="auto"  backgroundRepeat="repeat" position="absolute" overflowX="scroll" top="0" right="0">
      
      <main className={styles.main}>
      
  
      <Box boxSize="4xl">
        <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}>
          <GridItem colStart={1} colSpan={3}>
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
          <Image src="namen.png" />
        </motion.div>
         </GridItem>
         
         <GridItem colStart={1} rowStart={2} transition={{delay: .9}}>
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
              delay: .5
            }
          }
        }}>
          <Image src="./devn.png" />
        
        </motion.div>
        </GridItem>

        <GridItem colStart={2} rowStart={2} transition={{delay: 1}}>
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
              delay: .5
            }
          }
        }}>
        
          <Image src="./designn.png" />
        
        </motion.div>
        </GridItem>

        <GridItem colStart={3} rowStart={2}transition={{delay: 1.2}}>
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
              delay: .5
            }
          }
        }}>
        
          <Image src="./engineern.png" />
        
        </motion.div>
        </GridItem>
        
        
        </Grid>
        </Box>
      </main>
      <Center>
      <Box h="70%" alignItems="center" justifyContent="center">
        
      <motion.div  style={{ y: y1, x: -50 }}>
        <Image boxSize="56" borderRadius="full"  src="./javascript.png" />
      </motion.div>
      
      <motion.div
        style={{ y: y2, x: 50}}>
          <Image boxSize="56" borderRadius="full"  src="./css.png" />
        </motion.div>
      
      <motion.div
        style={{ y: y3, x: 150}}>
          <Image boxSize="56" borderRadius="full"  src="./HTML.png" />
        </motion.div>
      
      </Box>
      </Center>

      <Center>
      <Flex direction="row" h="70%" alignItems="center" justifyContent="center">
      <motion.div
        style={{x: 0}}
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
      >
        <Image boxSize="56" borderRadius="full"  src="./py.png" />
      </motion.div>
      <motion.div
        style={{x: 50}}
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
      >
        <Image boxSize="56"  src="./flask.png" />
      </motion.div>
      </Flex>
      </Center>

        <br></br>
        <br></br>
         <br></br>

      <Center>
        <Flex direction="row" alignItems="center" justifyContent="space-between">
      
      <motion.div
        style={{x: 0}}
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
      >
        <Image boxSize="56" borderRadius="full"  src="./mongo.png" />
      </motion.div>
      <motion.div
        style={{x: 50}}
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
      >
        <Image boxSize="56"  src="./mongoose.png" />
      </motion.div>
      <motion.div
        style={{x: 100}}
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
      >
        <Image boxSize="56"  src="./sql.png" />
      </motion.div>
      <motion.div
        style={{x: 150}}
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
      >
        <Image boxSize="56"  src="./seqz.png" />
      </motion.div>
      
      </Flex>
      </Center>




      <Box h="56"  />

      <Center>
      <Flex mb="56" direction="row" alignItems="center" >
        
      <motion.div
        style={{ y: y5, x: 0}}>
          <Image boxSize="56"   src="./ejs.png" />
        </motion.div>

      <motion.div
        style={{ y: y4, x: 50}}>
          <Image boxSize="56"  src="./nodeone.png" />
        </motion.div>
      
      

        <Box>
        <motion.div
        style={{ y: y4, x: 110}}>
          <Image  boxSize="56"   src="./reactjs.png" />
        </motion.div>
        </Box>
        
        
        <motion.div
        style={{ y: y5, x: 150}}>
          <Image boxSize="56"   src="./next.png" />
        </motion.div>
      
      </Flex>
      </Center>
      
      
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/blackm.png" alt="RoniLogo" className={styles.logo} />
        </a>
      </footer>
      </Box>
      </Box>
    // </div>
     
  )
}
