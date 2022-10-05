import React from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
  WebsiteRights,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
             <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper> 
          </FooterLinksContainer>
          <SocialMedia>
              {/* <WebsiteRights>
                Follow us
              </WebsiteRights> */}
            <SocialMediaWrap>
              {/* <SocialLogo to="/">LaundrEasy</SocialLogo> */}
              <WebsiteRights>LaundrEasy &copy; {new Date().getFullYear()}
                All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;