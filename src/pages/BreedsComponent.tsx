import React, {useEffect} from 'react';
import {
  FlatList,
  ActivityIndicator,
  Text,
  TouchableHighlight,
} from 'react-native';
import {AppState} from '../reducers';
import AppActions from '../actions/Actions';
import {isLoading, isError, isInit} from '../utils/actionCreator';
import {connect, ConnectedProps} from 'react-redux';
import {NavigationStackProp} from 'react-navigation-stack';
import {NextPage} from 'next';

const {getBreeds} = AppActions;

const mapStateToProps = (state: AppState) => ({
  breeds: state.breeds,
});

const mapDispatchToProps = {
  getBreeds,
};

type FinalProps = ConnectedProps<typeof ConnectedToRedux> & {
  navigation: NavigationStackProp;
};
const BreedsComponent: NextPage<FinalProps> = ({
  breeds,
  getBreeds,
  navigation,
}) => {
  useEffect(() => {
    isInit(breeds) && getBreeds({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading(breeds)) return <ActivityIndicator />;
  if (isError(breeds)) return <Text>Sorry, couldn't fetch breeds</Text>;
  return (
    <FlatList
      data={breeds.data}
      keyExtractor={d => d}
      renderItem={b => (
        <TouchableHighlight
          onPress={() => navigation.navigate('Dog', {breed: b.item})}>
          <Text>{b.item}</Text>
        </TouchableHighlight>
      )}
    />
  );
};

// @ts-ignore
BreedsComponent.getInitialProps = ({store}) => {
  return store.dispatch(getBreeds({}));
};
const ConnectedToRedux = connect(mapStateToProps, mapDispatchToProps);

export default ConnectedToRedux(BreedsComponent);
