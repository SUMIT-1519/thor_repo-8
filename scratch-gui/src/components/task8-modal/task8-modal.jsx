import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import styles from './task8-modal.module.css';

const Task8Modal = ({ isOpen, onRequestClose }) => {
  useEffect(() => {
    ReactModal.setAppElement(document.body); // fallback—works everywhere

  }, []);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Timed Notification"
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>Auto-opening and Auto-closing Modal</h2>
      </div>
      <div className={styles.content}>
        <p>This modal automatically opened after 30 seconds of loading.</p>
        <p>It is scheduled to close automatically in 10 seconds.</p>
      </div>
      <div className={styles.footer}>
        <button className={`${styles.button} ${styles.buttonPrimary}`} onClick={onRequestClose}>OK</button>
        <button className={`${styles.button} ${styles.buttonSecondary}`} onClick={onRequestClose}>Close</button>
      </div>
    </ReactModal>
  );
};

Task8Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
};

export default Task8Modal;
