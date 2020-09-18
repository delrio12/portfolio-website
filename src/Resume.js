import React from 'react'
import './Resume.css'
import GetAppIcon from '@material-ui/icons/GetApp';

function Resume() {
    return (
        <div className="resume">
            <img className="resume__picture" src="https://media-exp1.licdn.com/dms/image/C5603AQGFTdhG_IAb8Q/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=VyVOdBS-afK6sFO9C5vHvQi1njYlgMMKWfXhy6WXRSs" alt="Andres" />     
            <div className="resume__experience">
                <p>I am a Detail-oriented, adaptable and dependable Front-End Developer with a passion for web application development. Specialized in ReactJS, with an emphasis on cross-platform compatibility. Skilled in Problem-solving, critical thinking, and teamwork. Bilingual in English and Spanish. </p>
            </div>
            
            <div className="resume__education">
                
                <h1>EDUCATION</h1>
                <div className="resume__education__element">
                    <h2> DCS / DEC in Computer Programming </h2>
                    <p> Seneca College, Canada. </p>
                    <p> January 2019 – April 2020 </p>
                    <p> Graduated with Honors: Seneca President´s Honour List Award. </p>
                </div>
                
                <div className="resume__education__element">
                    <h2> Bachelor’s Degree in Financial Engineering </h2>
                    <p> Autonomous University of Bucaramanga, Colombia. </p>
                    <p> January 2012 – December 2017 </p>
                    <p> Member of Corporate Finance Research Group.</p>
                </div>
            </div> 
            <div className="resume__download">
                <a className="hvr-grow " href="https://github.com/delrio12" target="_blank">
                        <GetAppIcon fontSize="larger" />
                        <p> Resume </p>
                </a>
            </div>
        </div>

    )
}

export default Resume
