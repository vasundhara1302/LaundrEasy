import React from 'react';
// import Icon1 from '../../images/';
// import Icon2 from '../../images/';
// import Icon3 from '../../images/';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>How It Works</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon1}/> */}
                    <ServicesH2>Login</ServicesH2>
                    <ServicesP> Login to your account to access your personal details, laundry history and regular updates.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon1}/> */}
                    <ServicesH2>Apply</ServicesH2>
                    <ServicesP> Apply for the laundry from any device and provide required details.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon1}/> */}
                    <ServicesH2>Receive</ServicesH2>
                    <ServicesP> Receive notifications regarding your laundry service, clean clothes and a wonderful customer service.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;