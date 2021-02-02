import React from 'react'
import Projects from '../components/Projects'
import { motion } from "framer-motion";

let transition = { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] };

export default function projects() {
    return (
        <motion.div
      exit={{ scale: 0.8, x: "-100%" }}
      initial={{ scale: 0.8, x: "0%" }}
      animate={{ scale: 1, x: "0" }}
      transition={transition}>
        <Projects /> 
        </motion.div>
    )
}
