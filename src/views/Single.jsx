import { useLocation, useNavigate } from 'react-router';

export default function Single() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const item = state?.item;

  if (!item) return null;
    return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h2>{item.title}</h2>
      <p><strong>Owner:</strong> {item.username}</p>
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
