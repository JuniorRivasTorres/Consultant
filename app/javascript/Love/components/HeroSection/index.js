import React, { useState } from 'react';
import Video from '../../videos/nycstreet.mp4';
import {Button} from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowFoward, ArrowRight} from './HeroElements';


const HeroSection = () => {
    const [hover, setHover] = useState (false);

    const onHover = () => {
        setHover(!hover);
    };


    return (
        <HeroContainer id='home'>
        <HeroBg>
           <VideoBg autoPlay loop muted src={Video} type='video/
           mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Junior Rivas Torres </HeroH1>
            <HeroP>
                Sign up for a new account 
            </HeroP>
            <HeroBtnWrapper>
                <Button
                 to='signup'
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary='true'
                  dark='true'
                  smooth={true}
                  duration={500} 
                  spy={true} 
                  exact='true' 
                  offset={-80}

                  >
                    Get started {hover ? <ArrowFoward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
