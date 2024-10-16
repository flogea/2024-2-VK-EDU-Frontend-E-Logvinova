import { Header } from '../../components/Header/Header';
import { ChatComponent } from '../../components/ChatComponent/ChatComponent';
import { ChatInputForm } from '../../components/ChatInputForm/ChatInputForm';
import { loadMessages } from '../../utils/messageUtils';
import { checkScrollPosition, scrollContentDown } from '../../utils/workWithScroll';
import { handleKeyPress, handleSubmit } from '../../utils/formUtils';

export const ChatPage = () => {
  const chat = document.createElement('div');
  chat.classList.add('main');

  chat.appendChild(Header());
  chat.appendChild(ChatComponent());
  chat.appendChild(ChatInputForm());

  return chat;
};

window.onload = () => {
  const form = document.querySelector('form');
  const input = document.querySelector('.form-input');
  const messagesContainer = document.querySelector('.messages');
  const scrollButton = document.querySelector('.scroll-down-button');

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
};
