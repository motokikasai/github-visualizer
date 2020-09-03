import React from 'react';
import styled from 'styled-components';
import IconOctocat from '../static/assets/github-icon-light.png';
import Corner from './Corner';

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: #180618;
  color: white;
  font-size: 1.8rem;

  img {
    width: 80px;
    padding: 20px;
  }
  label {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const Error = ({ error }) => {
  return (
    <>
      <Corner />
      <ErrorContainer>
        <img src={IconOctocat} alt='Github icon' />
        <h1>Oops, sorry!</h1>
        {error && (
          <div>
            {error.type === 403 ? (
              <p>
                Oh no, you hit the{' '}
                <a
                  href='https://developer.github.com/v3/rate_limit/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  rate limit
                </a>
                ! Try again later.
              </p>
            ) : error.type === 404 ? (
              <p>User not found!</p>
            ) : (
              <p>Something went wrong. Try again later!</p>
            )}
          </div>
        )}
      </ErrorContainer>
    </>
  );
};

export default Error;
