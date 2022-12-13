import LogoWhite from '../../assets/logo_white.svg';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: black;
  text-align: center;
  line-height: 5em;
`;

const HomeLogo = styled.img`
  padding-top: 0.5em;
`;

const Copyright = styled.p`
  margin-bottom: 0;
  font-size: 24px;
  font-weight: 400;
  color: white;
`;

function Footer() {
  return (
    <FooterContainer>
      <HomeLogo src={LogoWhite} alt="logo kasa en blanc" />
      <Copyright>© 2022 Kasa. All rights reserved</Copyright>
    </FooterContainer>
  );
}
export default Footer;
