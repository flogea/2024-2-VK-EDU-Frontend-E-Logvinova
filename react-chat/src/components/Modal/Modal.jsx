import React from 'react';
import ReactDOM from 'react-dom';
import { useModal } from './ModalContext';
import styles from './Modal.module.scss';

export const Modal = () => {
  const { isModalOpen, modalContent, closeModal } = useModal();

  if (!isModalOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>
          &times;
        </button>
        {modalContent}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};
