export const ChatList = (chatListContainer, chats) => {
  const chat = document.createElement('main');
  chat.classList.add('chats-container');
  chat.innerHTML = `
      <ul class="chats"></ul>
  `;
  return chat;
};
