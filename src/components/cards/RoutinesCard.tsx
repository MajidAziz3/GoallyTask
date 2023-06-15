import React from 'react';
import {View, TextProps, ViewProps, TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import {
  headerColor,
  morningColor,
  switchOffColor,
  switchOnColor,
  textBlackColor,
  textWhiteColor,
} from '../../helpers/color';
import {Images} from '../../assets/images';
import {Rubik, RubikMedium} from '../../helpers/fontName';
import SwitchToggle from 'react-native-switch-toggle';

const Container = styled.View`
height:158px;
width:100%;
background-color:${textWhiteColor}
padding-top:17px;
flex-direction:row;
justify-content: space-around;
border-color: rgba(0,0,0,0.25);
shadow-color: rgba(0,0,0,0.25);
shadow-offset: {width: 0, height: 6px};
shadow-opacity: 1;
elevation: 2;
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
interface viewStyle extends TouchableOpacityProps {
  backgroundColor?: string;
}

const Card = styled.TouchableOpacity<viewStyle>`
 width:168px;
 height:100px
 margin-top:8px;
 border-radius:12px;
 padding:10px;
 flex-direction:row;
 justify-content:space-between;
 background-color:${props =>
   props.backgroundColor ? props.backgroundColor : morningColor}
`;
interface bottom extends ViewProps {
  left?: number;
  top?: number;
}
const BottomView = styled.View<bottom>`
flex-direction:row;
justify-content:space-between;
margin-top:${props => props.top}px
margin-left:${props => props.left}px
`;
interface RoutineProps {
  morningRoutine: boolean;
  onToggleMorning: () => void;
  nightToggle: () => void;
  nightRoutine: boolean;
}

const RoutineCard = (props: RoutineProps) => {
  const {Moon, BlackChevron, WhiteChevron, DayRoutine} = Images;
  return (
    <Container>
      <View>
        <Text family={RubikMedium}>Morning Routine</Text>
        <Card>
          <View>
            <Text weight={400}>Weekdays</Text>
            <Text weight={400}>7:00 AM</Text>
            <SwitchToggle
              containerStyle={{
                marginTop: 3,
                width: 51,
                height: 32,
                borderRadius: 16,
                padding: 5,
              }}
              circleStyle={{
                width: 28,
                height: 28,
                borderRadius: 14,
              }}
              onPress={props.onToggleMorning}
              switchOn={props.morningRoutine}
              circleColorOff={textWhiteColor}
              circleColorOn={textWhiteColor}
              backgroundColorOn={switchOnColor}
              backgroundColorOff={switchOffColor}
            />
          </View>
          <View>
            <DayRoutine />
            <BottomView top={2} left={25}>
              <BlackChevron />
            </BottomView>
          </View>
        </Card>
      </View>
      <View>
        <Text family={RubikMedium}>Night Routine</Text>
        <Card backgroundColor={headerColor}>
          <View>
            <Text color={textWhiteColor} weight={400}>
              Everyday
            </Text>
            <Text color={textWhiteColor} weight={400}>
              9:00 PM
            </Text>
            <SwitchToggle
              containerStyle={{
                marginTop: 3,
                width: 51,
                height: 32,
                borderRadius: 16,
                padding: 5,
              }}
              circleStyle={{
                width: 28,
                height: 28,
                borderRadius: 14,
              }}
              onPress={props.nightToggle}
              switchOn={props.nightRoutine}
              circleColorOff={textWhiteColor}
              circleColorOn={textWhiteColor}
              backgroundColorOn={switchOnColor}
              backgroundColorOff={switchOffColor}
            />
          </View>
          <View>
            <Moon />
            <BottomView top={10} left={8}>
              <WhiteChevron />
            </BottomView>
          </View>
        </Card>
      </View>
    </Container>
  );
};
export default RoutineCard;
