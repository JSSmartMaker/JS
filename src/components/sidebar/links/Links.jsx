import {motion} from"framer-motion";
const variants ={
    open:{
        transition:{
            staggerChilderen:-60,
        },
    },
    closed:{
        transition:{
            staggerChilderen:60,
            staggerDirection:60,
        }
    },

};

const itemVariants ={
    open:{
       
        y:-20,
        opacity:1,
    },
    closed:{
        y:100,
        opacity:0,
    },

};



const Links = () => {

    const items =[
        "Home",
        "About",
        "Experience",
        "Profile",
        "Contact"
    ];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((items)=>(
        <motion.a href={`#${items}`}key={items} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{items}
        </motion.a>
      )
      )
      }
      <motion.div className="social1">
            {/* <li><a href="#"><img src="./facebook.png" alt=""></img></a></li>
            <li><a href="#"><img src="./instagram.png" alt=""></img></a></li>
            <li><a href="#"><img src="./twitter.png" alt=""></img></a></li> */}
            </motion.div>
    </motion.div>
    
  )
}

export default Links
