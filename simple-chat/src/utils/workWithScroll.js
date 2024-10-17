export const scrollContentDown = (messagesContainer) => {
  messagesContainer.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
};

export const checkScrollPosition = (messagesContainer, scrollButton) => {
  const atBottom =
    messagesContainer.scrollHeight - messagesContainer.scrollTop === messagesContainer.clientHeight;

  if (atBottom) {
    scrollButton.classList.remove('show');
  } else {
    scrollButton.classList.add('show');
  }
};
