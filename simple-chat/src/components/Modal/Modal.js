import { closeModal, closeModalOnBlur, createChat, openModal } from '../../utils/createNewChat';

export const Modal = () => {
  const openModalBtn = document.querySelector('.createChatBtn');
  const closeModalBtn = document.getElementById('closeModal');
  const createChatBtn = document.getElementById('createChat');

  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('click', (event) => closeModalOnBlur(event));

  createChatBtn.addEventListener('click', createChat);
};
