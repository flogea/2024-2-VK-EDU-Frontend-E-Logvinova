import React from 'react';
import styles from './Message.module.scss';

export const Message = ({ text, time }) => {
  return (
    <div className={styles.message}>
      <div className={styles.timeAndMessageBlock}>
        <div className={styles.messageTime}>{time}</div>
        <div className={styles.messageText}>{text}</div>
      </div>
    </div>
  );
};
