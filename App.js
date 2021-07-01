import 'react-native-gesture-handler'
import React, {Component, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import Navegator from './app/navigations/Navigator'

const fetchFont = () => {
  return Font.loadAsync({
      'AllessaPersonalUse-4pRl' : require('./app/fonts/AllessaPersonalUse-4pRl.ttf'),
      'Amsterdam-ZVGqm':require('./app/fonts/Amsterdam-ZVGqm.ttf'),
      'BeautifulPeoplePersonalUse-dE0g': require('./app/fonts/BeautifulPeoplePersonalUse-dE0g.ttf'),  
      'BeautyMountainsPersonalUse-od7z': require('./app/fonts/BeautyMountainsPersonalUse-od7z.ttf'), 
      'BlackberryJamPersonalUse-rXOB': require('./app/fonts/BlackberryJamPersonalUse-rXOB.ttf'), 
      'BunchBlossomsPersonalUse-0nA4' : require('./app/fonts/BunchBlossomsPersonalUse-0nA4.ttf'),
      'CassandraPersonalUseRegular-3BjG' : require('./app/fonts/CassandraPersonalUseRegular-3BjG.ttf'),  
      'CinderelaPersonalUseRegular-RDvM' : require('./app/fonts/CinderelaPersonalUseRegular-RDvM.ttf'), 
      'CountrysideTwo-r9WO' : require('./app/fonts/Countryside-YdKj.ttf'),
      'Countryside-YdKj' : require('./app/fonts/CountrysideTwo-r9WO.ttf'),
      'LemonJellyPersonalUse-dEqR' : require('./app/fonts/LemonJellyPersonalUse-dEqR.ttf'),  
      'MetalsmithRegular-p7ylO': require('./app/fonts/MetalsmithRegular-p7ylO.otf'),
  })
}

export default function App(){


  const [fontLoaded, setfontLoaded] = useState(false) 

  if(!fontLoaded){
    return(
      <AppLoading
      startAsync = {fetchFont}
      onError = {() => console.log('ERROR')}
      onFinish = {() => setfontLoaded(true)}
      />
    )
  }

  return(
  <NavigationContainer>
    <Navegator />
  </NavigationContainer>
  )


}