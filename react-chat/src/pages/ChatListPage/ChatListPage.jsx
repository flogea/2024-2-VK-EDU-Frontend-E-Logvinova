import { useNavigate } from 'react-router-dom';
import { ChatListItem, Header, RoundButton } from '../../components';
import { useChatContext } from '../../context/ChatContext';
import NewChatModal from '../../components/Modal/NewChatModal';

export const ChatListPage = () => {
  const navigate = useNavigate();
  const { filteredChats } = useChatContext();

  return (
    <>
      <Header type="messenger" />
      {filteredChats.map((chat, index) => (
        <ChatListItem key={chat.id} {...chat} onClick={() => navigate(`/chat/${chat.id}`)} />
      ))}
      <RoundButton />
      <NewChatModal />
    </>
  );
};
