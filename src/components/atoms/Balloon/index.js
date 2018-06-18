 import React from 'react';
 import styles from './styles.css';

const Balloon = ({children, ...props}) => (<span className={styles.balloon}{...props}>{children}</span>);

 export default Balloon;