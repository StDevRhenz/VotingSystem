import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Userhomepage from "./screens/homepage";

export default function App() {
  return (
    <Userhomepage />
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

//hahahahahahhahahha perfect na kaya pag merge