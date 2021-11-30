import { FC } from "react";
import Image from "next/image";
import * as S from "./styled";
import { borderRight, styled } from "@mui/system";
import { useThemeProps } from "@mui/material";
import * as T from "../TributeImage";
import * as H from "../TributeTitles";
import * as A from "../TributeText";
import * as Y from "../TributeYears";
import  * as F from "../Footer"
import * as N from "../NavBar"
import theme from "../../theme"


type Props = {

  id?: number;
};

export const TributeInfo: FC<Props> = ({
  id,
}) => {
  return (
    <S.FormBody left={id == 1 ? "5vw" : "0vw"} right={id == 2 ? "5vw" : "0vw"} color={theme.palette.secondary.main}>
      <div id="page1">
        <N.Info/>
        <N.About/>
      <H.TributeTitle
        title_text="TRIBUTE"
        width="375px"
        height="63px"
        left="131px"
        top="38px"
        fontSize="64px"
        lineHeight="75px"
        letterSpacing="0.285em"
        tab_width="323px"
        tab_height="63px"
        tab_left="36px"
        tab_top="36px"
        tab_fontSize="48px"
        phone_fontSize="36px"
        
      />
      <H.TributeTitle
        title_text="Dr. Norman Borlaug"
        width="384px"
        height="50px"
        left="858px"
        top="161px"
        fontSize="43px"
        lineHeight="50px"
        tab_width="247px"
        tab_height="40px"
        tab_left="485px"
        tab_top="169px"
        tab_fontSize="27px"
        phone_fontSize="24px"
        phone_top="113px"
        phone_left="32px"
      />
      <T.TributeImage1
        image_url="mans.png"
        width="588px"
        height="354px"
        left="131px"
        tab_left="37px"
        phone_left="33px"
        top="161px"
        tab_top="153px"
        phone_top="310px"
      
      />
      <A.TributeText
      text="The man who saved a billion lives"   
      width="384px"
      left="858px"
      height="88px"
      top="255px"
      fontSize="36px"
      lineHeight="42px"
      letterSpacing="0.085em"
      tab_width="247px"
      tab_height="89px"
      tab_left="500px"
      tab_top="251px"
      tab_font="24px"
      phone_left="32px"
      phone_top="157px"
      />
      <Y.TributeYears 
      year="1914 - 2009"
      width="344px"
      height="75px"
      left="858px"
      top="371px"
      fontSize="64px"
      tab_left="502px"
      tab_top="364px"
      phone_left="50px"
      phone_top="235px"
       />
      <A.TributeText 
       text="Dr. Norman Borlaug, third from the left, trains biologists in Mexico on how to increase wheat yields - part of his life-long war on hunger."   
       width="522px"
       left="131px"
       height="69px"
       top="559px"
       fontSize="19px"
       lineHeight="22px"
       tab_width="389px"
       tab_height="103px"
       tab_left="35px"
       tab_top="522px"
       phone_left="15px"
       phone_width="300px"
       />
       </div>

<F.TributeArrow
  image_url="down.png"
  width="30px"
  height="45px"
  left="800px"
  top="735px"
  link="/#page2"
  tab_left="383px"
  phone_left="170px"
  />
    </S.FormBody>
  );
};

