import { Modal } from '../components/Modal/Modal';
import { ChatListPage } from '../pages/ChatListPage/ChatListPage';
import { ChatPage } from '../pages/ChatPage/ChatPage';
import { loadMessages } from './messageUtils';
import { getChatsFromLocalStorage, getDataFromLocalStorage } from './workWithLocalStorage';

const chatListContainer = document.querySelector('.chat-list');

export const navigateToChat = (chatId) => {
  window.location.hash = `#/chat/${chatId}`;
  handleRouteChange();
};

export const navigateToChatList = () => {
  window.location.hash = `#/`;
  handleRouteChange();
};

export const handleRouteChange = () => {
  const path = window.location.hash;
  const root = document.getElementById('root');

  if (path.startsWith('#/chat/')) {
    const chatId = path.split('#/chat/')[1];
    root.innerHTML = '';
    root.appendChild(ChatPage(chatId));
    return;
  }
  root.innerHTML = '';
  root.appendChild(ChatListPage());

  Modal();
};
