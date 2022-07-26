import styled from "styled-components";

export const ButtonContainer = styled.div`
  background: none;

  display: flex;
  flex-direction: row;
  
  align-items:right;
  justify-content: flex-end;

`;
export const Button = styled.button`
  display: block;
  color:  #5930e5;
  font-size: 1em;
 
  margin: 1em;
  align-items center;
  padding: 1em 1em;
  border: 2px solid #5930e5;
  border-radius: 3px;

`;


export const AddEmpButton = () => {
    return (
    <ButtonContainer >
    <Button onClick={()=>{
      console.log("Hello")
    }}>Add Employee</Button>
  </ButtonContainer>
    )
}