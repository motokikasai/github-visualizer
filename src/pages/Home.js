import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import IconOctocat from '../static/assets/github-icon-light.png';
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

function Home() {
  const [username, setUsername] = useState('');
  const handleChange = e => setUsername(e.target.value);

  let history = useHistory();
  // console.log(history);

  return (
    <HomeContainer>
      <Corner />
      <form
        autoComplete='off'
        onSubmit={e => {
          e.preventDefault();

          history.push(`/${username}`);

          // setUsername('');
        }}
      >
        <img src={IconOctocat} alt='Github icon' />
        <label htmlFor='username'>GitHub Handle/Profile</label>
        <input
          name='username'
          type='text'
          // value={username}
          onChange={handleChange}
        />
      </form>
    </HomeContainer>
  );
}

export default Home;
