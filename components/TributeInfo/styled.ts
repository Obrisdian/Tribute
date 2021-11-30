import styled from "@emotion/styled";
import { ContainerProps } from "@mui/material";
import theme from "../../theme";
import media from "styled-media-query";

type StyleProps = {
  right?: string;
  left?: string;
  top?: string;
  title1_height?: string;
  title1_width?: string;
  color?: string;
};
export const FormBody = styled.div<StyleProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #ffffff;
  margin-top: 4vw;
  margin-left: ${(props) => props.left};
  margin-right: ${(props) => props.right};
  height: 814px;

  @media only screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 0px;
    margin-right: 0px;
  }
`;
