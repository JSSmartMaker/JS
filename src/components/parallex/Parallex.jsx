import { useRef } from "react";
import "../parallex/parallex.scss";
import {motion,useScroll , useTransform} from "framer-motion";
const Parallex = ({ type }) => {

  const ref = useRef()

  const{scrollYProgress} = useScroll({
    target:ref,
    offset:["start start" , "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 5],["10%", "500%"]);
  
  const ybg = useTransform(scrollYProgress, [0, 1],["0%", "100%"]);
 
  return (
    <div className="parallex"
      style={{
        background:
        type === "about"
        ? "linear-gradient(180deg, #050B1D,#0c0cld)"
        : "linear-gradient(180deg, #050B1D, #505064)",
      }}
    >
        <motion.h1 style={{y : yText}}>
          {type==="about" ? "What we Do?" : "What we Did?"}
          </motion.h1>
        
        <motion.div className="mountains"></motion.div>
        {/* <div className="men"></div> */}
        
        <motion.div className="planet"  style={{y: yText,
          backgroundImage: `URL(${
            type === "about" ? "./planets.png" : "./sun.png"})`,

        }}>
    
        </motion.div>
        <div className="sun"></div>
        <motion.div style={{x: ybg}} className="stars"></motion.div>
        <div className="boxer"></div>
    </div>
  )
}

export default Parallex
