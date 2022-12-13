import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledLink } from '../../utils/style/Atoms';
import logo from '../../assets/logo.svg';

const HomeLogo = styled.img`
  height: 68px;
`;

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={logo} />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/About">A Propos</StyledLink>
      </div>
    </NavContainer>
  );
}

export default Header;
