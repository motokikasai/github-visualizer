import React, { useState, useEffect } from 'react';
import DropdownStyles from './styles/DropdownStyles';
import { Flipper, Flipped } from 'react-flip-toolkit';
import {
  RepoIcon,
  StarIcon,
  RepoForkedIcon,
  TriangleDownIcon,
} from '@primer/octicons-react';
import styled from 'styled-components';

const ReposStyles = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px;

  header {
    display: flex;
    align-items: center;
  }

  header .dropdown-wrapper {
    display: flex;
    align-items: center;
    padding-left: 20px;
  }

  .repo-list {
    /* welll......... */
  }

  .repo-list ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1140px;
    margin: 0 auto;
    padding: 20px;

    & li > .li-wrapper {
      background: white;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0px 4px 14px #00000050;
      transition: 0.2s;
      &:hover {
        box-shadow: 0px 2px 6px #00000060;
      }
    }
  }
`;

// const FlipAnimater = forwardRef((props, ref) => (
//   <div ref={ref}>{props.children}</div>
// ));

const Repos = ({ repoData }) => {
  //   console.log(repoData);
  const [topRepos, setTopRepos] = useState([]);
  const [sortType, setSortType] = useState('stars');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const getTopRepos = type => {
      const LIMIT = 12;
      const map = {
        stars: 'stargazers_count',
        forks: 'forks_count',
        size: 'size',
      };

      const sortProp = map[type];
      const sorted = repoData
        .filter(repo => !repo.fork)
        .sort((a, b) => b[sortProp] - a[sortProp])
        .slice(0, LIMIT);

      setTopRepos(sorted);
    };

    getTopRepos(sortType);
  }, [repoData, sortType]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeRepoSort = sortType => {
    setSortType(sortType);
    toggleDropdown();
  };

  const sortTypes = ['stars', 'forks', 'size'];

  return (
    <section>
      <ReposStyles>
        <header>
          <h2>Top Repos</h2>
          <div className='dropdown-wrapper'>
            <span className='label'>by</span>
            <DropdownStyles active={dropdownOpen}>
              <div>
                <button
                  className='dropdown__button'
                  onClick={() => toggleDropdown()}
                >
                  <label>{sortType}</label>
                  <TriangleDownIcon size='small' className='octicon--sm' />
                </button>
                <ul className='dropdown__list'>
                  {sortTypes.map((type, i) => (
                    <li className='dropdown__list-item' key={i}>
                      <button onClick={() => changeRepoSort(type)}>
                        {type}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </DropdownStyles>
          </div>
        </header>

        <div className='repo-list'>
          <Flipper flipKey={topRepos}>
            <ul>
              {topRepos.map(repo => (
                <Flipped flipId={repo.id} key={repo.id}>
                  <li>
                    <div className='li-wrapper'>
                      <a
                        href={repo.html_url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <div className='repo__top'>
                          <div className='repo__name'>
                            <RepoIcon size='small' className='octicon--sm' />
                            <h3>{repo.name}</h3>
                          </div>
                          <p>{repo.description}</p>
                        </div>
                        <div className='repo__stats'>
                          <div className='repo__stats--left'>
                            <span>
                              {/* <div
                            className='language'
                            style={{ color: 'red' }}
                          ></div> */}
                              {repo.language}
                            </span>
                            <span>
                              <StarIcon size='small' className='octicon--sm' />
                              {repo.stargazers_count.toLocaleString()}
                            </span>
                            <span>
                              <RepoForkedIcon
                                size='small'
                                className='octicon--sm'
                              />
                              {repo.forks.toLocaleString()}
                            </span>
                          </div>
                          <div className='repo__stats--right'>
                            <span>{repo.size.toLocaleString()} KB</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                </Flipped>
              ))}
            </ul>
          </Flipper>
        </div>

        {/* <div className='repo-list'>
          {topRepos.length > 0 ? (
            <FlipMove typeName='ul'>
              {topRepos.map(repo => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='repo'
                  >
                    <div className='repo__top'>
                      <div className='repo__name'>
                        <RepoIcon size='small' className='octicon--sm' />
                        <h3>{repo.name}</h3>
                      </div>
                      <p>{repo.description}</p>
                    </div>
                    <div className='repo__stats'>
                      <div className='repo__stats--left'>
                        <span>
                          <div
                            className='language'
                            style={{
                              backgroundColor: 'hotpink',
                            }}
                          />
                          {repo.language}
                        </span>
                        <span>
                          <StarIcon size='small' className='octicon--sm' />
                          {repo.stargazers_count.toLocaleString()}
                        </span>
                        <span>
                          <RepoForkedIcon
                            size='small'
                            className='octicon--sm'
                          />
                          {repo.forks.toLocaleString()}
                        </span>
                      </div>
                      <div className='repo__stats--right'>
                        <span>{repo.size.toLocaleString()} KB</span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </FlipMove>
          ) : (
            <p>No available repositories!</p>
          )}
        </div> */}
      </ReposStyles>
    </section>
  );
};

export default Repos;
