import styled from "styled-components";

export const TableContainer = styled.div`
overflow-y:hidden;
overflow-x:auto;
`;
export const Table = styled.table`
align-items: center;
width:100%;
background: transparent;
border-collapse:collapse;
opacity: 0.6;
 
`;
export const TableHead = styled.thead`
`;
export const TableRow = styled.tr`
border: 1px solid black;

`;

export const TableHeading = styled.th`
padding:15px 10px 15px 10px;
color:#0900e5;
text-align: center;
border: 1px solid LightGrey;
`;


export const TableHeadingBody = styled.th`
padding:15px 10px 15px 10px;
color:#000;
text-align: center;
border: 1px solid lightGrey;

// border: none;
`;
export const EditDeleteRow = styled(TableHeadingBody)`
padding: 0 5px 0 5px;
`;


export const CardStatWrapper = styled.div`
grid-area: stats;
display: grid;
display: flex;
/* grid-template-columns: 1fr 1fr 1fr; */
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
flex-direction: rows;

border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
// background: #5930e5;
`;

export const CardStats = styled.div`

align-items: center;
justify-content: center;
color:  #000;
padding: 10px;
`;

export const LinkText = styled.a`
color:  #5930e5;
text-decoration: none;
`;

export const Button = styled.button`
display: inline-block;
color:  #5930e5;
font-size: 1em;
align-items:center;
padding: 0.35em 1em;
border: 2px solid #5930e5;
border-radius: 3px;
display: block;
justify-content: flex-end;
`;
