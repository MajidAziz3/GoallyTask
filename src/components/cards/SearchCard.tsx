import React from 'react';
import {TextInput,View} from 'react-native';
import styled from 'styled-components/native';
import Circle from '../circle/circle';
import {Images} from '../../assets/images';
import {borderColor} from '../../helpers/color';
import {searchColor} from '../../helpers/color';

const Container = styled.View`
  height: 66px;
  flex:1
  width: 100%;
  flex-direction: row;
  padding-top: 12px;
  padding-horizontal: 16px;
  justify-content: space-between;
  align-items: center;
`;
const SearchContainer = styled.View`
height:50px
width:299px
border-color:${borderColor}
border-width:1px
flex-direction: row
justify-content: space-between
`;
const SearchButton = styled.TouchableOpacity`
  width: 42px;
  heigth: 48px;
  background-color: ${searchColor};
  justify-content: center;
  align-items: center;
`;
interface SearchProps {
  onPress: () => void;
  onPressSearch: () => void;
  children: React.ReactNode;
}
const SearchCard = (props: SearchProps) => {
  const {Filter, Search} = Images;
  return (
    <Container>
      <SearchContainer>
        <View>
        {props.children}
        </View>
        <SearchButton onPress={props.onPressSearch}>
          <Search />
        </SearchButton>
      </SearchContainer>
      <Circle onpress={props.onPress} size={40} border>
        <Filter />
      </Circle>
    </Container>
  );
};
export default SearchCard;
