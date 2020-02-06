import React, {FunctionComponent, useEffect} from 'react';
import {FlatList, ActivityIndicator, Text} from 'react-native';
import {AppState} from '../reducers';
import AppActions from '../actions/Actions';
import {
  GetConnectDispatchPropsType,
  isLoading,
  isError,
} from '../utils/actionCreator';
import {connect} from 'react-redux';

const {getBreeds} = AppActions;

const mapStateToProps = (state: AppState) => ({
  breeds: state.breeds,
});

const mapDispatchToProps = {
  getBreeds,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = GetConnectDispatchPropsType<typeof mapDispatchToProps>;
type Props = StateProps & DispatchProps;

const BreedsComponent: FunctionComponent<Props> = ({breeds, getBreeds}) => {
  useEffect(() => {
    getBreeds({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading(breeds)) return <ActivityIndicator />;
  if (isError(breeds)) return <Text>Sorry, couldn't fetch breeds</Text>;
  return (
    <FlatList data={breeds.data} renderItem={b => <Text>{b.item}</Text>} />
  );
};

const Connected = connect(mapStateToProps, mapDispatchToProps)(BreedsComponent);

export default Connected;
