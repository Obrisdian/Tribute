import styled from "@emotion/styled";
import { ContainerProps } from "@mui/material";
import { fontSize, Theme } from "@mui/system";
import theme from "../../theme";

type StyleProps = {
  width: string;
  height: string;
  left: string;
  top: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  background?: any;
  tab_width?: string;
  tab_height?: string;
  tab_left?: string;
  tab_top?: string;
  tab_fontSize?: string;
  phone_width?: string;
  phone_height?: string;
  phone_left?: string;
  phone_top?: string;
  phone_fontSize?: string;
  display?: string;
};

export const Title = styled.div<StyleProps>`
  position: absolute;
  display: block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.left};
  margin-top: ${(props) => props.top};

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing};
  text-align: center;
  padding: 5px 0;
  background: ${(props) => props.background};
  color: #000000;

  text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  transform: matrix(1, 0, 0, 1, 0, 0);

  @media only screen and (max-width: 900px) {
    position: absolute;
    display: block;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => props.tab_fontSize};
    width: ${(props) => props.tab_width};
    height: ${(props) => props.tab_height};
    margin-left: ${(props) => props.tab_left};
    margin-top: ${(props) => props.tab_top};
  }
  @media only screen and (max-width: 500px) {
    position: absolute;
    display: ${(props) => props.display};
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => props.phone_fontSize};
    width: ${(props) => props.phone_width};
    height: ${(props) => props.phone_height};
    margin-left: ${(props) => props.phone_left};
    margin-top: ${(props) => props.phone_top};
  }
`;
