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

export const TributePage6: FC<Props> = ({ id }) => {
  return (
    <S.FormBody left={id == 1 ? "5vw" : "0vw"} right={id == 2 ? "5vw" : "0vw"}>
      <div id="page6">
        <H.TributeTitle
          title_text=" Norman Bourlaug dies"
          width="561px"
          height="53px"
          left="600px"
          top="81px"
          fontSize="24px"
          lineHeight="26px"
          background="rgba(83, 106, 153, 0.49)"
          tab_left="240px"
          tab_top="127px"
          tab_width="277px"
          tab_height="33px"
          tab_fontSize="16px"
          display="none"
        />

        <a href="https://en.wikipedia.org/wiki/Norman_Borlaug">
          {" "}
          <H.TributeTitle
            title_text="More info on the wikipedia"
            width="273px"
            height="35px"
            left="740px"
            top="662px"
            fontSize="22px"
            lineHeight="24px"
            background="rgba(83, 106, 153, 0.49);"
            tab_left="240px"
            tab_top="619px"
            tab_width="277px"
            tab_height="33px"
            tab_fontSize="16px"
            phone_top="400px"
            phone_left="50px"
          />
        </a>

        <A.TributeText
          text="2009 Norman Bourlaug dies at the age of 95."
          width="497px"
          left="700px"
          top="178px"
          fontSize="18px"
          lineHeight="21px"
          tab_left="250px"
          tab_top="203px"
          tab_font="14px"
          tab_width="260px"
          tab_height="130px"
          phone_left="7px"
          phone_top="127px"
          phone_font="18px"
          phone_width="170px"
        />

        <Y.TributeYears
          year="2009"
          width="175px"
          height="75px"
          left="790px"
          top="272px"
          fontSize="64px"
          tab_left="362px"
          tab_top="35px"
          phone_left="180px"
          phone_top="35px"
        />

        <T.TributeImage1
          image_url="2009.png"
          width="446"
          height="245px"
          top="372px"
          left="650px"
          tab_left="200px"
          phone_left="200px"
          tab_top="297px"
          phone_top="127px"
          tab_width="427px"
          tab_height="285px"
          phone_width="162px"
          phone_height="140px"
        />

        <F.TributeArrow
          image_url="up.png"
          width="30px"
          height="45px"
          left="850px"
          top="725px"
          link="/#page5"
          tab_left="403px"
          phone_left="190px"
        />
      </div>
    </S.FormBody>
  );
};
