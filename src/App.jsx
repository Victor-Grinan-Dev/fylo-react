import { useEffect, useState } from "react";
import EarlyAccess from "./components/EarlyAccess";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Productive from "./components/Productive";
import Testimonial from "./components/Testimonial";

const window = document.getElementsByName("html");

function App() {
  const [theme, setTheme] = useState('');
 
  useEffect(() => {
    if(localStorage.getItem('fylo-theme')=== 'dark' || (!('fylo-theme' in localStorage))
    ){
      setTheme('dark')
    }else{
      setTheme('light')
    }
    // eslint-disable-next-line
  }, []);

  const themeToggle = () => {
    if(theme === 'light'){
      setTheme('dark');
      localStorage.setItem('fylo-theme', 'dark');
    }else{
      setTheme('light');
      localStorage.setItem('fylo-theme', 'light');
    }
  }

  const themes = {
    dark:"bg-darkBlue text-white font-opensans",
    light:"",
  }
  return (
    <div className={`${themes[theme]} min-h-screen`}>
      <Header theme={theme} fx={themeToggle}/>
      <Hero theme={theme} />
      <Features theme={theme} />
      <Productive theme={theme} />
      <Testimonial theme={theme} />
      <EarlyAccess theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}
export default App;
