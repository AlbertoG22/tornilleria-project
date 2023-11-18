import Modal from 'react-modal';
import { CotizacionForm } from './';

const customStyles = {
  overlay: {
    zIndex: 9999,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 10000,
  },
};

Modal.setAppElement("#root");

export const CotizacionModal = ({ isModalOpen, onCloseModal }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
    >
      <h1>Nueva Cotización</h1>
      <hr />
      <CotizacionForm />
    </Modal>
  );
};
