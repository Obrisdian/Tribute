import styled from "@emotion/styled";
import { ContainerProps } from "@mui/material";
import theme from "../../theme";

type StyleProps = {
  width: string;
  height: string;
  left?: string;
  top: string;
  right?: string;
  tab_left?: string;
  phone_left?: string;
};
export const Arrow = styled.image`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  object-fit: cover;
  display: flex;
  @media (min-width:500px) and (max-width: 900px) {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    height: 70%;
    object-fit: cover;
    display: flex;
  }
  @media (min-width:320px) and (max-width: 500px) {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    height: 50%;
    object-fit: cover;
    display: flex;
  }
`;

export const ArrowBox = styled.div<StyleProps>`
  display: flex;
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-right: ${(props) => props.right};
  margin-left: ${(props) => props.left};
  right: ${(props) => props.right};
  margin-top: ${(props) => props.top};

  @media only screen and (max-width: 900px) {
    display: flex;
    position: absolute;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-left: ${(props) => props.tab_left};
    right: ${(props) => props.right};
    margin-top: ${(props) => props.top};
  }
  @media only screen and (max-width: 500px) {
    display: flex;
    position: absolute;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-left: ${(props) => props.phone_left};
    right: ${(props) => props.right};
    margin-top: ${(props) => props.top};
  }
`;
