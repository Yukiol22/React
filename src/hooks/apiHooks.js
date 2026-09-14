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
        console.error('Failed to fetch media data:', error);
      }
    };

    getMedia();
  }, []);

  return { mediaArray };
};

export { useMedia };