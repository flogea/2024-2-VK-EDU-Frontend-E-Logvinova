import React from 'react';
import styles from './Header.module.scss';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export const MessengerHeader = () => {
  return (
    <div className={styles.leftside}>
      <button className={`${styles.iconButton} menu`} id="btn-menu-header">
        <MenuRoundedIcon />
      </button>
      <div className={styles.chatHeader}>
        <div className={styles.nameAndStatus}>
          <div className="name">Messenger</div>
        </div>
      </div>
    </div>
  );
};
