import './index.css';
const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const messagesContainer = document.querySelector('.messages');

form.addEventListener('submit', handleSubmit);
form.addEventListener('keypress', handleKeyPress);

function handleSubmit(event) {
  event.preventDefault();

  const messageText = input.value.trim();
  console.log(messageText);

  if (messageText) {
    const messageData = {
      text: messageText,
      sender: 'Gyan Rosling',
      time: new Date().toLocaleTimeString().slice(0, 5),
    };

    saveMessage(messageData);
    renderMessage(messageData);
    input.value = '';
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    form.dispatchEvent(new Event('submit'));
  }
}

function saveMessage(messageData) {
  let messages = JSON.parse(localStorage.getItem('messages')) || [];
  messages.push(messageData);
  localStorage.setItem('messages', JSON.stringify(messages));
}

function renderMessage(messageData) {
  const messageElement = document.createElement('div');
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

  // messageElement.appendChild(senderElement);
  messageElement.appendChild(timeAndMessageBlock);
  timeAndMessageBlock.appendChild(timeElement);
  timeAndMessageBlock.appendChild(textElement);

  messagesContainer.appendChild(messageElement);
}

function loadMessages() {
  const messages = JSON.parse(localStorage.getItem('messages')) || [];
  messages.forEach(renderMessage);
}

loadMessages();
