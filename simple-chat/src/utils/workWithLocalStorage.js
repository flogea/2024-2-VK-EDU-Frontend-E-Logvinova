export const getDataFromLocalStorage = (chatId) => {
  return JSON.parse(localStorage.getItem(`messages${chatId}`)) || [];
};

export const saveMessage = (messageData, chatId) => {
  const messages = getDataFromLocalStorage(chatId);
  messages.push(messageData);
  localStorage.setItem(`messages${chatId}`, JSON.stringify(messages));
};

export const getChatsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('chats')) || [];
};

export const saveChatsToLocalStorage = (chats) => {
  localStorage.setItem('chats', JSON.stringify(chats));
};
