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
  isUpdateShown:boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
  data:{};
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  isUpdateShown,
  hide,
  modalContent,
  headerText,
  data,

}) => {
  const modal = (
    <React.Fragment>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>  {isUpdateShown?"Update Employee Information":" Add Employee Form"} </HeaderText>
            <CloseButton onClick={hide}>❌</CloseButton>
          </Header>
          {/* <Content>
          
         
           </Content> */}
          <Content >
              
              <AddEmployeeForm isShown = {isShown} isUpdateShown={isUpdateShown} data={data}/>
            
            

        </Content>
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );

  return isShown || isUpdateShown ? ReactDOM.createPortal(modal, document.body) : null;
};
