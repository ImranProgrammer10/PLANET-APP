import { View,FlatList,StyleSheet } from 'react-native'
import React from 'react'
import Text from '../text/Text'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../planet-header'
import { colors } from '../../theme/colors'
import { PLANET_LIST } from '../data/planet-list'
import { spacing } from '../../theme/spacing'
import { AntDesign } from '@expo/vector-icons'; 
 

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
    <PlanetHeader></PlanetHeader> 
    <FlatList
    contentContainerStyle={styles.list}
    data={PLANET_LIST}
    keyExtractor={(item )=>item.name}
    renderItem={({item })=>{
      return(
        <View style={styles.item}>
         <View style={{flexDirection:'row',alignItems:'center'}}>
         <View style={[styles.circle ,{backgroundColor:item.color}]}>
          </View>
          <Text preset='h4' style={styles.itemName}>{item.name}</Text>
         </View>
          <AntDesign name="right" size={24} color="white" />

         
        </View>
      );

    }}

    ItemSeparatorComponent={()=> <View style={styles.separator}></View>}
    
    ></FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, backgroundColor:colors.black, 
       
     
    },
    item:{
      flexDirection:'row',
      alignItems:'center',
      padding:spacing[4],
      justifyContent:'space-between',

    },
    circle:{
      width:30,
      height:30,
      borderRadius:15,

    },
    list:{
      padding:spacing[4],
    },
    itemName:{
       textTransform:'uppercase',
      marginLeft:spacing[8]
    },
    separator:{
      borderBottomColor:colors.white,
      borderWidth:0.5,
    },
  });