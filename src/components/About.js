import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const About = ({img, alt, resume}) => {
    return (
        <>
        <AboutContainer id='about'> 
            {/* <AboutBg>
                <VideoBg autoPlay loop muted src={ Video } type="video/mp4" />
            </AboutBg> */}
            <AboutWrapper>
                <Heading>About Me</Heading>
                <AboutRow1>
                    <Summary>
                    Nisi quis magna ad consectetur labore magna irure. Mollit eiusmod veniam et ipsum dolor adipisicing Lorem occaecat excepteur ex quis est sit officia. Non occaecat irure cillum et duis. Qui in non minim laboris. Est voluptate incididunt mollit qui.
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
                    <Button onClick={() => window.open(resume)}>Resume</Button>
                </AboutRow3>
            </AboutWrapper>

        
        </AboutContainer>
        </>
    )
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
    background: var(--color-subtitle);
    
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }

`

const AboutBg = styled.div`
    background: var(--color-subtitle);
    max-width: 1400px;
`

const AboutWrapper = styled.div`
    display:grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1400px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    padding-top: 60px;

`
const AboutRow1 = styled.div`
    min-width: 100%;
    display: flex;
    justify-content: center;
    

`

const Summary = styled.div`
    align-text: center;
    min-width: 80%;
    display: grid;
    max-width: 800px;
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 24px;

`

const AboutRow2 = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';

    @media screen and (max-width:768px) {
        grid-template-areas: 'col2' 'col1';
    }

`

const AboutRow3 = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 40px;
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
    max-width: 555px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
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

`
