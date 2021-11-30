import { FC } from "react";
import Image from "next/image";
import * as S from "./styled";
import { borderRight, styled } from "@mui/system";
import { useThemeProps } from "@mui/material";
import * as T from "../TributeImage";
import * as H from "../TributeTitles";
import * as A from "../TributeText";
import * as Y from "../TributeYears";
import theme from "../../theme"
import  * as F from "../Footer"
type Props = {

  id?: number;
};

export const TributePage3: FC<Props> = ({
  id,
}) => {
  return (
    <S.FormBody left={id == 1 ? "5vw" : "0vw"} right={id == 2 ? "5vw" : "0vw"}>
        <div id="page3">
      <H.TributeTitle
        title_text="1935 Civilian Conservation Corps"
        width="400px"
        height="41px"
        left="177px"
        top="109px"
        fontSize="18px"
        lineHeight="21px"
        background="rgba(83, 106, 153, 0.49)"
        tab_left="458px"
        tab_top="102px"
        tab_width="277px"
        tab_height="33px"
        tab_fontSize="16px"
display="none"
      />
        <T.TributeImage1
        image_url="us_forest.png"
        width="545"
        height="227px"
        top="102px"
        left="952px"
        tab_left="400px"
        phone_left="2px"
        tab_top="478px"
        phone_top="380px"
      />  
      <H.TributeTitle
        title_text="1937  US Forestry Service"
        width="550px"
        height="41px"
        left="952px"
        top="518px"
        fontSize="18px"
        lineHeight="21px"
        background="rgba(83, 106, 153, 0.49);"
        tab_left="44px"
        tab_top="490px"
        tab_fontSize="16px"
        tab_width="294px"
        tab_height="63px"
display="none"
      />
      
      <A.TributeText
      text="Stop school Norman Bourlaug has to stop school and save up more money. Works in the Civilian Conservation Corps, helping starving Americans. 'I saw how food changed them', he said. 'All of this left scars on me.'"   
      width="401px"
      left="182px"

      top="170px"
      fontSize="18px"
      lineHeight="21px"
      tab_left="455px"
      tab_top="173px"
      tab_font="14px"
      tab_width="260px"
      tab_height="130px"
      phone_left="7px"
      phone_top="127px"
      phone_font="12px"
      phone_width="210px"
     />
   
      <Y.TributeYears 
            year="1935"
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
            year="1937"
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
        image_url="work_ccc.png"
        width="400"
        height="243px"
        top="518px"
        left="176px"
        tab_left="37px"
        phone_left="229px"
        tab_top="97px"
        phone_top="127px"
      /> 
      <A.TributeText 
       text="Norman Bourlaug finishes university and takes a job in the US Forestry Service"   
       width="451px"
       left="952px"
       height="69px"
       top="596px"
       fontSize="19px"
       lineHeight="22px"
       tab_left="36px"
       tab_top="569px"
       tab_font="14px"
       tab_width="200px"
       tab_height="130px"
       phone_left="259px"
       phone_top="380px"
       phone_font="12px"
       phone_width="130px"
       />
        <F.TributeArrow
  image_url="down.png"
  width="30px"
  height="45px"
  left="800px"
  top="735px"
  link="/#page3"
  tab_left="383px"
  phone_left="170px"
  />

<F.TributeArrow
  image_url="up.png"
  width="30px"
  height="45px"
  left="850px"
  top="725px"
  link="/#page1"
  tab_left="403px"
  phone_left="190px"/>
       </div>
    </S.FormBody>
  );
};

