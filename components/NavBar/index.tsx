import { FC } from "react";
import Image from "next/image";
import * as S from "./styled";
import { borderRight, styled } from "@mui/system";
import { useThemeProps } from "@mui/material";

export const Info = () => {
  return (
    <S.Info>
      <a href="https://en.wikipedia.org/wiki/Norman_Borlaug">
       
        <div id="info">Info</div>
      </a>
    </S.Info>
  );
};
export const About = () => {
  return (
    <S.About>
      <a href="https://en.wikipedia.org/wiki/Norman_Borlaug">
      
        <div id="about">About</div>
      </a>
    </S.About>
  );
};
