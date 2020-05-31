import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import rootReducer from './src/reducer/rootReducer'
import FirstPage from './component/firstPage'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
      
      <FirstPage/>
      </Provider>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
