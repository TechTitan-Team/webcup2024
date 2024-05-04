import splitStringUsingRegex from "../utils/splitStringUsingRegex";
import { motion } from "framer-motion";

function ElegantText(props){
    const value = splitStringUsingRegex(props.text);
    const charVariants = {
        hidden :{opacity: 0},
        reveal: {opacity: 1}
    }
    return(
        <motion.div
        initial="hidden"
        whileInView="reveal"
        transition={{staggerChildren: .02}}
        >
        <motion.span transition={{duration:1.5}} variants={charVariants}>
                    {props.text}
                </motion.span>
        </motion.div>
        
    )
}

export default ElegantText;