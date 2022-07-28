import { IEmp } from "../../store/employee/types";
import {
  CardWrapper,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText
} from "./CardStyles";
import Tilt from "react-parallax-tilt";

export const EmpCard = ({_id, name,gender,salary, DoB }: IEmp) => {
  return (
    <Tilt>
      <CardWrapper>
     
        <CardTextWrapper>
         
          <CardTextTitle>{name}</CardTextTitle>
          <CardTextTitle>{salary} birr </CardTextTitle>
        </CardTextWrapper>
       
        <CardStatWrapper>
        
        <CardStats>
            
          <LinkText href="#">website</LinkText>
        </CardStats>
        <CardStats>
          <LinkText href="#">github</LinkText>
        </CardStats>
      </CardStatWrapper>
      </CardWrapper>
    </Tilt>
  );
};