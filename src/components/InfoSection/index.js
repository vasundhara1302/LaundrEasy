import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    Heading,
    Subtitle,
    Column2,
    Img,
    ImgWrap,
    //InfoH1
  } from "./InfoElements";
  import { Button } from "../ButtonElements";
  
  const InfoSection = ({
    lightBg,
    id,
    imgStart,
    lightText,
    darkText,
    description,
    //buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2,
  }) => {
    return (
      <>
      {/* <InfoH1>
            The complete solution for your laundry needs
          </InfoH1> */}
        <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  {/* <TopLine>{topLine}</TopLine> */}
                  <Heading lightText={lightText}>Heading</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </>
    );
  };
  
  export default InfoSection;