import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { LoaderContext } from './LoaderContext';
import { useContext } from 'react';
const Loader = () => {
    const { isLoading } = useContext(LoaderContext);

  return (
    <Spinner
      visible={isLoading}
      textStyle={{ color: '#fff' }}
      animation={'fade'}
      color={"#FFD600"}
      overlayColor={'rgba(0, 0, 0, 0.25)'}
    />
  );
};

export default Loader;
