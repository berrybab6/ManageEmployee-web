import styled from "styled-components";

export const FormGroup = styled.div`
	color: palevioletred;
    display: flex;
	width: 300px;
	margin: 50px 0;
`;

export const DateDiv = styled.div`
color: black;
display: flex;
flex-direction: column;

`;

export const Label = styled.label`
	margin-top: 10px;
    margin-bottom: 3px;
	color: black;
    display: flex;
	flex-direction: column;

`;

export const Input = styled.input`
	padding: 10px;
	color: black;
	background: #fffff9;
	border:solid 1px gray;
	border-radius: 3px;
	width: 90%;
    margin-right:5px;
	margin-bottom: 0.5em;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;
