// import React, { useEffect, useState } from 'react';
// import styles from './Modal.module.scss';
// import { useModal } from '../../context/modalContext';
// import { useLocalStorage } from '../../utils/hooks/useLocalStorage';

// const NewChatModal = () => {
//   const { isModalOpen, closeModal } = useModal();
//   const [chats, setChats] = useLocalStorage('chats', []);
//   const [users] = useState([
//     { id: 1, name: 'Bella Swan' },
//     { id: 2, name: 'Edward Cullen' },
//     { id: 3, name: 'Jacob Black' },
//   ]);

//   const handleUserClick = (user) => {
//     const existingChat = chats.find((chat) => chat.id === user.id);

//     if (existingChat) {
//       // Переход в существующий чат
//       window.location.hash = `#/chat/${user.id}`;
//     } else {
//       // Создаем новый чат и переходим
//       const newChat = {
//         id: user.id,
//         name: user.name,
//         avatar: '', // Добавьте URL-аватара, если нужно
//         lastMessage: '',
//       };
//       setChats([...chats, newChat]);
//       window.location.hash = `#/chat/${user.id}`;
//     }
//     closeModal();
//   };

//   if (!isModalOpen) return null;

//   return (
//     <div className={styles.modalOverlay} onClick={closeModal}>
//       <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//         <h2>Выберите пользователя для начала чата</h2>
//         <ul>
//           {users.map((user) => (
//             <li key={user.id} onClick={() => handleUserClick(user)}>
//               {user.name}
//             </li>
//           ))}
//         </ul>
//         <button onClick={closeModal}>Закрыть</button>
//       </div>
//     </div>
//   );
// };

// export default NewChatModal;

// Modal.js
import React from 'react';
import styles from './Modal.module.scss';
import { useLocalStorage } from '../../utils/hooks/useLocalStorage';
import { useModal } from '../../context/modalContext';
import { useNavigate } from 'react-router-dom';
import { usersMock } from '../../mocks/usersList';

const Modal = () => {
  const navigate = useNavigate();
  const { isModalOpen, closeModal } = useModal();
  const [chats, setChats] = useLocalStorage('chats', []);
  const [users] = React.useState(usersMock);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleUserClick = (user) => {
    const existingChat = chats.find((chat) => chat.id === user.id);

    if (existingChat) {
      navigate(`/chat/${user.id}`);
    } else {
      const newChat = {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        lastMessage: '',
      };
      setChats([...chats, newChat]);
      navigate(`/chat/${user.id}`);
    }
    closeModal();
  };

  if (!isModalOpen) return null;

  return (
    <div
      className={`${styles['modal-overlay']} ${isModalOpen ? '' : styles.hidden}`}
      onClick={handleOverlayClick}>
      <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
        <h2>Выберите пользователя</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => handleUserClick(user)}>
              {user.name}
            </li>
          ))}
        </ul>
        <button onClick={closeModal}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;
