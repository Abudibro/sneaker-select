import React from 'react'
import {SignInCard, CardTitle, FormLabel, FormInput, SignInBtn } from './SignIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function SignUp() {
    return (
        <div style={{minHeight: 'calc(100vh - 140px)', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0'}}>
            <form  >
                <SignInCard>
                    <CardTitle>Register</CardTitle>
                    <FormLabel>
                        <FontAwesomeIcon icon='user' />
                        <FormInput type='email' placeholder='Email'/>
                    </FormLabel>
                    <FormLabel>
                        <FontAwesomeIcon icon='lock' />
                        <FormInput type='password' placeholder='Password' />
                    </FormLabel>

                    <SignInBtn>Register <FontAwesomeIcon icon='arrow-right' className='arrow-right-sign-in' style={{width: '12px', transition: 'all .3s ease', marginLeft: '3px'}} /></SignInBtn>
                    <p style={{marginTop: '15px'}}>Already a member? <Link style={{color: 'black'}} to='/signin' >Sign In</Link></p>
                </SignInCard>
            </form>
        </div>
    )
}

export default SignUp
