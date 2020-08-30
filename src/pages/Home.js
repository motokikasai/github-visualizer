import React from 'react';
import styled from 'styled-components';
import IconOctocat from '../assets/github-icon-light.png';
import Corner from '../components/Corner.js';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #280a28;
  color: white;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 80px;
    padding: 20px;
  }
  label {
    font-size: 1.5rem;
    font-weight: bold;
  }
  input {
    padding: 10px 28px;
    font-size: 2rem;
    margin: 14px;
    text-align: center;
    color: hotpink;
    border-style: none;
    border-radius: 5px;
    background: #331a33;
    &:focus {
      outline: none;
    }
  }
`;

// const OctocatIcon = styled.img`
//   width: 80px;
//   padding: 20px;
// `;

// const SearchField = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
// `;

// const SearchLabel = styled.div`
//   font-size: 1.5rem;
//   font-weight: bold;
// `;

// const SearchInput = styled.input`
//   padding: 10px 28px;
//   font-size: 2rem;
//   margin: 14px;
//   text-align: center;
//   color: hotpink;
//   border-style: none;
//   border-radius: 5px;
//   background: #331a33;
//   &:focus {
//     outline: none;
//   }
// `;

function Home() {
  return (
    <HomeContainer>
      {/* <div className='search-container'> */}
      <Corner />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Routing logic...
        }}
      >
        {/* <SearchField className='gh-icon'> */}
        <img src={IconOctocat} alt='Github icon' />
        <label>GitHub Handle/Profile</label>
        <input type='text' />
        {/* </SearchField> */}
      </form>
      {/* </div> */}
    </HomeContainer>
  );
}

export default Home;
