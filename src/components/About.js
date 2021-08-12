import React from 'react'
import styled from 'styled-components'
// import './About.css'
// import GetAppIcon from '@material-ui/icons/GetApp'
import { Button } from './Button'
import InstagramIcon from '@material-ui/icons/Instagram';
// import { homeObjOne } from '../components/Data'
// class About extends React.Component {

//     downloadData = () => {
// 		fetch('http://localhost:3000/')
// 			.then(response => {
// 				response.blob().then(blob => {
// 					let url = window.URL.createObjectURL(blob);
// 					let a = document.createElement('a');
// 					a.href = url;
// 					a.download = 'AndresDelRio.docx';
// 					a.click();
// 				});
// 				//window.location.href = response.url;
// 		});
//     }
    
//     render() {
//         return (
//             <div className="about animate__animated animate__fadeIn">
//                 <div className="about__summary">
//                     <h1>About Me</h1>
//                     <div className="long-line"></div>
//                     <div className="about__description">
//                         <p>I am a Detail-oriented, adaptable and dependable Programmer with a passion for web application development. I'm Specialized in ReactJS, with an emphasis on cross-platform compatibility. Skilled in Problem-solving, critical thinking, and teamwork. Bilingual in English and Spanish. </p>
//                         <p>Here are a few technologies I've been working with recently: HTML5, CSS, JavaScript ES6+, ReactJS, Node.js.</p>
//                     </div>

                
//                 <div className="about__picture">
//                     <img  className="image" src="https://firebasestorage.googleapis.com/v0/b/portfolio-website-582f4.appspot.com/o/images%2Flinkedin.jpg?alt=media&token=94ca7bfb-27ea-43b5-b5a0-e76011f7fb0a" alt="Andres" />     
//                 </div>  
//             </div> 
//                 <div className="about__education"> 
//                         <br/>
//                         <div className="about__education__element mobile--hidden">
//                             <h2> DCS / DEC in Computer Programming </h2>
//                             <p> Seneca College, Canada. </p>
//                             <p> January 2019 – April 2020 </p>
//                             <p> Graduated with Honors: Seneca President´s Honour List Award. </p>
//                         </div>
                        
//                         <div className="about__education__element mobile--hidden">
//                             <h2> Bachelor’s Degree in Financial Engineering </h2>
//                             <p> Autonomous University of Bucaramanga, Colombia. </p>
//                             <p> January 2012 – December 2017 </p>
//                             <p> Member of Corporate Finance Research Group.</p>
//                         </div>
//                         <div className="about__download">
//                         <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-website-582f4.appspot.com/o/documents%2FAndresDelRio.docx?alt=media&token=48131a20-cc63-43d9-b5cf-41123a94fec4" download className="button__primary">
//                             <GetAppIcon fontSize="larger" /> Resume 
//                         </a>
//                     </div>
//                 </div>  
//             </div>

//         )
//     }
// }

// import React from 'react'

const About = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, html5, css3, javascript, react, materialui, firebase, styledcomponents, bootstrap, buttonLabel1, buttonLabel2, description, img, alt, primary, dark, dark2 }) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id} >
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine darkText={darkText}>{topLine}</TopLine>
                            <Heading lightText={lightText}> {headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <ListWrapper>
                                <ListElement src={html5} /> 
                                <ListElement src={css3} />
                                <ListElement src={javascript} />
                                <ListElement src={react} />
                                <ListElement src={styledcomponents} />
                                <ListElement src={materialui} />
                                <ListElement src={firebase} />
                            </ListWrapper>
                            <BtnWrap>
                                <Button to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-90}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}>{buttonLabel1} </Button>
                                <Button to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-90}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}>{buttonLabel2} </Button>
                            </BtnWrap>
                            
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                        <Img darkText={darkText} src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    )
}

export default About

const InfoContainer = styled.div`
    background: ${({lightBg}) => (lightBg ? '#B7CDDB' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

const InfoWrapper = styled.div`
    display:grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1400px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

`
const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width:768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`
const Column1 = styled.div `
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
const Column2 = styled.div `
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
const TextWrapper = styled.div `
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

const TopLine = styled.p `
    color: ${({ darkText }) => (darkText ? 'var(--color-background2)' : "var(--color-borders)")};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

const Heading = styled.h1 `

margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({ lightText }) => (lightText ? "white" : "black")};

@media screen and (max-width: 400px) {
    font-size: 32px;
}
`

const Subtitle = styled.p `
    max-width: 440px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? 'var(--color-background)' : "var(--color-subtitle)")};
`
const BtnWrap = styled.div `
    display: flex;
    justify-content: flex-start;
`

const ImgWrap = styled.div `
    max-width: 555px;
    height: 100%;
`

const Img = styled.img `
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 10px;
    position: relative;
    top: 0;
    transition: top ease 0.5s;
    cursor: pointer;
    &:hover {
        box-shadow: ${({ darkText }) => (darkText ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' : '0 2px 4px 0 #1cd3bd, 0 2px 10px 0 #20fae0')};
        text-align: center;
        top: -1px;
        transition: 0.3s;
        
    }
`

const ListWrapper = styled.div `
    max-width: 440px;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
   
`
const ListElement = styled.img `
    margin-bottom: 20px;
`
