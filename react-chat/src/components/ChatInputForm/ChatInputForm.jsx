import React, { useState } from 'react';
import AttachmentRoundedIcon from '@mui/icons-material/AttachmentRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import styles from './ChatInputForm.module.scss';
import { useDebounce } from '../../utils/hooks/useDebounce';
import { useMessages } from '../../context/MessagesContext';

export const ChatInputForm = ({ chatId, scrollToDiv }) => {
  const { addMessage } = useMessages();
  const [message, setMessage] = useState('');
  const debouncedSearchValue = useDebounce(message, 200);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (!debouncedSearchValue.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: debouncedSearchValue.trim(),
      sender: chatId,
      time: new Date().toLocaleTimeString().slice(0, 5),
    };
    addMessage(chatId, newMessage);
    setMessage('');
    scrollToDiv();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMessage();
  };

  return (
    <footer>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <button type="submit" className={`${styles.iconButton} file`}>
          <AttachmentRoundedIcon />
        </button>
        <input
          className={styles.formInput}
          name="message-text"
          placeholder="Введите сообщение"
          type="text"
          value={message}
          autoComplete="off"
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              handleFormSubmit(e);
            }
          }}
        />
        <button type="submit" className={styles.sendButton}>
          <SendRoundedIcon />
        </button>
      </form>
      <button className={styles.scrollDownButton}>
        <KeyboardArrowDownRoundedIcon />
      </button>
    </footer>
  );
};
