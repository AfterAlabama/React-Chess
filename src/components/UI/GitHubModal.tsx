import { FC } from 'react';
import { ModalProps } from '../../helpers/Props/UIProps';
import cl from './GitModal.module.scss';
import GitModalContent from './GitModalContent';

const GitHubModal: FC<ModalProps> = ({ visible, setVisible }) => {

  const rootClass = [cl.modal];

  if (visible) {
    rootClass.push(cl.active);
  };

  return (
    <div
      className={rootClass.join(' ')}
      onClick={() => setVisible(false)}>
      <article
        className={cl.modalContent}
        onClick={e => e.stopPropagation()}
      >
        <GitModalContent
          setVisible={setVisible}
        />
      </article>
    </div>
  );
};

export default GitHubModal;
