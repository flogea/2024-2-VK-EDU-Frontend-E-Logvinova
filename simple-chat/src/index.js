import './index.css';
const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const messagesContainer = document.querySelector('.messages');
const scrollButton = document.querySelector('.scroll-down-button');

const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('messages')) || [];
};

const scrollContentDown = () => {
  messagesContainer.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
};

function checkScrollPosition() {
  const atBottom =
    messagesContainer.scrollHeight - messagesContainer.scrollTop === messagesContainer.clientHeight;

  if (atBottom) {
    scrollButton.classList.remove('show');
  } else {
    scrollButton.classList.add('show');
  }
}

const handleSubmit = (event) => {
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
  renderMessage(messageData);
  input.value = '';
  input.focus();
};

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    form.dispatchEvent(new Event('submit'));
  }
};

const saveMessage = (messageData) => {
  const messages = getDataFromLocalStorage();
  messages.push(messageData);
  localStorage.setItem('messages', JSON.stringify(messages));
};

const renderMessage = (messageData) => {
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

  scrollContentDown();
  checkScrollPosition();
};

const loadMessages = () => {
  const messages = getDataFromLocalStorage();
  messages.forEach(renderMessage);
};

form.addEventListener('submit', handleSubmit);
form.addEventListener('keypress', handleKeyPress);
scrollButton.addEventListener('click', scrollContentDown);
messagesContainer.addEventListener('scroll', checkScrollPosition);

loadMessages();

window.onload = checkScrollPosition;
