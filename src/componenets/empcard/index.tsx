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
     
        {/* <CardImage background={imgUrl} /> */}
        <CardTextWrapper>
          {/* <CardTextDate><h1>
                {DoB.toString()}
              </h1> </CardTextDate> */}
          <CardTextTitle>{name}</CardTextTitle>
          <CardTextTitle>{salary} birr </CardTextTitle>

          {/* <CardTextBody>
            {salary} birr 
          </CardTextBody> */}
        </CardTextWrapper>
        {/* <CardStatWrapper>
        
          <CardStats>
              
            <LinkText href="#">website</LinkText>
          </CardStats>
          <CardStats>
            <LinkText href="#">github</LinkText>
          </CardStats>
        </CardStatWrapper> */}
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