import { useRef } from "react";
import "../mylogo/mylogo.scss";
import {motion,useScroll , useTransform} from"framer-motion";

const Mylogo = () => {
  const ref = useRef()

  const{scrollYProgress} = useScroll({
    target:ref,
    offset:["start start" , "end start"]
  });

  const yTextr = useTransform(scrollYProgress, [0, 1],["10%", "500%"]);
  const ybgg = useTransform(scrollYProgress, [0, 1],["-20%", "100%"]);
  return (
    <div className="title">
      <div className="title1"></div>
      <div className="title2"></div>
      <div className="title3"></div>
      <div className="title4"></div>
        <motion.h1  style={{y: yTextr}}>JS SmartMaker</motion.h1>
        <motion.div style={{x: ybgg}} className="image-cont">
        <img src="./stars.png"></img>
        </motion.div>
        <div className="logo">
        <img src="./logo1.jpg"></img>
       </div>
       <div className="logo1">
        <img src="./logo 2.jpg"></img>
       </div>
    </div>
  )
}

export default Mylogo

