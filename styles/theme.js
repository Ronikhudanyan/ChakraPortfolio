// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import { urlObjectKeys } from "next/dist/next-server/lib/utils"



// // 3. extend the theme
const theme = extendTheme({ 
  // colors: {
  //   nav: {
  //     100: "#f7fafc",
      
  //     900: "#1a202c",
  //   },
  // },
  
  
  
  
  
  
  
  
  styles: {
    global: (props) => ({
      "html, body": {
        fontFamily: "body",
        color: props.colorMode === "light" ? "white" : "gray.600",
        // backgroundImage: props.colorMode === "light" ? "url('./whitem.png')": "url('./darkmarble.jpg')",
        initialColorMode: "light",
        useSystemColorMode: false,
      },
    }),
  },
})

export default theme