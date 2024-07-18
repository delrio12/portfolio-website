import React from 'react'
import styled from 'styled-components'

const Home = ({name, description1, description2}) => {
    return (
        <HomeContainer id='home'> 
            <HomeBg>
                <VideoBg autoPlay loop muted src={ "https://firebasestorage.googleapis.com/v0/b/portfolio-website-582f4.appspot.com/o/images%2Fvideo.mp4?alt=media&token=9f68981a-5da8-4cab-b820-504cf6208f83"} type="video/mp4" />
            </HomeBg>
            <HomeContent>
                <HomeP>{description1}</HomeP>
                <HomeH1>{name}</HomeH1>
                <HomeP>{description2}</HomeP>
            </HomeContent>
        </HomeContainer>
    )
}

export default Home






// ******************************************** STYLED COMPONENTS *********************************************

const HomeContainer = styled.div`
    background: var(--color-background);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 960px;
    position: relative;
    z-index: 1;
    
    @media screen and (max-width: 768px) {
        height: 100vh;
        overflow: auto;
        max-height: 812px;
    }

    @media screen and (max-width: 480px) {
        max-height: 812px;
        height: 100vh;
        overflow: auto;
    }
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
    width: 100%;
    max-width: 1500px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center;
    color: var(--color-title);

    @media screen and (max-width: 768px) {
        position: relative;
    }

    @media screen and (max-width: 480px) {
        position: relative;
    }

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