import React from 'react'
import styled from 'styled-components';

import IG from '../Resources/IG.png';
import FB from '../Resources/FB.png'
import mastercard from '../Resources/mastercard.png';
import visa from '../Resources/visa.png';
import paypal from  '../Resources/paypal.png';
import amex from  '../Resources/amex.png';

const FooterWrapper = styled.div`
    min-height: 55vh;
    background-color: #f6f6f6;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const LinksWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    min-width: 400px;
    margin: 8% 0 8% 0;

    @media (max-width: 420px) {
        min-width: 70%;
        width: 70%;
    }
`;

const FooterTitle = styled.p`
    font-weight: 600;
    color: black;
    margin-bottom: 5px;
`;

const FooterLink = styled.p`
    color: #424242;
    &:hover {
        opacity: 0.8;
    }
    margin-bottom: 5px;
    cursor: pointer;
`;

const SocialMedia = styled.img`
    height: 24px;
    width: 24px;
    &:hover {
        opacity: 0.8;
    }
    margin-right: 8px;
    cursor: pointer;
`;

const EmailInput = styled.input`
    border-style: none;
    height: 50px;
    width: 90%;
    padding: 12px;
    background-color: #f6f6f6;
    border: 2px solid #424242;
    color: #424242;
    margin: 20px 0 10px 0;
    &:focus {
        outline: none;
    }
    @media (max-width: 420px) {
        width: 100%;
    }
`;

const SignUpButton = styled.button`
    border-style: none;
    height: 50px;
    width: 90%;
    padding: 12px;
    background-color: #424242;
    color: #f6f6f6;
    margin: 6px 0 20px 0;
    &:focus {
        outline: none;
    }
    &:hover {
        opacity: 0.8;
    }
    @media (max-width: 420px) {
        width: 100%;
    }
`;


function Footer() {
    return (
        <FooterWrapper>
            <LinksWrapper>
                <FooterTitle>Useful Links</FooterTitle>
                <FooterLink>Privacy Policy</FooterLink>
                <FooterLink style={{marginBottom: '35px'}}>Terms & Conditions</FooterLink>

                <FooterTitle>Social Media</FooterTitle>
                <div style={{display: 'flex', marginBottom: '35px'}}>
                    <SocialMedia src={IG}></SocialMedia>
                    <SocialMedia src={FB}></SocialMedia>
                </div>

                <FooterTitle>Copyright</FooterTitle>
                <FooterLink style={{marginBottom: '35px'}}>Abdurahman Hijazi © 2021</FooterLink>

                <div style={{display: 'flex', marginBottom: '35px'}}>
                    <div style={{
                        display: 'flex',
                        alignItems:'center'
                    }}>
                        <img style={{
                            height: '20px',
                            width: 'auto',
                            marginRight: '10px'
                        }} src={mastercard} alt='mastercard'/>
                        <img style={{
                            height: '20px',
                            width: 'auto',
                            marginRight: '10px'
                        }} src={visa} alt='visa'/>
                        <img style={{
                            height: '20px',
                            width: 'auto',
                            marginRight: '10px'
                        }} src={paypal} alt='paypal'/>
                        <img style={{
                            height: '20px',
                            width: 'auto',
                            marginRight: '10px'
                        }} src={amex}  alt='american express'/>
                    </div>
                </div>
            </LinksWrapper>

            <LinksWrapper>
                <FooterTitle>Subscribe to our newsletter and get 10% off</FooterTitle>
                <EmailInput type='email' placeholder='Email'/>
                <SignUpButton>Subscribe</SignUpButton>
                <FooterLink>Get regular updates on our products with our newsletter</FooterLink>
            </LinksWrapper>
        </FooterWrapper>
    )
}

export default Footer;
