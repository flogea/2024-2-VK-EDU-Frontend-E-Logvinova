import React, { useRef, useEffect, useState } from 'react';
import styles from './ChatPage.module.scss';
import { useParams } from 'react-router-dom';
import { useLocalStorage } from '../../utils/hooks/useLocalStorage';
import { ChatInputForm, Header, Message, ScrollButton } from '../../components';
import { useMessages } from '../../context/MessagesContext';
import useScroll from '../../utils/hooks/useScroll';

export const ChatPage = () => {
  const { id } = useParams();
  const { getMessagesByChatId } = useMessages();
  const chatMessages = getMessagesByChatId(id);
  const [divRef, scrollToDiv] = useScroll();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesContainerRef = useRef(null);

  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = messagesContainerRef.current;
      setShowScrollButton(scrollHeight - scrollTop - clientHeight > 100);
    }
  };

  useEffect(() => {
    scrollToDiv();
    const container = messagesContainerRef.current;
    if (!!container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (!!container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className={styles.main}>
      <Header type="chat" chatId={id} />
      <ul className={styles.messages} ref={messagesContainerRef}>
        {chatMessages.map((message, index) => (
          <li key={message.id} ref={index === chatMessages.length - 1 ? divRef : null}>
            <Message {...message} />
          </li>
        ))}
      </ul>
      <ChatInputForm chatId={id} scrollToDiv={scrollToDiv} />
      {showScrollButton && <ScrollButton onClick={scrollToDiv} />}
    </div>
  );
};
