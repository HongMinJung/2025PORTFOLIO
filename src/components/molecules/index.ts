// molecules 컴포넌트 내보내기
export * from './Card';
export * from './InputGroup';
export * from './Modal';
export * from './Toast';

// 기본 내보내기
import Card from './Card';
import InputGroup from './InputGroup';
import Modal from './Modal';
import Toast from './Toast';

const Molecules = {
  Card,
  InputGroup,
  Modal,
  Toast,
};

export default Molecules;