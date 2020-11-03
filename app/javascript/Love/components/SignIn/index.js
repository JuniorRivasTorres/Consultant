import React from 'react'
import Video from '../../videos/etoilesnuitjour.mp4';
import { 
    Container,
    SignInBg,
    VideoBg,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SigninElements';

const SignIn = () => {
    return (
        <>
        <Container>
            <SignInBg>  
                <VideoBg autoPlay loop muted src={Video} type='video/
                    mp4' />
            </SignInBg>
            <FormWrap>
                <Icon to="/">FRESSA</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'>Password</FormLabel> 
                        <FormInput type='password' required/>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>    
        </>
    )
}

export default SignIn;
