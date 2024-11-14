import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [filteredChats, setFilteredChats] = useState([]);

  return (
    <ChatContext.Provider value={{ filteredChats, setFilteredChats }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  return useContext(ChatContext);
};
