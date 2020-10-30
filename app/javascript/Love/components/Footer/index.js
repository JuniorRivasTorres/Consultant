import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';
import {animateScroll as scroll } from 'react-scroll';
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };    
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">À propos </FooterLink>
                                <FooterLink to="/signin">Comment ca marche  </FooterLink>
                                <FooterLink to="/signin">Temoignage </FooterLink>
                                <FooterLink to="/signin">Carriere </FooterLink>
                                <FooterLink to="/signin">Documentation </FooterLink>
                                <FooterLink to="/signin">Condition d'utilisation </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contacter nous</FooterLinkTitle>
                                <FooterLink to="/Contact">À propos </FooterLink>
                                <FooterLink to="/Support">Comment ca marche  </FooterLink>
                                <FooterLink to="/Destinations">Temoignage </FooterLink>
                                <FooterLink to="/Sponsorships">Carriere </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                            <FooterLinkTitle>Vieos</FooterLinkTitle>
                                <FooterLink to='/'>Submit Video</FooterLink>
                                <FooterLink to='/'>Ambassador</FooterLink>
                                <FooterLink to='/'>Agency</FooterLink>
                                <FooterLink to='/'>Influencer</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to='/'>Instagram</FooterLink>
                                <FooterLink to='/'>Facebook</FooterLink>
                                <FooterLink to='/'>Youtube</FooterLink>
                                <FooterLink to='/'>Twitter</FooterLink>
                                <FooterLink to='/'>Linkedin</FooterLink>
                    </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia> 
                   <SocialMediaWrap>
                       <SocialLogo to ='/'onClick={toggleHome}>
                           dolla
                       </SocialLogo>   
                       <WebsiteRights>dolla @2020{new Date().getFullYear()} All rights reserved.</WebsiteRights>
                       <SocialIcons>
                           <SocialIconLink href='/' target="_blank"
                           aria-label= "Facebook">
                              <FaFacebook/>
                           </SocialIconLink>
                           <SocialIconLink href='/' target="_blank"
                           aria-label= "Instagram">
                              <FaInstagram/>
                           </SocialIconLink>
                           <SocialIconLink href='/' target="_blank"
                           aria-label= "Youtube">
                              <FaYoutube/>
                           </SocialIconLink>
                           <SocialIconLink href='//www.twitter.com' target="_blank"
                           aria-label= "Twitter">
                              <FaTwitter/>
                           </SocialIconLink>
                           <SocialIconLink href='/' target="_blank"
                           aria-label= "Linkedin">
                              <FaLinkedin/>
                           </SocialIconLink>
                           </SocialIcons>
                   </SocialMediaWrap>
                </SocialMedia>      
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
