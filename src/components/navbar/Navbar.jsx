import SideBar from "../sidebar/SideBar";
import "./navbar.scss";
import {motion} from"framer-motion";
const textVariantsi ={
  initial:{
    y:-100,
    opacity:0,
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  },
}



  

const Navbar = () => {
  const items =[
    "Home",
    "About",
    "Experience",
    "Profile",
    "Contact"
];

  return (

    <div className="navbar">
     <SideBar/> 
      <div className="wrapper">
    
        <motion.span initial={{opacity:0,scale:0.5}} 
        animate={{opacity:1,scale:1}} 
        transition={{duration:0.5}}>JS SmartMaker
        </motion.span>
        
        <motion.div className="nav-txt" variants={textVariantsi} initial="initial" animate="animate"> 
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Profile">Profile</a></li>
        <li><a href="#Contact">Contact</a></li>
        </motion.div>
      </div>
      <div className="social">
            <li><a href="#"><img src="/facebook.png" alt=""></img></a></li>
            <li><a href="#"><img src="/instagram.png" alt=""></img></a></li>
            <li><a href="#"><img src="/twitter.png" alt=""></img></a></li>
        
            </div>
          <div className="bgg"></div>
    </div>

  )
}

export default Navbar;
