import "../hero/hero.scss";
import {motion} from"framer-motion";
const textVariants ={
  initial:{
    x:-100,
    opacity:0,

  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:0.5,
      staggerChildren:0.1,
    }
  },
}
const textVariantsi ={
  initial:{
    x:500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  },
}

const sliderVariants ={
  initial:{
    x:0,
  },
  animate:{
    x:"-220%",
    opacity:1,
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:20,
      staggerChildren:0.1,
    }
  },

}
const Hero = () => {

  return (
    <div className="hero">
      <div className="hero1"></div>
      <motion.div
       className="text-container" 
      variants={textVariants}
       initial="initial" 
       animate="animate">
        <motion.h3 variants={textVariants}>Hello, It's Me</motion.h3>
        <motion.h1 variants={textVariants}>Jasjot Singh</motion.h1>
        <motion.h4>And I'm a </motion.h4>
        <motion.h2 variants={textVariants} className="texttoolt">Graphics Designer </motion.h2>
        <motion.h2 variants={textVariants} className="texttool">& Web Developer
          </motion.h2>
        <motion.p className="p-1" variants={textVariants}>I'm a designer and web developer to create a unique designs,
        <p className="p-2">  artwork, digital designs, and many more . . .</p> 
        <p className="p-3"></p>
        </motion.p>
        <a href="https://www.linkedin.com/in/jasjot-singh-js-a11541267/">
          <motion.button className="butter1" variants={textVariants}>More About Me
          </motion.button></a>
        <a href="./JASJOT SINGH resume (3).pdf" download>
          <motion.button  className="butter2" variants={textVariants}>Download CV
          </motion.button>   
        </a>
      </motion.div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Developr
        </motion.div>
        <motion.div  className="image-containers" variants={textVariantsi}initial="initial" animate="animate">
      <img src="./wwe.png" alt=""/>
      </motion.div>
    </div>
  )
}

export default Hero
