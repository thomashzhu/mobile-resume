import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  YellowBox,
} from 'react-native';
import { createAppContainer } from 'react-navigation';

import { HomeTabs } from './src/navigation/HomeTabs';
import { createStore } from 'redux';
import { reducers } from './src/reducers';
import { Provider } from 'react-redux';

const AppContainer = createAppContainer(HomeTabs);

// Innocuous warnings from ExpoKit (https://forums.expo.io/t/unable-to-ios-dev-menu-after-upgrading-to-sdk27-on-expokit/9883/10)
// TODO: Check back later
YellowBox.ignoreWarnings(['Class EXHomeModule', 'Class EXTest', 'Class EXDisabledDevMenu', 'Class EXDisabledRedBox', 'Class RCTCxxModule']);

class App extends React.Component {
  store = createStore(reducers);

  render() {
    return (
      <Provider store={this.store}>
        <StatusBar
          animated={false}
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        />

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
