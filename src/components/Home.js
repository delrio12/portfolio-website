import React, { useState } from 'react';
import './Home.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Welcome from './Welcome';


function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Welcome />
        </>
    );
    

    // return (
    //     <div className="home">
    //             <h2 className="animate__animated animate__fadeInUp home__description"> Hey, I'm </h2>
    //             <h1 className="animate__animated animate__fadeInUp home__name">Andres Del Rio.</h1>
    //             <h4 className="animate__animated animate__fadeInUp home__description">A Front End Developer &amp; Programmer based in Canada. I enjoy creating websites, applications, or anything in between. I specialize in ReactJS.</h4>          
    //     </div>
    // )
};

export default Home;
