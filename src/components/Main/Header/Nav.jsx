import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <NavLayout>
      <NavList>
        <li>
          <NavItem to="/">Home</NavItem>
        </li>
        <li>
          <NavItem to="/boast">Free Board</NavItem>
        </li>
        <li>
          <NavItem to="/qna">Q&A</NavItem>
        </li>
      </NavList>
    </NavLayout>
  );
};

export default Nav;

const NavLayout = styled.nav`
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  color: #12263a;
`;

const NavItem = styled(Link)`
  color: #12263a;
  font-size: 30px;
  font-weight: 600;
  &:hover {
    color: #f8db5c;
  }
`;
