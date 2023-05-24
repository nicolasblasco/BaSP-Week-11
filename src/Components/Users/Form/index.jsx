import React, { useState } from 'react';
import styles from './form.module.css';

const Form = ({ addItem }) => {
  const [user, setUser] = useState({
    name: '',
    email: ''
  });

  // const onChange = (e) => {
  //   setUser({
  //     ...user,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const onChangeNameInput = (e) => {
    setUser({
      ...user,
      name: e.target.value
    });
  };

  const onChangeEmailInput = (e) => {
    setUser({
      ...user,
      email: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addItem(user);
    setUser({
      name: '',
      email: ''
    });
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.subContainer}>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            name="name"
            type="text"
            value={user.name}
            onChange={onChangeNameInput}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            name="email"
            type="text"
            value={user.email}
            onChange={onChangeEmailInput}
          />
        </div>
      </div>
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
