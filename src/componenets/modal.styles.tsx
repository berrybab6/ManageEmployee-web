import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  border:solid 1px #5930e5;
  border-radius:7px;
  width: 400px;
  
  outline: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  paddind:20%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  display:flex;
  flex-direction: column;
  padding-left:20px;
  padding-right:20px;
  border-radius: 8px;
`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 0.3rem;
  
`;

export const HeaderText = styled.div`
  margin-top:10px;
  width:100%;
  height:100%;
  
  align-self: center;
  color:  #5930e5;
`;

export const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 5px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;
