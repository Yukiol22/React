const SingleView = (props) => {
  const {item, setSelectedItem} = props;

  return (
    <dialog open={!!item}>
      {item && (
        <>
          <button onClick={() => setSelectedItem(null)}>Close</button>
          <h3>{item.title}</h3>
          {item.media_type.includes('video') ? (
            <video controls src={item.filename} width="100%" />
          ) : (
            <img src={item.filename} alt={item.title} width="100%" />
          )}
          <p>{item.description}</p>
          <p>Created: {new Date(item.created_at).toLocaleDateString()}</p>
        </>
      )}
    </dialog>
  );
};

export default SingleView;
