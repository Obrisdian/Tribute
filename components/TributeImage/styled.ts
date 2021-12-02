import styled from "@emotion/styled";
import { ContainerProps } from "@mui/material";
import theme from "../../theme";
import media from "styled-media-query";

type StyleProps = {
  width: string;
  height: string;
  left?: string;
  top: string;
  right?: string;
  tab_top?: string;
  tab_left?: string;
  tab_width?:string;
  tab_height?:string;
  phone_top?: string;
  phone_left?: string;
  phone_width?:string;
  phone_height?:string;
};
export const Image = styled.image`
  width: 100%;
  left: auto;
  right: auto;
  height: 100%;
  object-fit: cover;
   display: flex;
  overflow:hidden;
 
  @media only screen and (max-width: 500px) {
  display: flex;
  width: 100%;
  left: auto;
  right: auto;
  height: 100%;
  object-fit: none;
  object-position:center;
  overflow:hidden;
 
`;

export const ImageBox = styled.div<StyleProps>`
  display: flex;
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-right: ${(props) => props.right};
  margin-left: ${(props) => props.left};
  margin-top: ${(props) => props.top};
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.25));

  @media only screen and (max-width: 900px) {
    display: flex;
    position: absolute;
    width: ${(props) => props.tab_width};
    height: ${(props) => props.tab_height};
    margin-left: ${(props) => props.tab_left};
    margin-top: ${(props) => props.tab_top};

  }

  @media only screen and (max-width: 500px) {
    display: flex;
    position: absolute;
    width: ${(props) => props.phone_width};
    height: ${(props) => props.phone_height};
    margin-left: ${(props) => props.phone_left};
    margin-top: ${(props) => props.phone_top};
   
  }
`;
