import React from 'react';
import styled from 'styled-components';
import IconOctocat from '../static/assets/github-icon-light.png';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  background: #000f1d;
  color: white;
  font-size: 1.2rem;

  img {
    width: 100px;
    border: 8px solid #141b2f;
    border-radius: 50%;
    /* box-shadow: 2px 2px 15px white, -2px -2px 15px gray; */
    box-shadow: 2px 2px 15px rgb(255 255 255 / 0.3),
      -2px -2px 15px rgb(255 255 255 / 0.3);
  }

  div > span {
    margin: 0 10px;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 150px));
    grid-gap: 0.5rem;
    justify-content: center;
    margin-top: 2rem;

    &__item {
      display: flex;
      align-items: center;
      flex-direction: column;
      background: #141b2f;
      padding: 15px;
      border-radius: 4px;
    }
  }
`;

function UserInfo() {
  return (
    <>
      <Section>
        <div className='profile-img'>
          <img src={IconOctocat} alt='profile picture' />
        </div>
        <h1>My Name here...</h1>
        <div>@motokikasai (eg...)</div>
        <div>
          <span>Address</span>
          <span>Joined: April 26, 1977</span>
        </div>

        <div className='stats'>
          <div className='stats__item'>
            <span className='num'>
              {/* userData.public_repos.toLocaleString() */} 1000
            </span>
            <span className='num-label'>Repositories</span>
          </div>
          <div className='stats__item'>
            <span className='num'>
              {/* userData.followers.toLocaleString() */} 2000
            </span>
            <span className='num-label'>Followers</span>
          </div>
          <div className='stats__item'>
            <span className='num'>
              {/* userData.following.toLocaleString() */} 3000
            </span>
            <span className='num-label'>Following</span>
          </div>
        </div>
      </Section>
    </>
  );
}

export default UserInfo;
