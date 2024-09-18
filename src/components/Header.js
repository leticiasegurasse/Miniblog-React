import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #6200ee;
  padding: 20px;
  text-align: center;
  color: white;
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <h1>Miniblog</h1>
      </HeaderContainer>
    );
  }
}

export default Header;
