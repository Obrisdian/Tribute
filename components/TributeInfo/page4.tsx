import { FC } from "react";
import Image from "next/image";
import * as S from "./styled";
import { borderRight, styled } from "@mui/system";
import { useThemeProps } from "@mui/material";
import * as T from "../TributeImage";
import * as H from "../TributeTitles";
import * as A from "../TributeText";
import * as Y from "../TributeYears";
import theme from "../../theme";
import * as F from "../Footer";
type Props = {
  id?: number;
};

export const TributePage4: FC<Props> = ({ id }) => {
  return (
    <S.FormBody left={id == 1 ? "5vw" : "0vw"} right={id == 2 ? "5vw" : "0vw"}>
      <div id="page4">
        <T.TributeImage1
          image_url="wife.png"
          width="402"
          height="243px"
          top="88px"
          left="182px"
          tab_left="400px"
          phone_left="2px"
          tab_top="478px"
          phone_top="380px"
          tab_width="277px"
          tab_height="206px"
          phone_width="162px"
          phone_height="124px"
        />
        <H.TributeTitle
          title_text="Norman Bourlaug in Mexico head a new plant pathology program"
          width="475px"
          height="72px"
          left="952px"
          top="101px"
          fontSize="22px"
          lineHeight="26px"
          background="rgba(83, 106, 153, 0.49)"
          tab_left="458px"
          tab_top="102px"
          tab_width="277px"
          tab_height="33px"
          tab_fontSize="16px"
          display="none"
        />

        <H.TributeTitle
          title_text=" Norman Bourlaug marries"
          width="400px"
          height="59px"
          left="184px"
          top="497px"
          fontSize="22px"
          lineHeight="26px"
          background="rgba(83, 106, 153, 0.49);"
          tab_left="44px"
          tab_top="490px"
          tab_fontSize="16px"
          tab_width="294px"
          tab_height="63px"
          display="none"
        />

        <A.TributeText
          text="1944 Norman Bourlaug rejects a 100% salary increase from Dupont, leaves behind his pregnant wife, and flies to Mexico to head a new plant pathology program. Over the next 16 years, his team breeds 6,000 different strains of disease resistent wheat - including different varieties for each major"
          width="475px"
          left="952px"
          top="209px"
          fontSize="18px"
          lineHeight="21px"
          tab_width="260px"
          tab_height="130px"
          tab_left="455px"
          phone_left="7px"
          phone_top="127px"
          phone_font="12px"
          phone_width="190px"
        />

        <Y.TributeYears
          year="1938"
          width="175px"
          height="75px"
          left="295px"
          top="389px"
          fontSize="64px"
          tab_left="322px"
          tab_top="30px"
          phone_left="150px"
          phone_top="30px"
        />
        <Y.TributeYears
          year="1944"
          width="175px"
          height="75px"
          left="1161px"
          top="389px"
          fontSize="64px"
          tab_left="322px"
          tab_top="392px"
          phone_left="150px"
          phone_top="285px"
        />

        <T.TributeImage1
          image_url="mexico.png"
          width="474"
          height="239px"
          top="497px"
          left="1000px"
          tab_left="37px"
          phone_left="200px"
          tab_top="97px"
          phone_top="127px"
          tab_width="277px"
          tab_height="206px"
          phone_width="162px"
          phone_height="124px"
        />
        <A.TributeText
          text="1938 Norman Bourlaug marries his 24-year-old wife, Margret Gibson. It is made available due to budget cuts. Inspired by Elvin Charles Stakman, he returns to school under Stakman, who teaches him how to grow pest-resistant plants."
          width="400px"
          left="184px"
          height="69px"
          top="585px"
          fontSize="18px"
          lineHeight="21px"
          tab_left="36px"
          tab_top="569px"
          tab_font="14px"
          tab_width="200px"
          tab_height="130px"
          phone_left="189px"
          phone_top="380px"
          phone_font="12px"
          phone_width="180px"
        />
        <F.TributeArrow
          image_url="down.png"
          width="30px"
          height="45px"
          left="800px"
          top="735px"
          link="/#page5"
          tab_left="383px"
          phone_left="170px"
        />

        <F.TributeArrow
          image_url="up.png"
          width="30px"
          height="45px"
          left="850px"
          top="725px"
          link="/#page3"
          tab_left="403px"
          phone_left="190px"
        />
      </div>
    </S.FormBody>
  );
};
