import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Text from './src/components/text/Text';
 
 
import { spacing } from './src/theme/spacing';
import { typography } from './src/theme/typography';
 

export default function App() {
  const [loaded]=useFonts({
    'Antonio-Medium':require('./fonts/Antonio/static/Antonio-Medium.ttf'),
    'Spartan-Bold':require('./fonts/Antonio/static/Spartan-Bold.ttf'),
    'Spartan-Regular':require('./fonts/Antonio/static/Spartan-Regular.ttf'),
     
  });
  if(!loaded){
    return <Text>Font is Loading...</Text>
  }
  return (
    <View style={styles.container}>
      <Text preset="h3" style={{color:'blue'}}>Open up App.js to start working on your app!</Text>
      <Text style={{marginTop:spacing[4]}}>Hello  </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
