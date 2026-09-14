

import MediaRow from '../components/MediaRow';
import { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetchData';
const Home = (props) => {
  const { setSelectedItem } = props;
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

  console.log(mediaArray);
  return (
    <>
    <h2>Home</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Owner</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;