<<<<<<< HEAD
export default function MediaRow(props) {
  const { item, setSelectedItem } = props;

=======
import { useNavigate } from 'react-router';
export default function MediaRow(props) {
  const { item } = props;
  const navigate = useNavigate();
>>>>>>> forms
  return (
    <tr>
      <td>
        <img
          src={item.thumbnail}
          alt={item.title}
          style={{ width: '100px', height: 'auto' }}
        />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleDateString()}</td>
      <td>{item.filesize} bytes</td>
      <td>{item.media_type}</td>
<<<<<<< HEAD
      <td>{item.user_id}</td>
      <td>
        <button onClick={() => setSelectedItem(item)}>
=======
      <td>{item.username}</td>
      <td>
        <button onClick={() => navigate('/single', { state: { item } })}>
>>>>>>> forms
          View
        </button>
      </td>
    </tr>
  );
}