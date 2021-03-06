import React from 'react';
import store from './src/store/store';
import {Provider} from 'react-redux';
import Routes from './src/routes/Routes';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
