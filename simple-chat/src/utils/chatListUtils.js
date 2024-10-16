import { navigateToChat } from './navigation';
import { getChatsFromLocalStorage } from './workWithLocalStorage';

export const renderChats = (chat, chatContainer) => {
  const chatElement = document.createElement('li');
  chatElement.classList.add('chat-item');
  chatElement.dataset.chatId = chat.id;

  chatElement.innerHTML = `
      <div class="chat-avatar">
        <img class='chat-avatar' src="${chat.avatar}" alt="${chat.name}" />
      </div>
      <div class="chat-details">
        <div class="chat-name">${chat.name}</div>
        <div class="chat-last-message">${chat.lastMessage}</div>
      </div>
    `;

  chatContainer.appendChild(chatElement);
};

export const loadChats = (chatContainer) => {
  const chats = getChatsFromLocalStorage();

  chats.forEach((chat) => {
    renderChats(chat, chatContainer);
  });
};

export const handleChatClick = (event) => {
  const chatItem = event.target.closest('.chat-item');
  if (chatItem) {
    const chatId = chatItem.dataset.chatId;
    navigateToChat(chatId);
  }
};
