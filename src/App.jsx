import "./app.scss";
import Hero from "./components/hero/Hero";
import Mylogo from "./components/mylogo/Mylogo";
import Navbar from "./components/navbar/Navbar";
import Parallex from "./components/parallex/Parallex";
import SideBar from "./components/sidebar/SideBar";
import Skill from "./components/skills/Skill";
import Inter from "./components/inter/Inter";
import Profile from "./components/profile/Profile";
import Contact from "./components/contact/Contact";
const App = () => {
  return <div>
    <section id="Home">
   
      <Navbar/>
      <SideBar/> 
      <Hero/>
         
     
      </section>
      <section>
      
          <Mylogo/>
         
      </section>
    <section ><Parallex /></section>
    <section id="About"><Skill/></section>
    <section className="hide"></section>
    <section><Parallex/></section>
    <section id="Experience"><Inter/></section>
    <section id="Profile"><Profile/></section>
    <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
