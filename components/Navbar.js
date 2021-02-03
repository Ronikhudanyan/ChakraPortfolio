import {
	useColorMode,
	IconButton,
	Box,
	Image,
    VStack,
    Center
} from '@chakra-ui/react';
import { MoonIcon, SunIcon} from '@chakra-ui/icons'
import Link from 'next/link';
import { useRouter } from 'next/router';
import {motion} from 'framer-motion'
import Scroll from '../components/Scroll'


const sidebar = {
	open: ({
	  clipPath: 'circle(1000px at 40px 40px)',
	  opacity: 1,
	  transition: {
		type: "spring",
		stiffness: 20,
		restDelta: 2,
		delay: .10
	  }
	}),
  
	closed: {
	  clipPath: "circle(30px at 40px 40px)",
	  opacity: 0,
	  transition: {
		delay: 0.5,
		type: "spring",
		stiffness: 400,
		damping: 40
	  }
	}
  };


  const itemVars = {
	open: {
	  y: 0,
	  opacity: 1,
	  transition: {
		y: { stiffness: 1000, velocity: -100 }
	  }
	},
  
	closed: {
	  y: 50,
	  opacity: 0,
	  transition: {
		y: { stiffness: 1000 }
	  }
	}
  };

  const ulvars = {
	open: {
	  transition: { staggerChildren: 0.07, delayChildren: 0.5 }
	},
	closed: {
	  transition: { staggerChildren: 0.05, staggerDirection: -1 }
	}
  };


  const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const bgColor = {
	  light: "rgba(204, 214, 224, 0.63)",
	  dark: "rgba(74, 85, 104, 0.7)",
	};
	const textColor = { light: "black", dark: "gray.100" };
	const router = useRouter();
	return (
	  <VStack position="fixed" zIndex="1">
		<motion.div initial={"closed"} animate={"open"} variants={sidebar}>
		  <Box
			h="100%"
			w="42"
			position="fixed"
			zIndex="1"
			mt="0"
			ml="0"
			paddingTop="20px"
			color={textColor[colorMode]}
			bgColor={bgColor[colorMode]}
		  >
			<motion.div variants={ulvars}>
			  <Box>
				<motion.div
				  variants={itemVars}
				  whileHover={{ scale: 1.1 }}
				  whileTap={{ scale: 0.95 }}
				>
				  <Box
					paddingBottom={5}
					paddingTop={5}
					opacity={router.pathname !== "/" ? 1 : 1}
				  >
					<Link href="/">
					  <Image
						mb="2"
						src={
						  colorMode === "light" ? "./blackm.png" : "./whitem.png"
						}
					  />
					</Link>
				  </Box>
				</motion.div>
				<motion.div
				  variants={itemVars}
				  whileHover={{ scale: 1.1 }}
				  whileTap={{ scale: 0.95 }}
				>
				  <Box
					padding={10}
					transform="rotate(-90deg)"
					opacity={router.pathname !== "/projects" ? 0.4 : 1}
				  >
					<Link href="/projects">
					  <a>Projects</a>
					</Link>
				  </Box>
				</motion.div>
				<motion.div
				  variants={itemVars}
				  whileHover={{ scale: 1.1 }}
				  whileTap={{ scale: 0.95 }}
				>
				  <Box
					padding={10}
					transform="rotate(-90deg)"
					opacity={router.pathname !== "/experience" ? 0.4 : 1}
				  >
					<Link href="/experience">
					  <a>Experience</a>
					</Link>
				  </Box>
				</motion.div>
				<motion.div
				  variants={itemVars}
				  whileHover={{ scale: 1.1 }}
				  whileTap={{ scale: 0.95 }}
				>
				  <Box
					padding={10}
					transform="rotate(-90deg)"
					opacity={router.pathname !== "/about" ? 0.4 : 1}
				  >
					<Link href="/about">
					  <a>About</a>
					</Link>
				  </Box>
				</motion.div>
				<motion.div
				  variants={itemVars}
				  whileHover={{ scale: 1.1 }}
				  whileTap={{ scale: 0.95 }}
				>
				  <Box
					padding={10}
					transform="rotate(-90deg)"
					opacity={router.pathname !== "/list" ? 0.4 : 1}
				  >
					<Link href="/list">
					  <a>Contact</a>
					</Link>
				  </Box>
				</motion.div>
				<br></br>
  
				<motion.div
				  variants={itemVars}
				  whileHover={{ scale: 1.1 }}
				  whileTap={{ scale: 0.95 }}
				>
				  <Box>
					<Center>
					  <IconButton
						rounded="full"
						onClick={toggleColorMode}
						icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
					  >
						Change Color Mode
					  </IconButton>
					  
					</Center>
				  </Box>
				</motion.div>
			  </Box>
			</motion.div>
		  </Box>
		</motion.div>
	  </VStack>
	);
  };
  
  export default Navbar;
  






