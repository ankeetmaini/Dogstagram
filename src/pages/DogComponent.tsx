import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View, Image, Button} from 'react-native';
import {AppState} from '../reducers';
import AppActions from '../actions/Actions';
import {
  GetConnectDispatchPropsType,
  isLoading,
  isError,
} from '../utils/actionCreator';
import {connect} from 'react-redux';
import {NavigationStackProp} from 'react-navigation-stack';

const mapStateToProps = (state: AppState) => ({
  dog: state.dog,
});

const mapDispatchToProps = {
  getDog: AppActions.getDog,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = GetConnectDispatchPropsType<typeof mapDispatchToProps>;
type Nav = {
  navigation: NavigationStackProp<{
    breed: string;
  }>;
};
type Props = StateProps & DispatchProps & Nav;

const DogComponent: React.FC<Props> = ({navigation, dog, getDog}) => {
  const renderDog = () => {
    getDog(navigation.getParam('breed'));
  };
  useEffect(() => {
    renderDog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading(dog)) return <ActivityIndicator />;
  if (isError(dog)) return <Text>Sorry, couldn't fetch</Text>;
  return (
    <View style={{display: 'flex', alignItems: 'center'}}>
      <Image source={{uri: dog.data.url}} style={{height: 300, width: 300}} />
      <Button title="Wow, next please" onPress={renderDog} />
    </View>
  );
};

// FIXME please can someone find a way to do this??
// @ts-ignore
DogComponent.navigationOptions = ({navigation}: Nav) => {
  return {
    title: navigation.getParam('breed'),
  };
};

const Connected = connect(mapStateToProps, mapDispatchToProps)(DogComponent);

export default Connected;
