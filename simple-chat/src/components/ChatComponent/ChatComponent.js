export function ChatComponent() {
  const chat = document.createElement('main');
  chat.classList.add('chat-container');
  chat.innerHTML = `
      <ul class="messages"></ul>
  `;
  return chat;
}
