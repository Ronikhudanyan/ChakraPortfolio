// import '../styles/globals.css'

import {
	Flex,
	ChakraProvider,
	CSSReset,
	ColorModeScript,
	colorMode,
	useColorMode,
	  Box,
	  Image,
	  
	  
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import {AnimatePresence, motion} from 'framer-motion'
import theme from '../styles/theme'




function MyApp({ Component, pageProps, router}) {
	
	return (
    
      
		<ChakraProvider>
			
				<Navbar />
				
						<motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
							pageInitial: {
								scale: 0.8,
								opacity:0,
								x: -250
							},
							pageAnimate: {
								scale:1,
								opacity:1,
								x:0,
								
							},
							
						}}>
						<Component {...pageProps} />
						</motion.div>
					

		</ChakraProvider>
    
	);
}



export default MyApp