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
};

export default Home;
