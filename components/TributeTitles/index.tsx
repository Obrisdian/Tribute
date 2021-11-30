import { FC } from "react";
import Image from "next/image";
import * as S from "./styled";
import { borderRight, styled } from "@mui/system";
import { useThemeProps } from "@mui/material";
type Props = {
  title_text?: string;
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
  phone_width?:string;
  phone_height?:string;
  phone_left?:string;
  phone_top?:string;
  phone_fontSize?:string;
  display?:string;
};

export const TributeTitle: FC<Props> = ({
  title_text,
  width,
  height,
  left,
  top,
  fontSize,
  lineHeight,
  letterSpacing,
  background,
  tab_width,
  tab_height,
  tab_left,
  tab_top,
  tab_fontSize,
  phone_width,
  phone_height,
  phone_left,
  phone_top,
  phone_fontSize,
  display
}) => {
  return (
    <S.Title
      width={width}
      height={height}
      left={left}
      top={top}
      fontSize={fontSize}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      background={background}
      tab_width={tab_width}
      tab_height={tab_height}
      tab_left={tab_left}
      tab_top={tab_top}
      tab_fontSize={tab_fontSize}
      phone_width={phone_width}
      phone_height={phone_height}
      phone_left={phone_left}
      phone_top={phone_top}
      phone_fontSize={phone_fontSize}
      display={display}
    >
      <div id="title1">{title_text}</div>
    </S.Title>
  );
};
