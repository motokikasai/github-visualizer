import React from 'react';
import styled from 'styled-components';
import {
  BriefcaseIcon,
  CalendarIcon,
  LocationIcon,
} from '@primer/octicons-react';

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
    width: 200px;
    border: 8px solid #141b2f;
    border-radius: 50%;
    /* box-shadow: 2px 2px 15px white, -2px -2px 15px gray; */
    box-shadow: 2px 2px 15px rgb(255 255 255 / 0.3),
      -2px -2px 15px rgb(255 255 255 / 0.3);
  }

  h1 {
    margin-block-end: 10px;
    font-size: 2.4rem;
  }

  h2 {
    margin-block-start: 0;
  }

  div > span {
    margin: 0 10px;

    & > .octicon--sm {
      padding: 4px 8px;
    }
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

      & > .num {
        font-size: 1.6rem;
      }

      & > .num-label {
        padding: 6px;
        color: #b9b9b9;
      }
    }
  }
`;

function UserInfo({ userInfo }) {
  console.log(userInfo);
  return (
    <>
      <Section>
        <div className='profile-img'>
          <img src={userInfo.avatar_url} alt='profile' />
        </div>

        {userInfo.name && <h1>{userInfo.name}</h1>}

        {userInfo.login && (
          <h2>
            <a
              href={userInfo.html_url}
              target='_blank'
              rel='noopener noreferrer'
            >
              @{userInfo.login}
            </a>
          </h2>
        )}

        <div>
          {userInfo.company && (
            <span>
              <BriefcaseIcon size='small' className='octicon--sm' />
              {userInfo.company}
            </span>
          )}
          {userInfo.location && (
            <span>
              <LocationIcon size='small' className='octicon--sm' />
              {userInfo.location}
            </span>
          )}
          {userInfo.location && (
            <span>
              <CalendarIcon size='small' className='octicon--sm' />
              Joined:{' '}
              {new Date(userInfo.created_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          )}
        </div>

        <div className='stats'>
          <div className='stats__item'>
            <span className='num'>
              {userInfo.public_repos.toLocaleString()}
            </span>
            <span className='num-label'>Repositories</span>
          </div>
          <div className='stats__item'>
            <span className='num'>{userInfo.followers.toLocaleString()}</span>
            <span className='num-label'>Followers</span>
          </div>
          <div className='stats__item'>
            <span className='num'>{userInfo.following.toLocaleString()}</span>
            <span className='num-label'>Following</span>
          </div>
        </div>
      </Section>
    </>
  );
}

export default UserInfo;
