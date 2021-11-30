import { FC } from "react";
import Image from "next/image";
import * as S from "./styled";
import { borderRight, styled } from "@mui/system";
import { useThemeProps } from "@mui/material";
type Props = {
  year?: string;
  width: string;
  height: string;
  left: string;
  top: string;
  fontSize: string;
  lineHeight?: string;
  tab_left?: string;
  tab_top?: string;
  phone_left?: string;
  phone_top?: string;
};

export const TributeYears: FC<Props> = ({
  year,
  width,
  height,
  left,
  top,
  fontSize,
  lineHeight,
  tab_left,
  tab_top,
  phone_left,
  phone_top,
}) => {
  return (
    <S.Years
      width={width}
      height={height}
      left={left}
      top={top}
      fontSize={fontSize}
      tab_left={tab_left}
      tab_top={tab_top}
      phone_left={phone_left}
      phone_top={phone_top}
    >
      <div id="Year1">{year}</div>
    </S.Years>
  );
};
