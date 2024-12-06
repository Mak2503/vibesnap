type ModalProps = {
  isOpen?: boolean;
  title: string;
  onClose?: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, title, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="p-4 fixed transition-all ease-in-out inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            className="p-2 font-semibold bg-[#F5F5F5] rounded-full text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            <img src="icons/close.svg" alt="close" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
