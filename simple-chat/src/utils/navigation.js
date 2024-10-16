import { loadMessages } from './messageUtils';
import { getChatsFromLocalStorage, getDataFromLocalStorage } from './workWithLocalStorage';

const chatListContainer = document.querySelector('.chat-list');
//// TODO: не воркает
export const navigateToChat = (chatId) => {
  window.history.pushState({ chatId }, `Chat ${chatId}`, `/chat/${chatId}`);
  renderChat(chatId);
};

export const navigateToChatList = () => {
  window.history.pushState({}, 'Chats', '/');
  renderChatList();
};
