
import MediaRow from '../components/MediaRow';
import { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetchData';
const Home = (props) => {
  const { setSelectedItem } = props;
  const [mediaArray, setMediaArray] = useState([]);
  
 useEffect(() => {
    const getMedia = async () => {
      try{
        const json = await fetchData('test.json');
        setMediaArray(json);
        
    }catch (error){
      console.error('Failed to fetch media data:', error);
    }
    };
    getMedia();
}, []);


  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
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