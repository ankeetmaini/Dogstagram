import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View, Image, Button} from 'react-native';
import {AppState} from '../reducers';
import AppActions from '../actions/Actions';
import {isLoading, isError, isInit} from '../utils/actionCreator';
import {connect, ConnectedProps} from 'react-redux';
import {NavigationStackProp} from 'react-navigation-stack';
import {NextPage} from 'next';

const mapStateToProps = (state: AppState) => ({
  dog: state.dog,
});

const mapDispatchToProps = {
  getDog: AppActions.getDog,
};

type Props = ConnectedProps<typeof ConnectedToRedux>;
type Nav = {
  navigation: NavigationStackProp<{
    breed: string;
  }>;
};

const DogComponent: NextPage<Props & Nav> = ({navigation, dog, getDog}) => {
  const renderDog = () => {
    getDog(navigation.getParam('breed'));
  };
  useEffect(() => {
    isInit(dog) && renderDog();
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

// @ts-ignore
DogComponent.getInitialProps = ({store}) => {
  return store.dispatch(AppActions.getDog('labrador'));
};

const ConnectedToRedux = connect(mapStateToProps, mapDispatchToProps);

export default ConnectedToRedux(DogComponent);
