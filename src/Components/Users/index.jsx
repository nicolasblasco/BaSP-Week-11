import { useEffect, useState } from 'react';
import styles from './users.module.css';
import Table from './Table';
import Form from './Form';

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const addItem = ({ name, email }) => {
    const newItem = {
      id: Math.floor(Math.random() * 1000),
      name,
      email
    };
    setUsers([...users, newItem]);
  };

  const deleteItem = (id) => {
    setUsers([...users.filter((user) => user.id !== id)]);
  };

  return (
    <section className={styles.container}>
      <h2>Users</h2>
      <Form addItem={addItem} />
      <Table data={users} deleteItem={deleteItem} />
    </section>
  );
};

export default Users;
