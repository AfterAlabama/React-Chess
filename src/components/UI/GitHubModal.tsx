import { modalProps } from '../../helpers/Props';
import cl from './GitModal.module.scss';

const GitHubModal = ({visible, setVisible, children}: modalProps) => {

  const rootClass = [cl.modal];

  if(visible){
    rootClass.push(cl.active)
  };

  return (
    <div 
      className = {rootClass.join(' ')} 
      onClick = {() => setVisible(false)}>
      <div  
        className = {cl.modalContent}
        onClick = {e => e.stopPropagation()}
        >
        {children}
      </div>
    </div>
  )
}

export default GitHubModal
