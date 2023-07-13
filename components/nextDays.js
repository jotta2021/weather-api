import { View,Text, ScrollView, FlatList } from "react-native"
import { useEffect, useState } from "react"
import api from "../api"
import Date from 'react-native-vector-icons/Fontisto'
import * as C from './nextStyled'

export default function Next(props){



const [ forecast,setForecast] = useState(null)


useEffect(()=>{

async function Load(){
    api.get(`/forecast.json?key=7ea4f61180f1457fbf301541232706&q=${props.location}&days=3&aqi=no&alerts=no`)
    .then((response)=>{

console.log(response.data)
setForecast(response.data)
    })
    .catch((error)=>{
console.log(error)
    })
}

Load()

},[])

    return(
        <View>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-end',gap:5}}>
                <Date name='date' size={24} color='white'/>
                          <Text style={{fontSize: 18,color:'white',}} > Previsão para os próximos dias</Text>
<Text style={{color:'white'}}></Text>  
            </View>

  
{


    forecast ?(

        <C.Container >
         <C.Date>


         </C.Date>

<Text>{forecast.forecast.forecastday[0].day.maxtemp_c}</Text>


            </C.Container>
    ):null
}
        </View>
    )
}