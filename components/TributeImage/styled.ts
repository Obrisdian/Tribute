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
  phone_top?: string;
  phone_left?: string;
};
export const Image = styled.image`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  object-fit: cover;
  display: flex;
  @media only screen and (max-width: 900px) {
    display: flex;
    position: absolute;
    width: 80%;
    height: 80%;
  }
  @media only screen and (max-width: 500px) {
    display: flex;
    position: absolute;
    width: 40%;
    height: 40%;
  }
  @media only screen and (max-width: 400px) {
    display: flex;
    position: absolute;
    width: 35%;
    height: 35%;
  }
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
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-left:${(props) => props.tab_left};
    margin-top: ${(props) => props.tab_top};
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    position: absolute;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-left: ${(props) => props.phone_left};
    margin-top: ${(props) => props.phone_top};
  }
`;
