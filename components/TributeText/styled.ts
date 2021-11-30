import styled from "@emotion/styled";
import { ContainerProps } from "@mui/material";
import { fontSize } from "@mui/system";
import theme from "../../theme";

type StyleProps = {
  width: string;
  height?: string;
  left: string;
  top: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  tab_width?: string;
  tab_height?: string;
  tab_left?: string;
  tab_top?: string;
  tab_font?: string;
  phone_width?: string;
  phone_height?: string;
  phone_left?: string;
  phone_top?: string;
  phone_font?: string;
};

export const Text = styled.div<StyleProps>`
  position: absolute;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;

  width: ${(props) => props.width};
  haight: ${(props) => props.height};
  margin-left: ${(props) => props.left};
  margin-top: ${(props) => props.top};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing};

  color: #000000;

  text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  transform: matrix(1, 0, 0, 1, 0, 0);

  @media (min-width:500px) and (max-width: 900px) {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    position: absolute;
    width: ${(props) => props.tab_width};
    haight: ${(props) => props.tab_height};
    margin-left: ${(props) => props.tab_left};
    margin-top: ${(props) => props.tab_top};
    font-size: ${(props) => props.tab_font};
  }
  @media (min-width:320px) and (max-width: 500px) {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    position: absolute;
    width: ${(props) => props.phone_width};
    haight: ${(props) => props.phone_height};
    margin-left: ${(props) => props.phone_left};
    margin-top: ${(props) => props.phone_top};
    font-size: ${(props) => props.phone_font};
  }
`;
