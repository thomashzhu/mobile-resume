import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { createAppContainer } from 'react-navigation';

import { HomeTabs } from './src/navigation/HomeTabs';

const AppContainer = createAppContainer(HomeTabs);

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
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
