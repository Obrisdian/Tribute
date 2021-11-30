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
  link?: string;
  tab_left?: string;
  phone_left?: string;
};

export const TributeArrow: FC<Props> = ({
  image_url,
  width,
  height,
  left,
  top,
  right,
  link,
  tab_left,
  phone_left,
}) => {
  return (
    <S.ArrowBox
      width={width}
      height={height}
      left={left}
      top={top}
      right={right}
      tab_left={tab_left}
      phone_left={phone_left}
    >
      <a href={link}>
        {" "}
        <S.Arrow>
          <img className="image" src={image_url}></img>
        </S.Arrow>
      </a>
    </S.ArrowBox>
  );
};
