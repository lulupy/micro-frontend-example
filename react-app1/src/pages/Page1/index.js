import React from 'react';
import styles from './index.module.css';

const Page1 = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>页面1</h1>
      <img  className={styles.img} src={require('../../logo.svg')} alt=""/>
    </div>
  );
}

export default Page1;