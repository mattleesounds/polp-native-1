import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import Feed from './screens/Feed';

export default function App() {
  return (
    //@ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <Feed />
    </TailwindProvider>
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
