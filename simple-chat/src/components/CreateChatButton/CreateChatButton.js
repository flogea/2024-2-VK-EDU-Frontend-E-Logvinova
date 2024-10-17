export const CreateChatButton = () => {
  const createBtn = document.createElement('button');
  createBtn.classList.add('createChatBtn');
  createBtn.innerHTML = `
      <span class="material-symbols-rounded"> add </span>
      <span class="create-btn-text">Создать чат</span>
  `;
  return createBtn;
};
