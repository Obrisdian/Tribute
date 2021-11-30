import styled from "@emotion/styled";
import { ContainerProps } from "@mui/material";
import { fontSize } from "@mui/system";
import theme from "../../theme";

type StyleProps = {
  width: string;
  height: string;
  left: string;
  top: string;
  fontSize: string;
  lineHeight?: string;
  tab_left?:string;
  tab_top?:string;
  phone_left?:string;
  phone_top?:string;
 
};

export const Years = styled.div <StyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => props.fontSize};
  color: rgba(58, 84, 138, 0.87);
  position: absolute;
  width:  ${(props) => props.width};
  height:  ${(props) => props.height};
  margin-left: ${(props) => props.left};
  margin-top: ${(props) => props.top};

  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size:36px;
    color: rgba(58, 84, 138, 0.87);
    position: absolute;
    margin-left: ${(props) => props.tab_left};
    margin-top: ${(props) => props.tab_top};

  }
  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size:36px;
    color: rgba(58, 84, 138, 0.87);
    position: absolute;
    margin-left: ${(props) => props.phone_left};
    margin-top: ${(props) => props.phone_top};
  }
`;

