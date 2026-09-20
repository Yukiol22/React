import { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetchData';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const mediaData = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');
        const mediaWithUser = await Promise.all(
          mediaData.map(async (item) => {
            const userData = await fetchData(
              import.meta.env.VITE_AUTH_API + '/users/' + item.user_id
            );
            return { ...item, username: userData.username };
          })
        );
        setMediaArray(mediaWithUser);
      } catch (error) {
        console.error('Failed to fetch media:', error);
      }
    };
    getMedia();
  }, []);

  return { mediaArray };
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    return await fetchData(import.meta.env.VITE_AUTH_API + '/auth/login', fetchOptions);
  };

  return { postLogin };
};

const useUser = () => {
  const getUserByToken = async (token) => {
    const fetchOptions = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return await fetchData(import.meta.env.VITE_AUTH_API + '/users/token', fetchOptions);
  };

  const postUser = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    return await fetchData(import.meta.env.VITE_AUTH_API + '/users', fetchOptions);
  };

  return { getUserByToken, postUser };
};

export { useMedia, useAuthentication, useUser };