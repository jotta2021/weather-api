
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import {} from 'expo-location'
import api from '../api'
import Header from './header'
import { weatherImages } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { Container,Informations,Temp,Date,ContainerIcon,Clima,NextDays,ForecastDay,Umidity,ForecastContainer } from './styled';
import Next from './nextDays';


export default function Home() {
const [ darkMode, setDarkMode] = useState(true)
const [currentTemperature, setCurrentTemperature] = useState('25')
const [ location, setLocation] = useState('Penedo AL')
const [weather,setWeather] =useState(null)






useEffect(()=>{

  async function Load () {
      api.get(`/current.json?key=7ea4f61180f1457fbf301541232706&q=${location}&lang=pt`)
.then((response)=>{

  if(response.status === 200){
    console.log(response.data)
    setWeather(response.data)
  }
 
})
  }



Load()
},[])

  return ( 




    <Container >
     
      <Header location={location}/>
    
      
    {

      weather ? (
       
          <View >

       <Informations >
         <Temp >{weather.current.temp_c}</Temp>
     <Icon style={{marginTop:-40,marginLeft:5}}  name="circle-o" size={20} color='white'/>
     <Date >{weather.location.localtime}</Date>
     
        </Informations>

<ContainerIcon>

       <Image style={{width:160,height:160}} source={weatherImages[weather.current.condition.text]}/>
  <Clima>{weather.current.condition.text}</Clima>
 
  </ContainerIcon>
    
     <ForecastContainer>
<ForecastDay>
  <Icon2 name='water' size={30} color='white'/>
  <Umidity>{weather.current.humidity + '%'}</Umidity>
</ForecastDay>
<ForecastDay>
<Feather name='wind' size={30} color='white'/>
  <Umidity>{weather.current.wind_kph + 'Km'}</Umidity>
</ForecastDay>

      </ForecastContainer>        
     
       
    




  </View>
        
        
      ):null
    }
    <NextDays>
    <Next location ={location}/>
    </NextDays>
    
    </Container>
   
  )
}
