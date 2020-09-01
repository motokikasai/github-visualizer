import React, { useState, useEffect } from 'react';
import { Charts, Corner, Error, Repos, UserInfo, Footer } from '../components';

function User(props) {
  const username = props.match.params.user;
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState({ active: false, type: 200 });

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

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Corner />

      {userData && <UserInfo userInfo={userData} />}

      <Footer />
    </>
  );
}

export default User;
