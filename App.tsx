import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Dairy Pure App</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 12,
  },
});
