import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialIcons>
                            <SocialIconLink href="https://www.linkedin.com/in/andresdelrio11/" target="_blank" aria-label="LinkedIn">
                            <LinkedInIcon/>
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/delrio12" target="_blank" aria-label="Github">
                            <GitHubIcon/>
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/DevRio11" target="_blank" aria-label="Twitter">
                            <TwitterIcon/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/andresdelrio11/" target="_blank" aria-label="Instagram">
                            <InstagramIcon/>
                            </SocialIconLink>
                        </SocialIcons>
                        <WebsiteRights>
                            Built by Andres Del Rio © {new Date().getFullYear()}. All rights reserved.
                        </WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        </>
    )
}

export default Footer

// ********* STYLED COMPONENTS ************

const FooterContainer = styled.footer `
    background-color: #000;
`

const FooterWrap = styled.div `
    padding: 6px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
`

const SocialMedia = styled.section `
    max-width: 1000px;
    width: 100%;
`

const SocialMediaWrap = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 20px auto 0 auto;
`

const WebsiteRights = styled.small `
    color: var(--color-subtitle);
    margin: 16px 0;
    font-weight: 300;
    cursor: pointer;
`

const SocialIcons = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    
`

const SocialIconLink = styled.a `
    color: var(--color-subtitle);
    font-size: 24px;
    margin: 0 16px;
    transition-duration: 0.2s;
    transition-property: transform;  
    
    &:hover {
      transform: scale(1.1);
      color: #fff;
    }
`