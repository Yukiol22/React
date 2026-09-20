import { useState, useEffect } from 'react';
import { useUser } from '../hooks/apiHooks';

const Profile = () => {
  const [user, setUser] = useState(null);
  const { getUserByToken } = useUser();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await getUserByToken(token);
          setUser(response.user || response);
        } catch (error) {
          console.error('Failed to retrieve user:', error);
        }
      }
    };
    fetchUserData();
  }, []);

  if (!user) {
    return <p>No user logged in.</p>;
  }

  return (
    <div>
      <h2>Profile Information</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>User ID:</strong> {user.user_id}</p>
    </div>
  );
};

export default Profile;