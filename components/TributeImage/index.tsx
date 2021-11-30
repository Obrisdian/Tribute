import { FC } from "react";
import Image from "next/image";
import * as S from "./styled";
import { borderRight, styled } from "@mui/system";
import { useThemeProps } from "@mui/material";
type Props = {
  image_url?: string;
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

export const TributeImage1: FC<Props> = ({
  image_url,
  width,
  height,
  left,
  top,
  right,
  tab_top,
  tab_left,
  phone_left,
  phone_top,
}) => {
  return (
    <S.ImageBox
      width={width}
      height={height}
      left={left}
      top={top}
      right={right}
      tab_left={tab_left}
      tab_top={tab_top}
      phone_left={phone_left}
      phone_top={phone_top}
    >
      <S.Image>
        <img className="image" src={image_url}></img>
      </S.Image>
    </S.ImageBox>
  );
};
