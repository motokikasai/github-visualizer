import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <div>
        <span>Built with</span>
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
      </div>
    </StyledFooter>
  );
}

export default Footer;
