import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { ChatHeader, MessengerHeader } from '.';
import { useDebounce } from '../../utils/hooks/useDebounce';
import { useLocalStorage } from '../../utils/hooks/useLocalStorage';
import { useChatContext } from '../../context/ChatContext';
import { chatListMock } from '../../mocks/chatListMock';

export const Header = ({ type = 'messenger', chatId = 0 }) => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 200);
  const [chats] = useLocalStorage('chats', []);
  const { setFilteredChats } = useChatContext();

  const userInfo = !!chatId ? chats.find((chat) => chat.id === +chatId) : [];

  const handleGoBack = () => {};

  useEffect(() => {
    if (debouncedSearchValue) {
      const results = chats.filter((chat) =>
        chat.name.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
      );
      setFilteredChats(results);
    } else {
      setFilteredChats(chats);
    }
  }, [debouncedSearchValue, chats]);

  return (
    <header>
      {type === 'messenger' ? <MessengerHeader /> : <ChatHeader {...userInfo} />}
      <div className={styles.rightsideButtons}>
        {type === 'messenger' && (
          <input
            type="search"
            id="searchInput"
            className={styles.searchInput}
            placeholder="Поиск по чатам"
            autoComplete="off"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        )}
        <button className={`${styles.iconButton} search`}>
          <SearchRoundedIcon />
        </button>
        <button className={`${styles.iconButton} more`}>
          <MoreVertRoundedIcon />
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  type: PropTypes.oneOf(['messenger', 'chat']),
};
