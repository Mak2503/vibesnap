import React from "react";
import Modal from "./ui/Modal";
import { shareIcons } from "../constants";
import Icon from "./Icon";

const ShareModal: React.FC<{
  isOpen?: boolean;
  onClose?: () => void;
}> = ({ isOpen, onClose }) => {
  return (
    <Modal title="Share Post" isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-4 gap-8">
          {shareIcons.map((icon, i) => (
            <Icon key={i} icon={icon.icon} bg={icon.bg} />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Page Link</h3>
          <div className="p-3 bg-[#D9D9D9] bg-opacity-30 flex justify-between items-center rounded-md">
            <p className="text-opacity-60">https://vibesnap/feed/1234</p>
            <img src="icons/copy.svg" alt="copy" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ShareModal;
