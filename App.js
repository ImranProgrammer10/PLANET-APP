import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Text from './src/components/text/Text';
import { NavigationContainer,DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { spacing } from './src/theme/spacing';
import { typography } from './src/theme/typography';
import Home from './src/components/screens/home';
import { colors } from './src/theme/colors';

const Stack = createNativeStackNavigator();
 

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
    <>
    <NavigationContainer  >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style='light'></StatusBar>
    </>
    

  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
   
  },
});
