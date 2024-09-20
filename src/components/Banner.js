import React from 'react';
import styled from 'styled-components';

const BannerImg = styled.img`
  width: 30%;
  margin-bottom: 20px;
`;

class Banner extends React.Component {
  render() {
    return (   
        <BannerImg
            src="https://i.gifer.com/K0tD.gif" 
            alt="Descrição do GIF"
        />
    );
  }
}

export default Banner;
