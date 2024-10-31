import { Header } from '../../components/Header/Header';
import { ChatComponent } from '../../components/ChatComponent/ChatComponent';
import { ChatInputForm } from '../../components/ChatInputForm/ChatInputForm';
import { loadMessages } from '../../utils/messageUtils';
import { checkScrollPosition, scrollContentDown } from '../../utils/workWithScroll';
import { handleKeyPress, handleSubmit } from '../../utils/formUtils';
import { navigateToChatList } from '../../utils/navigation';

const load = (chatId) => {
  const form = document.querySelector('form');
  const input = document.querySelector('.form-input');
  const messagesContainer = document.querySelector('.messages');
  const scrollButton = document.querySelector('.scroll-down-button');
  const backBtn = document.querySelector('.back');

  if (!messagesContainer) {
    setTimeout(() => load(chatId), 100);
    return;
  }
  messagesContainer.innerHTML = '';

  loadMessages(chatId, messagesContainer, scrollButton);
  checkScrollPosition(messagesContainer, scrollButton);

  form.addEventListener('submit', (event) =>
    handleSubmit(event, input, messagesContainer, scrollButton, chatId),
  );
  form.addEventListener('keypress', (event) => handleKeyPress(event, form, chatId));
  scrollButton.addEventListener('click', () => scrollContentDown(messagesContainer));
  messagesContainer.addEventListener('scroll', () =>
    checkScrollPosition(messagesContainer, scrollButton),
  );
  backBtn.addEventListener('click', () => navigateToChatList());
};

export const ChatPage = (chatId) => {
  const chat = document.createElement('div');
  chat.classList.add('main');

  chat.appendChild(Header('chat', chatId));
  chat.appendChild(ChatComponent());
  chat.appendChild(ChatInputForm());

  load(chatId);

  return chat;
};
