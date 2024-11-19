import React from 'react';
import PropTypes from 'prop-types';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import styles from './RoundButton.module.scss';
import { useModal } from '../../context/modalContext';

export const RoundButton = ({ onClick }) => {
  const { openModal } = useModal();
  return (
    <button className={styles.createChatBtn} onClick={openModal}>
      <AddRoundedIcon />
      <span className={styles.createBtnText}>Начать чат</span>
    </button>
  );
};

RoundButton.propTypes = {
  onClick: PropTypes.func,
};
