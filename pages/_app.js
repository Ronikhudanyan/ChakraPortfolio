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
import {AnimatePresence} from 'framer-motion'
import theme from '../styles/theme'




function MyApp({ Component, pageProps }) {
	return (
    
      
		<ChakraProvider>
			
				<Navbar />
				<AnimatePresence exitBeforeEnter initial={false}>
						
						<Component {...pageProps} />
						
					</AnimatePresence>

		</ChakraProvider>
    
	);
}

export default MyApp