import React, { createContext, useContext, useState } from 'react';

const MessagesContext = createContext();

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (chatId, newMessage) => {
    const messages = JSON.parse(localStorage.getItem(`messages${chatId}`)) || [];
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem(`messages${chatId}`, JSON.stringify(updatedMessages));
  };

  const getMessagesByChatId = (chatId) => {
    const storedMessages = JSON.parse(localStorage.getItem(`messages${chatId}`));
    return storedMessages || [];
  };

  return (
    <MessagesContext.Provider value={{ messages, addMessage, getMessagesByChatId }}>
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessages = () => {
  const context = useContext(MessagesContext);
  if (!context) {
    throw new Error('useMessages must be used within a MessagesProvider');
  }
  return context;
};
