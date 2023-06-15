import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import {circleColor, borderColor} from '../../helpers/color';

interface IcircleProps extends TouchableOpacityProps {
  size?: number;
  backgroundColor?: string;
  border?: boolean;
}

const Container = styled.TouchableOpacity<IcircleProps>`
  width: ${props => (props.size ? props.size : 36)}px;
  height: ${props => (props.size ? props.size : 36)}px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : circleColor};
  border-radius: ${props => (props.size ? props.size : 36 / 2)}px;
  border: ${props => props.border && `1px solid ${borderColor}`};
  justify-content: center;
  align-items: center;
`;
interface CircleProps {
  children?: React.ReactNode;
  disabled?: boolean;
  size?: number;
  border?: boolean;
  onpress?: () => void;
  backgroundColor?: string;
}
const Circle = (props: CircleProps) => {
  return (
    <Container
      {...props}
      onPress={props.onpress}
      backgroundColor={props.backgroundColor}
      size={props.size}
      border={props.border}>
      {props.children}
    </Container>
  );
};
export default Circle;
