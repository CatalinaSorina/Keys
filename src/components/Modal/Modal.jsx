//@flow
import React, { useState } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import type { ButtonProps } from '../Button/Button';
import type { WrapperProps } from '../Wrapper/Wrapper';
import type { Node } from 'react';
import { combineStyle } from '../../data/utils';
import { closeButtonDefaultStyle, modalDefaultStyle } from './Modal.styles';

type ModalProps = {
  openModalText: string,
  closeModalText: string,
  buttonStyle?: ButtonProps,
  closeButtonStyle: ButtonProps,
  modalStyle: WrapperProps,
  children: Node,
};

const Modal = ({
  openModalText,
  closeModalText,
  buttonStyle,
  closeButtonStyle,
  modalStyle,
  children,
}: ModalProps) => {
  const [display, setDisplay] = useState(false);
  const displayModal =
    modalStyle &&
    modalStyle.hasOwnProperty('display') &&
    modalStyle.display !== 'none'
      ? modalStyle.display
      : 'flex';

  const closeButtonStyleCombined = combineStyle(
    closeButtonStyle,
    closeButtonDefaultStyle
  );
  const modalStyleCombined = combineStyle(modalStyle, modalDefaultStyle);

  return (
    <React.Fragment>
      <Button
        text={openModalText}
        {...buttonStyle}
        onClick={() => setDisplay(true)}
      />
      <Wrapper
        {...modalStyleCombined}
        display={display ? displayModal : 'none'}
      >
        <Button
          text={closeModalText ? closeModalText : 'x'}
          {...closeButtonStyleCombined}
          onClick={() => setDisplay(false)}
        />
        {children}
      </Wrapper>
    </React.Fragment>
  );
};

Modal.defaultProps = {
  openModalText: 'open',
};

export default Modal;
