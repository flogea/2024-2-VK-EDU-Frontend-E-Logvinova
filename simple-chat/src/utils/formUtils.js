import { renderMessage } from './messageUtils';
import { saveMessage } from './workWithLocalStorage';

export const handleSubmit = (event, input, messagesContainer, scrollButton) => {
  event.preventDefault();

  const messageText = input.value.trim();

  if (!messageText) {
    return;
  }

  const messageData = {
    id: Date.now(),
    text: messageText,
    sender: 'Gyan Rosling',
    time: new Date().toLocaleTimeString().slice(0, 5),
  };

  saveMessage(messageData);
  renderMessage(messageData, messagesContainer, scrollButton);
  input.value = '';
  input.focus();
};

export const handleKeyPress = (event, form) => {
  if (event.key === 'Enter') {
    form.dispatchEvent(new Event('submit'));
  }
};
