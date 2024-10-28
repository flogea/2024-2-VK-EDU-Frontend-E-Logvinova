import { renderChats } from './chatListUtils';
import { getChatsFromLocalStorage } from './workWithLocalStorage';

export const searchChat = (searchTerm, chatsContainer) => {
  const chats = getChatsFromLocalStorage();

  const searchResults = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  renderChatList(searchResults, chatsContainer);
};

const renderChatList = (chats, chatsContainer) => {
  chatsContainer.innerHTML = '';

  chats.forEach((chat) => {
    renderChats(chat, chatsContainer);
  });
};
