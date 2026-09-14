import { useNavigate } from 'react-router';
export default function MediaRow(props) {
  const { item } = props;
  const navigate = useNavigate();
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
      <td>{item.username}</td>
      <td>
        <button onClick={() => navigate('/single', { state: { item } })}>
          View
        </button>
      </td>
    </tr>
  );
}