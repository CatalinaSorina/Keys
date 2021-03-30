// @flow
import React, { useState } from 'react';
import type { Node } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import type { ButtonProps } from '../Button/Button';
import type { WrapperProps } from '../Wrapper/Wrapper';
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
  const [show, setShow] = useState(false);

  const closeButtonStyleCombined = combineStyle(closeButtonStyle, closeButtonDefaultStyle);
  const modalStyleCombined = combineStyle(modalStyle, modalDefaultStyle);

  const { display, ...restModalStyleCombined } = modalStyleCombined;
  const displayModal = display !== 'none' ? display : 'flex';

  return (
    <>
      <Button
        text={openModalText}
        {...buttonStyle}
        onClick={() => setShow(true)}
      />
      <Wrapper
        display={show ? displayModal : 'none'}
        {...restModalStyleCombined}
      >
        <Button
          text={closeModalText || 'x'}
          {...closeButtonStyleCombined}
          onClick={() => setShow(false)}
        />
        {children}
      </Wrapper>
    </>
  );
};

Modal.defaultProps = {
  buttonStyle: null,
};

export default Modal;
