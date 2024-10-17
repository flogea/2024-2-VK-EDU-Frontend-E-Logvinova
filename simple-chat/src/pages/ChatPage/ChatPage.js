import { Header } from '../../components/Header/Header';
import { ChatComponent } from '../../components/ChatComponent/ChatComponent';
import { ChatInputForm } from '../../components/ChatInputForm/ChatInputForm';
import { loadMessages } from '../../utils/messageUtils';
import { checkScrollPosition, scrollContentDown } from '../../utils/workWithScroll';
import { handleKeyPress, handleSubmit } from '../../utils/formUtils';
import { navigateToChatList } from '../../utils/navigation';

export const ChatPage = () => {
  const chat = document.createElement('div');
  chat.classList.add('main');

  chat.appendChild(Header('chat'));
  chat.appendChild(ChatComponent());
  chat.appendChild(ChatInputForm());

  load();

  return chat;
};

const load = () => {
  const form = document.querySelector('form');
  const input = document.querySelector('.form-input');
  const messagesContainer = document.querySelector('.messages');
  const scrollButton = document.querySelector('.scroll-down-button');
  const backBtn = document.querySelector('.back');

  if (!messagesContainer) {
    setTimeout(load, 100);
    return;
  }
  messagesContainer.innerHTML = '';

  loadMessages(messagesContainer, scrollButton);
  checkScrollPosition(messagesContainer, scrollButton);

  form.addEventListener('submit', (event) =>
    handleSubmit(event, input, messagesContainer, scrollButton),
  );
  form.addEventListener('keypress', (event) => handleKeyPress(event, form));
  scrollButton.addEventListener('click', () => scrollContentDown(messagesContainer));
  messagesContainer.addEventListener('scroll', () =>
    checkScrollPosition(messagesContainer, scrollButton),
  );
  backBtn.addEventListener('click', () => navigateToChatList());
};
