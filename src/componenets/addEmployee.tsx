import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
} from './modal.styles';

import { FormGroup, Label, Input, Message } from "./forms";
import AddEmployeeForm from './addEmployee2';

const message = "this is the validation message";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const modal = (
    <React.Fragment>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText></HeaderText>
            <CloseButton onClick={hide}>❌</CloseButton>
          </Header>
          <Content>
          Add Employee Form
           </Content>
          <Content >
            <AddEmployeeForm />
{/* 
           <FormGroup>
          <Label htmlFor="label">Name</Label>
         <Input id="label" />
          <Message>This is the validation message</Message>
          </FormGroup>
           <FormGroup>
          <Label>Salary</Label>
            <Input />
            <Message>This is the validation message</Message>
        </FormGroup>
        <FormGroup>
          <Label>Gender</Label>
            <Input />
            <Message>This is the validation message</Message>
        </FormGroup> */}
        </Content>
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
