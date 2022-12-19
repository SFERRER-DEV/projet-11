import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledLink } from '../../utils/style/Atoms';
import logo from '../../assets/logo.svg';

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2em 0;
`;

const HomeLogo = styled.img`
  height: 68px;
`;

function Header() {
  return (
    <header>
      <Link to="/">
        <HomeLogo src={logo} />
      </Link>
      <NavContainer>
        <StyledLink activeClassName="navlink" to="/home">
          Accueil
        </StyledLink>
        <StyledLink activeClassName="navlink" to="/About">
          A Propos
        </StyledLink>
      </NavContainer>
    </header>
  );
}

export default Header;
