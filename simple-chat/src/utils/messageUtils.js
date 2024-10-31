import { getDataFromLocalStorage } from './workWithLocalStorage';
import { checkScrollPosition, scrollContentDown } from './workWithScroll';

export const renderMessage = (messageData, messagesContainer, scrollButton) => {
  const messageElement = document.createElement('li');
  messageElement.classList.add('message');
  const timeAndMessageBlock = document.createElement('div');
  timeAndMessageBlock.classList.add('timeAndMessageBlock');

  const senderElement = document.createElement('div');
  senderElement.classList.add('message-sender');
  senderElement.innerText = messageData.sender;

  const textElement = document.createElement('div');
  textElement.classList.add('message-text');
  textElement.innerText = messageData.text;

  const timeElement = document.createElement('div');
  timeElement.classList.add('message-time');
  timeElement.innerText = messageData.time;

  messageElement.appendChild(timeAndMessageBlock);
  timeAndMessageBlock.appendChild(timeElement);
  timeAndMessageBlock.appendChild(textElement);

  messagesContainer.appendChild(messageElement);

  scrollContentDown(messagesContainer);
  checkScrollPosition(messagesContainer, scrollButton);
};

export const loadMessages = (chatId, messagesContainer, scrollButton) => {
  const messages = getDataFromLocalStorage(chatId);

  messages.forEach((message) => {
    renderMessage(message, messagesContainer, scrollButton);
  });
};
