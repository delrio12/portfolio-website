import React from 'react'
import './Resume.css'
import GetAppIcon from '@material-ui/icons/GetApp';

function Resume() {
    return (
        <div className="resume">
            <div className="resume__summary">
                <h1>About Me</h1>
                <div className="long-line"></div>
                
                <p>I am a Detail-oriented, adaptable and dependable Front-End Developer with a passion for web application development. Specialized in ReactJS, with an emphasis on cross-platform compatibility. Skilled in Problem-solving, critical thinking, and teamwork. Bilingual in English and Spanish. </p>
                <p>Here are a few technologies I've been working with recently: JavaScript ES6+, HTML &amp; CSS, React, Vue, Node.js, WordPress</p>
            </div>
            <div className="resume__picture">
                <img  className="image" src="https://media-exp1.licdn.com/dms/image/C5603AQGFTdhG_IAb8Q/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=VyVOdBS-afK6sFO9C5vHvQi1njYlgMMKWfXhy6WXRSs" alt="Andres" />     
                <div className="overlay"></div>
            </div>  
            {/* <div className="resume__experience">
                <ul className="resume__experience__jobs">
                    <li>
                        <button>Customer Service Represetative</button>
                    </li>
                    <li>
                        <button></button>
                    </li>
                    <li>
                        <button>Customer Service Represetative</button>
                    </li>
                    <li>
                        <button>Customer Service Represetative</button>
                    </li>

                </ul>
                <p>Customer Service Representative January 2018 &ndash; May 2018 ACCEDO, Colombia.</p>
                <p>Provided support over chat for a sales campaign of a Telecommunications company from US (AT&amp;T).</p>
                <p>1. Handled customer complaints, provided appropriate solutions and alternatives within the time limits. 2. Upsold products or services to customers, when necessary. 3. Identified and assessed customers&rsquo; needs to achieve satisfaction. 4. Provide accurate, valid and complete information by using the right methods/tools. 5. Escalated customer complaints and/or calls to managers when necessary. 6. Followed communication procedures, guidelines and policies.</p>
                <p>Credit Analyst (Internship) May 2017 &ndash; December 2017 Davivienda Bank, Colombia.</p>
                <p>Supported the Credit Analysis Area:</p>
                <p>1. Provided loan approvals and modified existing loans. 2. Evaluated credit data and financial statements from clients to determine the degree of risk involved in lending money to them. 3. Inspected personal documentation and financial statements from clients. 4. Addressed problems and complaints from customers and contractors. 5. Prepared daily, weekly and monthly reports.</p>
                <p>IT Support Volunteer December 2015 &ndash; December 2019 Transformar Foundation, Colombia.</p>
                <p>A non-profit organization that focuses on improving people&rsquo;s health and wellbeing, helping individuals lift themselves out of extreme poverty and get access the opportunities they need to succeed in school and life.</p>
                <p>1. Provided basic IT support and troubleshooting. 2. Supported staff by solving problems related to software and hardware. 3. Prepared bank deposits, general ledger postings and statements. 4. Served as English-Spanish translator between staff and international organizations during events.</p>         
            </div> */}
            <div className="resume__education"> 
                <h1>Education</h1>
                <div className="long-line"></div>
                <div className="resume__download">
                    <a className="hvr-grow button__primary" href="https://github.com/delrio12" target="_blank">
                            <GetAppIcon fontSize="larger" /> Resume      
                    </a>
                </div>
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
            
        </div>

    )
}

export default Resume
