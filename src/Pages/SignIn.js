import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


export const SignInCard = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    justify-content: center;
    align-items: center;
    background: white;
    padding: 50px;
    box-shadow: 5px 5px 15px -3px rgba(0,0,0,0.64);

    @media (max-width: 499px) {
        width: 80vw;
    }
`;

export const FormLabel = styled.label`
    margin-top: 15px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 5px 0;
`;

export const FormInput = styled.input`
    padding: 3px 8px;
    border: none;
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;

    &: focus {
        outline: none;
    }

    @media (max-width: 499px) {
        width: 70%;
    }
`;

export const SignInBtn = styled.button`
    border-style: none;
    width: 120px;
    height: 45px;
    background: linear-gradient(132deg, rgba(13,13,13,1) 0%, rgb(46, 46, 46) 100%);
    color: white;
    transition: all .2s ease;
    border-radius: 20px;
    margin: 20px;
    margin-top: 55px;

    &:hover {
        opacity: 0.8;
    }

    &:hover .arrow-right-sign-in {
        transform: translate(7px, 0px);
    }
`;

export const CardTitle = styled.p`
    font-size: 28px;
    margin-bottom: 15px;
    padding: 20px;
`;

function SignIn() {
    return (
        <div style={{minHeight: 'calc(100vh - 120px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <form  >
                <SignInCard>
                    <CardTitle>Sign In</CardTitle>
                    <FormLabel>
                        <FontAwesomeIcon icon='user' />
                        <FormInput type='email' placeholder='Email'/>
                    </FormLabel>
                    <FormLabel>
                        <FontAwesomeIcon icon='lock' />
                        <FormInput type='password' placeholder='Password' />
                    </FormLabel>

                    <SignInBtn>Sign In <FontAwesomeIcon icon='arrow-right' className='arrow-right-sign-in' style={{width: '12px', transition: 'all .3s ease', marginLeft: '3px'}} /></SignInBtn>
                    <p style={{marginTop: '15px'}}>Not a member? <Link style={{color: 'black'}} to='/register' >Register</Link></p>
                </SignInCard>
            </form>
        </div>
    )
}

export default SignIn
