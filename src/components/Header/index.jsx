import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledLink1 } from '../../utils/style/Atoms';
import logo from '../../assets/logo.svg';

const PageHeader = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  padding: 1.5em 0em 0em 1.5em;
  margin: 0 auto;
  @media (max-width: 767px) {
    padding: 0.5em;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2em 0;
  @media (max-width: 767px) {
    padding: 1em 0;
    & a {
      font-size: 1em;
      margin: 0 0.5em;
    }
  }
`;

const HomeLogo = styled.img`
  height: 3.875em;
  @media (max-width: 767px) {
    height: 2.625em;
  }
`;

function Header() {
  return (
    <PageHeader>
      <Link to="/">
        <HomeLogo src={logo} />
      </Link>
      <NavContainer>
        <StyledLink1 activeClassName="navlink" to="/home">
          Accueil
        </StyledLink1>
        <StyledLink1 activeClassName="navlink" to="/About">
          A Propos
        </StyledLink1>
      </NavContainer>
    </PageHeader>
  );
}

export default Header;
