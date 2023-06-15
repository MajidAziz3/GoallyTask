import React, { useState } from "react";
import {View,Text, SafeAreaView, StatusBar, TextInput} from "react-native"
import MainScreen from "./screens/mainScreen/MainScreen";
import styled from 'styled-components/native';
import SearchCard from "./components/cards/SearchCard"
import { Provider } from 'react-redux';
import ListCard from "./components/cards/ListCard";
import store from "./redux/store";
const Container=styled.View`
flex:1
`
const App=()=>{
    const [search,setsearch]=useState('')
return(
    <Provider store={store}>
    <Container>
        <StatusBar  translucent backgroundColor={'transparent'}  barStyle={'light-content'}/>
        <MainScreen/>
    </Container>
    </Provider>
)
}
export default App;