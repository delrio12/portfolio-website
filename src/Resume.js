import React from 'react'

function Resume() {
    return (
        <div className="resume">
            <div className="resume__education">
                <h2 className="resume__education__program">
                DCS / DEC in Computer Programming
                </h2>
                
                <p className="resume__education__institution">
                Seneca College, Canada.
                </p>
                <p className="resume__education__date">
                January 2019 – April 2020
                </p>
                <p className="resume__education__description">
                Graduated with Honors: Seneca President´s Honour List Award.
                </p>

                <h2 className="resume__education__program">
                Bachelor’s Degree in Financial Engineering
                </h2>
                <p className="resume__education__institution">
                Autonomous University of Bucaramanga, Colombia.
                </p>
                <p className="resume__education__date">
                January 2012 – December 2017
                </p>
                <p className="resume__education__description">
                Member of Corporate Finance Research Group.
                </p>
            </div> 
        </div>
    )
}

export default Resume
