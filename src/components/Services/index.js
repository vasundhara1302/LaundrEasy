import React from 'react';
// import Icon1 from '../../images/';
// import Icon2 from '../../images/';
// import Icon3 from '../../images/';
import{
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () =>{
    return (
        <ServicesContainer id="services">
            <ServicesH1>How It Works</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon1}/> */}
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP> We reduce your work load.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon1}/> */}
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP> We reduce your work load.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon1}/> */}
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP> We reduce your work load.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;