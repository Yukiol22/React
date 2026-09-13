export default function MediaRow(props) {
  const { item, setSelectedItem } = props;

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
      <td>{item.user_id}</td>
      <td>
        <button onClick={() => setSelectedItem(item)}>
          View
        </button>
      </td>
    </tr>
  );
}