import { View,StyleSheet } from 'react-native'
import React from 'react'
import Text from '../text/Text'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../planet-header'
import { colors } from '../../theme/colors'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Home() {
  return (
    <SafeAreaView style={styles.container
    }>
    <PlanetHeader></PlanetHeader> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, backgroundColor:colors.black,
       
     
    },
  });