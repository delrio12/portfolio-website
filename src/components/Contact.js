import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { css } from 'styled-components'

const Contact = () => {
    return (
        <ContactContainer id='contact'>
            <ContactBg>
                <ContactH3>Contact Me</ContactH3>
                <ContactForm>
                    <WrapperGrid>
                        <Label>Name</Label>
                        <Input type="text"  name="name" />
                    </WrapperGrid>
                    <WrapperGrid>
                        <Label>Company</Label>
                        <Input type="text" name="company" />
                    </WrapperGrid>
                    <WrapperGrid>
                        <Label>Email Address</Label>
                        <Input type="email" name="email" />
                    </WrapperGrid>
                    <WrapperGrid>
                        <Label>Phone Number</Label>
                        <Input type="text" name="phone" />
                    </WrapperGrid>
                    <WrapperGrid full>
                        <Label>Message</Label>
                        <TextArea name="message" rows="5"></TextArea>
                    </WrapperGrid>
                    <WrapperGrid full>
                        <ButtonContainer>
                            <Button>Submit</Button>
                        </ButtonContainer>
                    </WrapperGrid>
                </ContactForm>
            </ContactBg>
        </ContactContainer>
  )
}
        
export default Contact

// ********* STYLED COMPONENTS ************

const ContactContainer = styled.div `
    background: #B7CDDB;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 960px;
    position: relative;
    z-index: 1;
   
`
const ContactBg = styled.div `
    background: #B7CDDB;
    padding: 10px 10px 20px 10px;
    border: 1px solid var(--color-background); 
    box-shadow: 10px 10px 5px #aaaaaa;
    border-radius: 10px;
    cursor: pointer;

`

const ContactH3 = styled.div`
    margin: 40px;
    font-size: 36px;
    line-height: 1.1;
    font-weight: 600;

`

const ContactForm = styled.form`
    width: 500px;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-gap: 20px; 
    margin: 40px;
    
`

const WrapperGrid = styled.div`
    ${props => props.full && css`
        grid-column: 1 / 3;
    `}

`

const Label = styled.label`
    display: block; 

`

const Input = styled.input`
    border: 1px solid var(--color-background); 
    border-radius: 5px;
    padding: 1em; 
    width: 100%; 
    background: #B7CDDB;
    &:active,:hover {
        border: 1px solid var(--color-second);
    }
    &:focus {
        outline:none !important;
    }

`

const TextArea = styled.textarea`
    border: 1px solid var(--color-background); 
    border-radius: 5px;
    padding: 1em; 
    width: 100%; 
    background: #B7CDDB;
    &:active,:hover {
        border: 1px solid var(--color-second);
    }
    &:focus {
        outline:none !important;
    }

`

const ButtonContainer = styled.div`
    margin-left: 30px;
    
`
