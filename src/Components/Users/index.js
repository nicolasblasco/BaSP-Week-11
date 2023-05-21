import { useEffect, useState } from 'react';
import styles from './users.module.css';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((response) => {
        setUsers(response);
      });
  }, []);

  return (
    <section className={styles.container}>
      <h2>Users</h2>
      <div>
        {users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
      </div>
    </section>
  );
}

export default Users;
