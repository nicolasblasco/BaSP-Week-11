import React from 'react';
import styles from './table.module.css';

const Table = ({ data, deleteItem }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td></td>
              <td>
                <button className={styles.deleteButton} onClick={() => deleteItem(item.id)}>
                  X
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
