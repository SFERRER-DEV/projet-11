import LogoWhite from '../../assets/logo_white.svg';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const FooterContainer = styled.footer`
  display: flex;
  line-height: 3.5em;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2.5em 0;
  @media (max-width: 767px) {
    padding: 1em 0;
    line-height: 2em;
  }
  background-color: ${colors.background};
`;

const HomeLogo = styled.img`
  height: 2.25em;
  @media (max-width: 767px) {
    height: 1.75em;
  }
`;

const Copyright = styled.p`
  font-size: 1.5em;
  font-weight: 500;
  color: white;
  @media (max-width: 767px) {
    font-size: 1em;
  }
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
