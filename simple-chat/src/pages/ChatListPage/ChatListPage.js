import { ChatList } from '../../components/ChatList/ChatList';
import { CreateChatButton } from '../../components/CreateChatButton/CreateChatButton';
import { Header } from '../../components/Header/Header';
import { handleChatClick, loadChats } from '../../utils/chatListUtils';
import { saveChatsToLocalStorage } from '../../utils/workWithLocalStorage';

export const ChatListPage = () => {
  const chatList = document.createElement('div');
  chatList.classList.add('main');

  saveChatsToLocalStorage([
    {
      id: 1,
      avatar: 'https://www.eg.ru/wp-content/uploads/2019/08/stuart-pre025316.jpg',
      name: 'Bella Swan',
      lastMessage: 'Эдвард мой герой!',
    },
    {
      id: 2,
      avatar:
        'https://news.store.rambler.ru/img/0639ea34a7adc115383524c27ca710c5?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen',
      name: 'Edward Cullen',
      lastMessage: 'Белла, я люблю тебя',
    },
    {
      id: 3,
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyI40KHxACHTat0jH4MIk4h2-1h88nYYOiYg&s',
      name: 'Jacob Black',
      lastMessage: 'ребята, можно я уже пойду',
    },
  ]);

  chatList.appendChild(Header('messenger'));
  chatList.appendChild(ChatList());
  chatList.appendChild(CreateChatButton());

  load();

  return chatList;
};

const load = () => {
  const chatsContainer = document.querySelector('.chats');

  if (!chatsContainer) {
    setTimeout(load, 100);
    return;
  }

  chatsContainer.innerHTML = '';

  loadChats(chatsContainer);
  const currentChat = document.querySelectorAll('.chat-item');

  currentChat?.forEach(() => addEventListener('click', (event) => handleChatClick(event)));
};
