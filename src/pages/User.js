import React, { useState, useEffect } from 'react';
import { Charts, Corner, Error, Repos, UserInfo, Footer } from '../components';
import GhPolyglot from 'gh-polyglot';

function User(props) {
  const username = props.match.params.user;
  const [userData, setUserData] = useState(null);
  const [langData, setLangData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const [error, setError] = useState({ active: false, type: 200 });

  useEffect(() => {
    const getUserData = () => {
      fetch(`https://api.github.com/users/${username}`)
        .then(response => {
          if (response.status === 404) {
            return setError({ active: true, type: 404 });
          }
          if (response.status === 403) {
            return setError({ active: true, type: 403 });
          }
          return response.json();
        })
        .then(json => {
          setUserData(json);
        })
        .catch(error => {
          setError({ active: true, type: 400 });
          console.error('Error', error);
        });
    };

    const getLangData = () => {
      const me = new GhPolyglot(`${username}`);
      me.userStats((err, stats) => {
        if (err) {
          // console.log('Error', err);
          setError({ active: true, type: 400 });
        }

        // console.log(stats);
        setLangData(stats);
      });
    };

    const getRepoData = () => {
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        .then(response => {
          if (response.status === 404) {
            return setError({ active: true, type: 404 });
          }
          if (response.status === 403) {
            return setError({ active: true, type: 403 });
          }
          return response.json();
        })
        .then(json => {
          setRepoData(json);
        })
        .catch(error => {
          setError({ active: true, type: 400 });
          console.error('Error:', error);
        });
    };

    getUserData();
    getLangData();
    getRepoData();
  }, [username]);

  return (
    <main>
      {error && error.active ? (
        <Error error={error} />
      ) : (
        <>
          <Corner />

          {userData && <UserInfo userInfo={userData} />}

          {langData && <Charts langData={langData} repoData={repoData} />}

          {repoData && <Repos repoData={repoData} />}

          <Footer />
        </>
      )}
    </main>
  );
}

export default User;
