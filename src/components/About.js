import React from 'react'
import styled from 'styled-components'

const About = ({img, alt}) => {
    return (
        <AboutContainer id='about'> 
            {/* <AboutBg>
                <VideoBg autoPlay loop muted src={ Video } type="video/mp4" />
            </AboutBg> */}
            <AboutWrapper>
                <Heading>About Me</Heading>
                <AboutRow>
                        <Column1>
                            <Skills>
                                <SkillBar>
                                    <H3>HTML</H3>
                                    <Progress />
                                    <P>90%</P>
                                </SkillBar>
                                <SkillBar>
                                    <H3>CSS</H3>
                                    <Progress />
                                    <P>90%</P>
                                </SkillBar>
                                <SkillBar>
                                    <H3>JavaScript</H3>
                                    <Progress />
                                    <P>60%</P>
                                </SkillBar>
                                <SkillBar>
                                    <H3>React</H3>
                                    <Progress />
                                    <P>70%</P>
                                </SkillBar>
                                <SkillBar>
                                    <H3>Bootstrap</H3>
                                    <Progress />
                                    <P>65%</P>
                                </SkillBar> 
                            </Skills>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap> 
                        </Column2>
                </AboutRow>
            </AboutWrapper>
        
        </AboutContainer>
    )
}

export default About

// ********* STYLED COMPONENTS ************

const Heading = styled.h1 `
    width: 100%;
    height: 100px;
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
  
    padding: 0 30px;
    height: 960px;
    position: relative;
    z-index: 1;
`

const AboutBg = styled.div`

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

`
const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';

    @media screen and (max-width:768px) {
        grid-template-areas: 'col2' 'col1';
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
const Progress = styled.div `
background: #17B09E;
width: 90%;
height: 100%;

`
const H3 = styled.div `
margin: 0 20px;
width: 18%;
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
    justify-content: center;
    align-items: center;
`

const Img = styled.img `
    width: 50%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-top-right-radius: 100px;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 100px;
    position: relative;
    top: 0;
    
    cursor: pointer;

`
