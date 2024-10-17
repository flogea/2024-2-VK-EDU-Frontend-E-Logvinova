export const ChatList = (chatListContainer, chats) => {
  const chat = document.createElement('main');
  chat.classList.add('chats-container');

  const ul = document.createElement('ul');
  ul.classList.add('chats');
  chat.appendChild(ul);
  return chat;
};
