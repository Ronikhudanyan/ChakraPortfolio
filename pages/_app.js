// import '../styles/globals.css'
import {
	Flex,
	ChakraProvider,
	CSSReset,
	ColorModeScript,
	colorMode,
	useColorMode,
	  Box,
	  Image
	  
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import theme from '../styles/theme'

// function BgCheck () {
// 	const { colorMode, toggleColorMode } = useColorMode()
// 	let link;
// 	if(colorMode === 'light'){
// 		link="url(https://i.imgur.com/ahS1bPJ.jpg)"
// 	} else if (colorMode === 'dark') {
// 		link="url(https://i.imgur.com/TQELQUR.jpg)"
// 	}
// 	return (
// 		<Box bgSize="cover" bgImage={link} />
// 	)
// }


function MyApp({ Component, pageProps }) {
	return (
    
      
		<ChakraProvider>
			{/* <Flex flexDirection="column" justify="flex-start" >
        		<ColorModeScript initialColorMode={theme.styles.global} />
				<CSSReset />  */}
				<Navbar />
          	{/* </Flex> */}
					{/* <Flex ml="20"justify='center' align='center' w='100%' h='93vh'> */}
						
						<Component {...pageProps} />
						
					{/* </Flex> */}

		</ChakraProvider>
    
	);
}

export default MyApp