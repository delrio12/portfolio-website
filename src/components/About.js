import React from 'react'
import styled from 'styled-components'

const About = () => {
    return (
        <AboutContainer id='about'> 
            <AboutBg>
                {/* <VideoBg autoPlay loop muted src={ Video } type="video/mp4" /> */}
            </AboutBg>
            <AboutContent>
                <Heading>
                    About Me
                </Heading>
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
            </AboutContent>
        </AboutContainer>
    )
}

export default About

const AboutContainer = styled.div`
    background: var(--color-subtitle);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 960px;
    position: relative;
    z-index: 1;
`

const AboutBg = styled.div`

`

const AboutContent = styled.div`

`
const Heading = styled.h1 `

    margin-bottom: 24px;
    font-size: 44px;
    line-height: 1.1;
    font-weight: 600;
    color: black;

    @media screen and (max-width: 400px) {
        font-size: 32px;
    }

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
// ********* STYLED COMPONENTS ************