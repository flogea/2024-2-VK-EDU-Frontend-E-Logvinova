export const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('messages')) || [];
};

export const saveMessage = (messageData) => {
  const messages = getDataFromLocalStorage();
  messages.push(messageData);
  localStorage.setItem('messages', JSON.stringify(messages));
};

export const getChatsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('chats')) || [];
};

export const saveChatsToLocalStorage = (chats) => {
  localStorage.setItem('chats', JSON.stringify(chats));
};
