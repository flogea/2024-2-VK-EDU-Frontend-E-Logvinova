import { ChatList } from '../../components/ChatList/ChatList';
import { ChatButton } from '../../components/ChatButton/ChatButton';
import { Header } from '../../components/Header/Header';
import { handleChatClick, loadChats } from '../../utils/chatListUtils';
import {
  getChatsFromLocalStorage,
  saveChatsToLocalStorage,
} from '../../utils/workWithLocalStorage';
import { chatListMock } from '../../mocks/chatListMock';
import { searchChat } from '../../utils/searchChat';

export const ChatListPage = () => {
  const chatList = document.createElement('div');
  chatList.classList.add('main');

  if (getChatsFromLocalStorage().length === 0) {
    saveChatsToLocalStorage(chatListMock);
  }

  chatList.appendChild(Header('messenger'));
  chatList.appendChild(ChatList());
  chatList.appendChild(ChatButton());

  load();

  return chatList;
};

const load = () => {
  const chatsContainer = document.querySelector('.chats');
  const searchBtn = document.querySelector('.search');
  const seacrhInput = document.querySelector('.search-input');

  if (!chatsContainer) {
    setTimeout(load, 100);
    return;
  }

  chatsContainer.innerHTML = '';

  loadChats(chatsContainer);
  const currentChat = document.querySelectorAll('.chat-item');

  currentChat?.forEach(() => addEventListener('click', (event) => handleChatClick(event)));

  // searchBtn.addEventListener('change', searchChat);
  seacrhInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value;
    searchChat(searchTerm, chatsContainer);
  });
};
