import React from 'react'
import './About.css'
import GetAppIcon from '@material-ui/icons/GetApp'

class About extends React.Component {

    downloadData = () => {
		fetch('http://localhost:3000/')
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'AndresDelRio.docx';
					a.click();
				});
				//window.location.href = response.url;
		});
    }
    
    render() {
        return (
            <div className="about animate__animated animate__fadeIn">
                <div className="about__summary">
                    <h1>About Me</h1>
                    <div className="long-line"></div>
                    <div className="about__description">
                        <p>I am a Detail-oriented, adaptable and dependable Programmer with a passion for web application development. I'm Specialized in ReactJS, with an emphasis on cross-platform compatibility. Skilled in Problem-solving, critical thinking, and teamwork. Bilingual in English and Spanish. </p>
                        <p>Here are a few technologies I've been working with recently: HTML5, CSS, JavaScript ES6+, ReactJS, Node.js.</p>
                    </div>

                
                <div className="about__picture">
                    <img  className="image" src="https://firebasestorage.googleapis.com/v0/b/portfolio-website-582f4.appspot.com/o/images%2Flinkedin.jpg?alt=media&token=94ca7bfb-27ea-43b5-b5a0-e76011f7fb0a" alt="Andres" />     
                </div>  
            </div> 
                <div className="about__education"> 
                        <br/>
                        <div className="about__education__element mobile--hidden">
                            <h2> DCS / DEC in Computer Programming </h2>
                            <p> Seneca College, Canada. </p>
                            <p> January 2019 – April 2020 </p>
                            <p> Graduated with Honors: Seneca President´s Honour List Award. </p>
                        </div>
                        
                        <div className="about__education__element mobile--hidden">
                            <h2> Bachelor’s Degree in Financial Engineering </h2>
                            <p> Autonomous University of Bucaramanga, Colombia. </p>
                            <p> January 2012 – December 2017 </p>
                            <p> Member of Corporate Finance Research Group.</p>
                        </div>
                        <div className="about__download">
                        <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-website-582f4.appspot.com/o/documents%2FAndresDelRio.docx?alt=media&token=48131a20-cc63-43d9-b5cf-41123a94fec4" download className="button__primary">
                            <GetAppIcon fontSize="larger" /> Resume 
                        </a>
                    </div>
                </div>  
            </div>

        )
    }
}

export default About;
