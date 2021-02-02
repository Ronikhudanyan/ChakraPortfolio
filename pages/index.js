import { Box, Image, Flex, HStack, Grid, GridItem } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import theme from '../styles/theme'

export default function Home() {
  return (
  
    <div className={styles.container}>
      <Head>
        <title>RoniKode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Box bgImage="url(./whitemarb.jpg)" bgSize="cover" minH="100%" minW="1024px" w="100%" h="auto" position="fixed" top="0" right="0">
      <main className={styles.main}>
      <Box boxSize="4xl">
        <Grid
        templateRows="repeat(3, 1fr)"
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

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
      </Box>
    </div>
     
  )
}
