import React from "react";
import { Text, ViewProps } from "react-native";
import styled from 'styled-components/native';
import { headerColor, textWhiteColor } from "../../helpers/color";
import Circle from "../circle/circle";
import { Images } from "../../assets/images";
import { Rubik } from "../../helpers/fontName";

const Container=styled.View`
height:100px;
width:100%;
background-color:${headerColor}
padding-horizontal:16px;
padding-top:50px;
flex-direction:row;
justify-content: space-between;
`
const TextHeader=styled.Text`
margin-top:10px;
color:${textWhiteColor};
font-size:20px;
font-weight:400;
line-height:24px;
font-family:${Rubik}
`


const Header=()=>{
    const {Home,Setting}=Images
    return(
        <Container>
            <Circle disabled={true}>
                <Home/>
            </Circle>
            <TextHeader>Routines</TextHeader>
            <Circle disabled={true}>
                <Setting/>
            </Circle>
        </Container>
    )
}
export default Header