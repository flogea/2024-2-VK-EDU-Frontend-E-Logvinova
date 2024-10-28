import { navigateToChatList } from '../../utils/navigation';
import { ChatHeader } from './ChatHeader';
import { MessengerHeader } from './MessengerHeader';

export const Header = (type, chatId) => {
  const header = document.createElement('header');

  if (type === 'chat') {
    header.innerHTML = ChatHeader(chatId);
    return header;
  }
  header.innerHTML = MessengerHeader();

  return header;
};
