import { users } from '../mocks/usersList';
import { renderMessage } from './messageUtils';
import { saveMessage } from './workWithLocalStorage';

export const handleSubmit = (event, input, messagesContainer, scrollButton, chatId) => {
  event.preventDefault();

  const messageText = input.value.trim();

  const { name } = users.find((user) => user.id == +chatId);

  if (!messageText) {
    return;
  }

  const messageData = {
    id: Date.now(),
    text: messageText,
    sender: name,
    time: new Date().toLocaleTimeString().slice(0, 5),
  };

  saveMessage(messageData, chatId);
  renderMessage(messageData, messagesContainer, scrollButton);
  input.value = '';
  input.focus();
};

export const handleKeyPress = (event, form, chatId) => {
  if (event.key === 'Enter') {
    form.dispatchEvent(new Event('submit', { detait: { chatId: chatId } }));
  }
};
