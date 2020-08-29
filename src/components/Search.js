import React from 'react';
import IconOctocat from '../assets/github-icon-light.png';

function Search() {
  return (
    <div className='search-container'>
      <div className='gh-icon'>
        <img src={IconOctocat} alt='Github icon' style={{ width: '60px' }} />
      </div>
      <div className='search-label'>Find Your Favorite GitHub Profile</div>
    </div>
  );
}

export default Search;
