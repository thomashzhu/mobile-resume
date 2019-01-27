import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { createAppContainer } from 'react-navigation';

import { HomeTabs } from './src/navigation/HomeTabs';
import { createStore } from 'redux';
import { reducers } from './src/reducers';
import { Provider } from 'react-redux';

const AppContainer = createAppContainer(HomeTabs);

class App extends React.Component {
  store = createStore(reducers);

  render() {
    return (
      <Provider store={this.store}>
        <AppContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/* tslint:disable-next-line:no-default-export */
export default App;
/* tslint:enable */
