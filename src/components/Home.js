import React from 'react';
import styled from 'styled-components';
import IconOctocat from '../assets/github-icon-light.png';
import Corner from './Corner.js';

function Home() {
  return (
    <div className='search-container'>
      <Corner />
      <div className='gh-icon'>
        <img src={IconOctocat} alt='Github icon' />
      </div>
      <div className='search-label'>Find Your Favorite GitHub Profile</div>
    </div>
  );
}

export default Home;
