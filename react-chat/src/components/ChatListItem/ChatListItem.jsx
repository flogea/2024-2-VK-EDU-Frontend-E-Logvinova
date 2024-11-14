import React from 'react';
import styles from './ChatListItem.module.scss';
import PropTypes from 'prop-types';

export const ChatListItem = ({ avatar, name, lastMessage, onClick }) => {
  return (
    <li className={styles.chatItem} onClick={onClick}>
      <div className={styles.chatAvatar}>
        <img className={styles.chatAvatar} src={avatar} alt={name} />
      </div>
      <div className={styles.chatDetails}>
        <div className={styles.chatName}>{name}</div>
        <div className={styles.chatLastMessage}>
          {lastMessage ? lastMessage : 'Упс! Тут пока пусто...'}
        </div>
      </div>
    </li>
  );
};

ChatListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  lastMessage: PropTypes.string,
  onClick: PropTypes.func,
};
