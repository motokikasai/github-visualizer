import React from 'react';
import styled from 'styled-components';
import IconOctocat from '../assets/github-icon-light.png';
import Corner from './Corner.js';

const HomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #280a28;
  color: white;
`;

const OctocatIcon = styled.img`
  width: 80px;
  padding: 20px;
`;

const SearchField = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SearchLabel = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const SearchInput = styled.input`
  padding: 10px 28px;
  font-size: 2rem;
  margin: 14px;
  text-align: center;
  color: hotpink;
  border-style: none;
  border-radius: 5px;
  background: #331a33;
`;

function Home() {
  return (
    <HomePage>
      <div className='search-container'>
        <Corner />
        <SearchField className='gh-icon'>
          <OctocatIcon src={IconOctocat} alt='Github icon' />
          <SearchLabel>Find Your Favorite GitHub Profile</SearchLabel>
          <SearchInput type='text' />
        </SearchField>
      </div>
    </HomePage>
  );
}

export default Home;
