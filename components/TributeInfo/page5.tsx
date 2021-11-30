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

export const TributePage5: FC<Props> = ({ id }) => {
  return (
    <S.FormBody left={id == 1 ? "5vw" : "0vw"} right={id == 2 ? "5vw" : "0vw"}>
      <div id="page5">
        <H.TributeTitle
          title_text=" Norman Bourlaug visits Delhi"
          width="400px"
          height="41px"
          left="177px"
          top="109px"
          fontSize="18px"
          lineHeight="21px"
          background="rgba(83, 106, 153, 0.49)"
          tab_left="438px"
          tab_top="102px"
          tab_width="277px"
          tab_height="33px"
          tab_fontSize="16px"
          display="none"
        />
        <T.TributeImage1
          image_url="2005.png"
          width="545"
          height="227px"
          top="102px"
          left="952px"
          tab_left="370px"
          phone_left="2px"
          tab_top="390px"
          phone_top="380px"
        />
        <H.TributeTitle
          title_text="Norman Borlaug's 2005 speech"
          width="550px"
          height="41px"
          left="952px"
          top="518px"
          fontSize="18px"
          lineHeight="21px"
          background="rgba(83, 106, 153, 0.49);"
          tab_left="44px"
          tab_top="390px"
          tab_fontSize="16px"
          tab_width="294px"
          tab_height="33px"
          display="none"
        />

        <A.TributeText
          text="1962 Norman Bourlaug Visits Delhi and brings his high-yielding strains of wheat to the Indian subcontinent in time to help mitigate mass starvation due to a rapidly expanding population"
          width="401px"
          left="182px"
          top="170px"
          fontSize="18px"
          lineHeight="21px"
          tab_width="260px"
          tab_height="130px"
          tab_left="470px"
          tab_top="160px"
          phone_left="7px"
          phone_top="127px"
          phone_font="12px"
          phone_width="180px"
        />

        <Y.TributeYears
          year="1962"
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
          year="2005"
          width="175px"
          height="75px"
          left="1161px"
          top="389px"
          fontSize="64px"
          tab_left="322px"
          tab_top="300px"
          phone_left="150px"
          phone_top="285px"
        />
        <T.TributeImage1
          image_url="visit_Delhi.png"
          width="400"
          height="243px"
          top="518px"
          left="176px"
          tab_left="37px"
          phone_left="199px"
          tab_top="97px"
          phone_top="127px"
        />
        <A.TributeText
          text="In his 2005 speech, Norman Bourlaug stated that 'we will have to double the world's food supply by 2050.'
       He argues that genetically modified crops are the only way we can meet demand because we run out of arable land. He says genetically modified crops are not inherently dangerous because 'we've been genetically modifying plants and animals for a long time. Long before we called it science, humans chose the best breeds'."
          width="451px"
          left="962px"
          height="69px"
          top="576px"
          fontSize="19px"
          lineHeight="22px"
          tab_top="429px"
          tab_font="14px"
          tab_width="300px"
          tab_left="20px"
          tab_height="130px"
          phone_left="229px"
          phone_top="380px"
          phone_font="12px"
          phone_width="150px"
        />
        
        <F.TributeArrow
          image_url="down.png"
          width="30px"
          height="45px"
          left="800px"
          top="735px"
          link="/#page6"
          tab_left="383px"
          phone_left="170px"
        />

        <F.TributeArrow
          image_url="up.png"
          width="30px"
          height="45px"
          left="850px"
          top="725px"
          link="/#page4"
          tab_left="403px"
          phone_left="190px"
        />
      </div>
    </S.FormBody>
  );
};
