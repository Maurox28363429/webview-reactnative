import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: 'https://app.initium.phoenixtechsa.com/'}}
        useWebKit
        originWhitelist={['*']}
        allowsInlineMediaPlayback
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default App;