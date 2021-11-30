import { FC } from "react";
import Image from "next/image";
import * as S from "./styled";
import { borderRight, styled } from "@mui/system";
import { useThemeProps } from "@mui/material";
type Props = {
  text?: string;
  width: string;
  left: string;
  height?: string;
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

export const TributeText: FC<Props> = ({
  text,
  width,
  left,
  height,
  top,
  fontSize,
  lineHeight,
  letterSpacing,
  tab_width,
  tab_height,
  tab_left,
  tab_top,
  tab_font,
  phone_width,
  phone_height,
  phone_left,
  phone_top,
  phone_font,
}) => {
  return (
    <S.Text
      width={width}
      left={left}
      height={height}
      top={top}
      fontSize={fontSize}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      tab_width={tab_width}
      tab_height={tab_height}
      tab_left={tab_left}
      tab_top={tab_top}
      tab_font={tab_font}
      phone_width={phone_width}
      phone_height={phone_height}
      phone_left={phone_left}
      phone_top={phone_top}
      phone_font={phone_font}
    >
      <div id="text_id">{text}</div>
    </S.Text>
  );
};
