import React from 'react';
import IconOctocat from '../assets/github-icon-light.png';
import Corner from './Corner.js';

function Search() {
  return (
    <div className='search-container'>
      <Corner />
      <div className='gh-icon'>
        <img src={IconOctocat} alt='Github icon' style={{ width: '60px' }} />
      </div>
      <div className='search-label'>Find Your Favorite GitHub Profile</div>
    </div>
  );
}

export default Search;
