import React from 'react';
import styled from 'styled-components';

const ReposStyles = styled.div`
  background: #999;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px;
`;

const Repos = ({ repoData }) => {
  //   console.log(repoData);
  return (
    <ReposStyles>
      <h3>hello Repos!</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ratione
        beatae quam dicta illum voluptates numquam, nostrum nesciunt cumque
        commodi mollitia quibusdam a sit fugiat? Nam rerum sapiente obcaecati.
        Error!
      </p>
    </ReposStyles>
  );
};

export default Repos;
