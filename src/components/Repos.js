import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ReposStyles = styled.div`
  /* background: #999; */

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px;
`;

const Repos = ({ repoData }) => {
  //   console.log(repoData);
  const [topRepo, setTopRepo] = useState([]);
  const [sortType, setSortType] = useState('stars');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getTopRepos = type => {
    const LIMIT = 8;
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

    setTopRepo(sorted);
  };

  // useEffect(() => {
  //   if (repoData.length) {
  //     getTopRepos();
  //   }
  // }, []);

  useEffect(() => getTopRepos(sortType), [sortType]);

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
          <div></div>
        </header>

        <h3>hello Repos!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          ratione beatae quam dicta illum voluptates numquam, nostrum nesciunt
          cumque commodi mollitia quibusdam a sit fugiat? Nam rerum sapiente
          obcaecati. Error!
        </p>
      </ReposStyles>
    </section>
  );
};

export default Repos;
