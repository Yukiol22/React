import { Link } from 'react-router';

export default function Single(props) {
  const { item } = props;

  if (!item) return null;

  return (
    <div>
      <Link to="/">
        <button>Go back</button>
      </Link>
      <h2>{item.title}</h2>
      {item.media_type.includes('video') ? (
        <video controls src={item.filename} width="100%" />
      ) : (
        <img src={item.filename} alt={item.title} width="100%" />
      )}
      <p>{item.description}</p>
      <p>Created: {new Date(item.created_at).toLocaleDateString()}</p>
    </div>
  );
}