import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import logo from '../images/NutriTimeLogo.png';

export const Header = ({ title }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logoAndTitle}>
        <img src={logo}></img>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
