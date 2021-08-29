import React from 'react'
import styled from 'styled-components'
import Video from '../img/video.mp4'

const Home = () => {
    return (
        <HomeContainer id='home'> 
            <HomeBg>
                <VideoBg autoPlay loop muted src={ Video } type="video/mp4" />
            </HomeBg>
            <HomeContent>
                <HomeP>Hey, I'm</HomeP>
                <HomeH1>Andres Del Rio.</HomeH1>
                <HomeP>A Web Developer &amp; Programmer based in Canada. I enjoy bringing ideas to life by creating websites, applications, or anything in between.</HomeP>
            </HomeContent>
        </HomeContainer>
    )
}

export default Home

// ********* STYLED COMPONENTS ************

const HomeContainer = styled.div`
    background: var(--color-background);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 960px;
    position: relative;
    z-index: 1;
    
`

const HomeBg = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`

const VideoBg =  styled.video `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: var(--color-background);

`

const HomeContent = styled.div `
    z-index: 3;
    max-width: 1500px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center;
    color: var(--color-title);

`

const HomeH1 = styled.h1 `
    color: var(--color-borders);
    font-size: 4rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 35px;
    cursor: pointer;

    @media screen and (max-width: 760px) {
        font-size: 3.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 3rem;
    }

    `

const HomeP = styled.p `
    margin-top: 24px;
    color: var(--color-subtitle);
    font-size: 2rem;
    font-weight: 300;
    max-width: 600px;
    cursor: pointer;

    @media screen and (max-width: 760px) {
        font-size: 1.6rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
    }

`