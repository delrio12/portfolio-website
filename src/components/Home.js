import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Welcome from './Welcome';
// import About from './About';

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
            {/* <About /> */}
        </>
    );
};

export default Home;
