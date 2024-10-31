import { chatListMock } from '../mocks/chatListMock';
import { users } from '../mocks/usersList';
import { loadChats } from './chatListUtils';
import { navigateToChat } from './navigation';
import { getChatsFromLocalStorage, saveChatsToLocalStorage } from './workWithLocalStorage';

const userList = document.getElementById('userList');
const modal = document.getElementById('modal');

const selectedUsers = [];

export const openModal = () => {
  modal.style.display = 'flex';
  loadUsers();
};

export const closeModal = () => {
  modal.style.display = 'none';
};

export const closeModalOnBlur = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};

export const chatExistsWithUsers = (selectedUserIds) => {
  const chats = getChatsFromLocalStorage();
  console.log(chats.find((chat) => chat.id === selectedUserIds));
  return chats.find((chat) => chat.id === selectedUserIds);
};

export const loadUsers = () => {
  userList.innerHTML = '';
  users.forEach((user) => {
    const userItem = document.createElement('div');
    userItem.classList.add('user-item');
    userItem.innerHTML = `
      <input id="${user.id}" type="radio" data-user-id="${user.id}" name="friends" value="${user.id}">
      <label for="${user.id}" class="friends">${user.name}</label>
    `;
    userList.appendChild(userItem);
  });
};

export const createChat = () => {
  const chats = getChatsFromLocalStorage();
  const friend = userList.querySelector('input[type="radio"]:checked');

  selectedUsers.length = 0;

  const userId = +friend.getAttribute('data-user-id');
  const user = users.find((user) => user.id == userId);

  const existingChat = chatExistsWithUsers(userId);
  console.log(existingChat, userId);
  if (existingChat) {
    closeModal();
    navigateToChat(userId);
    return;
  }

  if (user) {
    chats.push(user);
    saveChatsToLocalStorage(chats);
    navigateToChat(userId);
    modal.style.display = 'none';
  }
};
