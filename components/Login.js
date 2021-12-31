import React from 'react';

import Image from 'next/image';
import logo from '../public/assets/images/gitlab-icon-rgb.svg';
import styles from '../styles/Login.module.css';

import Cart from './Cart';

function Auth() {
  return (
    <div className={styles.container}>
      <div className={styles.leftGroup}>
        <h1 className={styles.leftGroup_title}>CHECK YOUR</h1>
        <h2 className={styles.leftGroup_description}>Profile and Projects</h2>
        <Image className={styles.leftGroup_logo} src={logo} alt="logo" />
      </div>
      <div className={styles.rightGroup}>
        <Cart />
      </div>
    </div>
  );
}

export default Auth;
