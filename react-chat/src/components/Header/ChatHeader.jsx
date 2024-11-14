import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

export const ChatHeader = ({ avatar, name }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.leftside}>
      <button
        className={`${styles.iconButton} back`}
        id="btn-back-header"
        onClick={() => navigate('/')}>
        <ArrowBackIosNewRoundedIcon />
      </button>
      <div className={styles.chatHeader}>
        <div className={styles.photo}>
          <img className={styles.photo} src={avatar} alt="person photo" />
        </div>
        <div className={styles.nameAndStatus}>
          <div className={styles.name}>{name}</div>
          <div className={styles.online}>online</div>
        </div>
      </div>
    </div>
  );
};
