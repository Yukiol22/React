import { useMedia } from '../hooks/apiHooks';
import MediaRow from '../components/MediaRow';

export default function Home(props) {
  const { setSelectedItem } = props;
  const { mediaArray } = useMedia();

  return (
    <div>
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
    </div>
  );
}