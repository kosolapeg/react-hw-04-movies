import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ imgModal, tagsModal, onToggleModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onToggleModal();
    }
  };

  const handleBackdropClick = e => {
    e.currentTarget === e.target && onToggleModal();
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={imgModal} alt={tagsModal} />
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
