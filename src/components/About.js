import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const About = ({img, alt, resume, linkedin}) => {
    return (
        <>
        <AboutContainer id='about'> 
            <AboutWrapper>
                <AboutRow0>
                    <Heading>About Me</Heading>
                </AboutRow0>
                
                <AboutRow1>
                    <Summary>
                    Hello! My name is Andres Del Rio and I am a Computer programmer that enjoys creating websites.  I'm Specialized in ReactJS, with an emphasis on cross-platform compatibility. Skilled in Problem-solving, critical thinking, and teamwork. Bilingual in English and Spanish.
                    </Summary>
                </AboutRow1>
                <AboutRow2>
                        <Column1>
                            
                                <TopLine>
                                    SKILLS
                                </TopLine>
                            
                            <Skills>
                                <HtmlSkillBar>
                                    <H3>HTML</H3>
                                    <Progress />
                                    <P>90%</P>
                                </HtmlSkillBar>
                                <CssSkillBar>
                                    <H3>CSS</H3>
                                    <Progress />
                                    <P>90%</P>
                                </CssSkillBar>
                                <JavascriptSkillBar>
                                    <H3>JavaScript</H3>
                                    <Progress />
                                    <P>75%</P>
                                </JavascriptSkillBar>
                                <ReactSkillBar>
                                    <H3>React</H3>
                                    <Progress />
                                    <P>70%</P>
                                </ReactSkillBar>
                                <BootstrapSkillBar>
                                    <H3>Bootstrap</H3>
                                    <Progress />
                                    <P>65%</P>
                                </BootstrapSkillBar> 
                            </Skills>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap> 
                        </Column2>
                </AboutRow2>
                <AboutRow3>
                    <Button onClick={() => downloadFile(resume)}>Resume</Button>
                    <Button onClick={() => window.open(linkedin)}>LinkedIn</Button>
                </AboutRow3>
            </AboutWrapper>

        
        </AboutContainer>
        </>
    )
}

function downloadFile(filePath){
    var link=document.createElement('a');
    link.href = filePath;
    link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
    link.click();
}

export default About

// ********* STYLED COMPONENTS ************


const Heading = styled.h1 `
    width: 100%;
    height: 90px;
    font-size: 44px;
    line-height: 1.1;
    font-weight: 600;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 400px) {
        font-size: 32px;
    }

`

const AboutContainer = styled.div`

    width: 100%;
    background: var(--color-subtitle);
    
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 30px;
        height: 960px;
        position: relative;
    }

`

const AboutWrapper = styled.div`

    
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1400px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    padding-top: 60px;
    @media screen and (max-width: 768px) {
        padding: 0 30px;
        height: 960px;
        grid-auto-columns: minmax(auto, auto);
        align-items: center;
        grid-template-areas: 
            'row0'
            'row1'
            'row2'
            'row3';
    }

`

const AboutRow0 = styled.div`
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
        grid-area: row0;
        
    }
    
    
`
const AboutRow1 = styled.div`
    width: 100%;

    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
        grid-area: row1;
        max-width: 600px;
    }

`

const Summary = styled.div`
    display: flex;
    align-text: center;
    justify-content: center;
    width: 100%;
    min-width: 80%;
    max-width: 800px;
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 24px;

    @media screen and (max-width: 768px) {
        display: flex;
        width: 100%;
        position: relative;
    }

    @media screen and (max-width: 480px) {
        position: relative;
        width: 100%;
    }

`

const AboutRow2 = styled.div`
    width: 100%;
    
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';

    @media screen and (max-width:768px) {
        grid-area: row2;
        grid-auto-columns: minmax(auto, 1fr);
        align-items: center;
        grid-template-areas: 
            'col2'
            'col1';
    }

`

const AboutRow3 = styled.div`
height: 40px;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 768px) {
    grid-area: row3;
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
const TopLine = styled.p `
    color: var(--color-background2);
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 32px;
`

const Skills = styled.div `
width: 650px;

`
const SkillBar = styled.div `
background: #1DE0CA ;
width: 100%;
color: black;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
border-radius:10px;
margin: 20px 0;

`
const HtmlSkillBar = styled(SkillBar)`
width: 90%;
`
const CssSkillBar = styled(SkillBar)`
width: 90%;
`
const JavascriptSkillBar = styled(SkillBar)`
width: 75%;
`
const ReactSkillBar = styled(SkillBar)`
width: 70%;
`
const BootstrapSkillBar = styled(SkillBar)`
width: 65%;
`

const Progress = styled.div `
background: #17B09E;
width: 100%;
height: 100%;

`
const H3 = styled.div `
margin: 0 20px;
min-width: 90px;
text-align: center;
`

const P = styled.div `
background: #C1D7E6;
padding: 0 10px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
border-top-right-radius:10px;
border-bottom-right-radius:10px;

`

const ImgWrap = styled.div `
    width: 100%;
    max-width: 555px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 480px) {
        max-width: 400px;
        justify-content: flex;
    }
`

const Img = styled.img `
    width: 50%;
    margin: 0 10px 10px 0;
    padding-right: 0;
    border-top-right-radius: 100px;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 100px;
    position: relative;
    top: 0;
    cursor: pointer;
    @media screen and (max-width: 480px) {
        max-width: 400px;
        width: 50%;
        justify-content: flex;
    }

`
