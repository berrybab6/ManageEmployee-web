import styled from "styled-components";

const ButtonContainer = styled.div`
  background: #000;

  display: flex;
`;
const Button = styled.button`
  display: inline-block;
  color:  #5930e5;
  font-size: 1em;
  margin: 1em;
  float:right;
  padding: 0.35em 1em;
  border: 2px solid #5930e5;
  border-radius: 3px;
  display: block;
  justify-content: flex-end;
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