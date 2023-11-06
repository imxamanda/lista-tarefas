import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import ToDo from './src/screens/ToDo';

export default function App() {
  return (
   <PaperProvider>
     <ToDo/>
   </PaperProvider>
  );
}

const styles = StyleSheet.create({
});