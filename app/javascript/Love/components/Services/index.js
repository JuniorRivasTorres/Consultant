import React from 'react'
import Icon1 from '../../images/JEPEU.svg'
import Icon2 from '../../images/newcool.jpg'
import Icon3 from '../../images/JEPEU.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id= "services">
            <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Reduce expenses</ServicesH2>
                        <ServicesP> We help reduce you fess and increase your overall revenue.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>Accéder rapidement a l'information.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Consultation privé</ServicesH2>
                        <ServicesP> Une consultation priver pour vous aider</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
        </ServicesContainer>
    )
}


export default Services
