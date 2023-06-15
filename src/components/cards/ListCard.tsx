import React from 'react';
import styled from 'styled-components/native';
import {Images} from '../../assets/images';
import {
  borderColor,
  borderListColor,
  textBlackColor,
} from '../../helpers/color';
import {searchColor} from '../../helpers/color';
import {TextProps} from 'react-native';
import {Rubik, RubikMedium} from '../../helpers/fontName';

const Container = styled.View`
  height: 71px;
  flex-direction: row;
  padding-top: 12px;
  margin-horizontal: 16px;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${borderListColor};
`;
const InnerImageView = styled.View`
  flex-direction: row;
`;
const ImageView = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 2px;
`;
const TextView = styled.View`
  margin-left: 5px;
  align-items: flex-start;
`;
interface textStyle extends TextProps {
  color?: string;
  size?: number;
  weight?: number;
  family?: string;
}
const Text = styled.Text<textStyle>`
  color: ${props => (props.color ? props.color : textBlackColor)};
  font-size: ${props => (props.size ? props.size : 16)}px;
  font-weight: ${props => (props.weight ? props.weight : 500)};
  line-height: 24px;
  font-family: ${props => (props.family ? props.family : Rubik)};
  text-align: center;
`;
interface ListProps {
  image: string;
  name: string;
  schedule: any;
}
const ListCard = (props: ListProps) => {
  const {BlackChevron} = Images;
  return (
    <Container>
      <InnerImageView>
        <ImageView source={{uri: props.image}} />
        <TextView>
          <Text family={RubikMedium}>{props.name}</Text>
          <Text weight={400}>{`M at ${props.schedule}`}</Text>
        </TextView>
      </InnerImageView>
      <BlackChevron />
    </Container>
  );
};
export default ListCard;
