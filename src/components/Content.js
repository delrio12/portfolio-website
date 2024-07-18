import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Footer from './Footer';
import Contact from './Contact';
import { homeObjOne, homeObjTwo, homeObjThree, about, home, footer } from './Data';

function Content() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Home {...home}/>
            <About {...about}/>
            <Projects {...homeObjOne}/>
            <Projects {...homeObjTwo}/>
            <Projects {...homeObjThree}/>
            <Contact />
            <Footer {...footer}/>

        </>
    );
};

export default Content;
