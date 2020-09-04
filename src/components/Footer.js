import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  color: gray;
  padding: 20px;
`;

const ElemSeparator = styled.div`
  span,
  a {
    margin: 0 5px;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <ElemSeparator>
        <span>Built with</span>
        <a
          href='https://reactjs.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          React
        </a>
        &middot;
        <a
          href='https://www.chartjs.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Chart.js
        </a>
        &middot;
        <a
          href='https://github.com/IonicaBizau/node-gh-polyglot'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub Polyglot
        </a>
        &middot;
        <a
          href='https://www.styled-components.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Styled Components
        </a>
        &middot;
        <a
          href='https://github.com/joshwcomeau/react-flip-move'
          target='_blank'
          rel='noopener noreferrer'
        >
          React Flip Move
        </a>
      </ElemSeparator>
    </StyledFooter>
  );
}

export default Footer;
