import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import style from "../../styles/global"
import { useTailwind } from 'nativewind'
import { TextInput } from 'react-native-gesture-handler'
import FadeInView from '../FadeInView'
import TopToBottom from '../TopToBottom'
const AddTransaction = () => {
    const [customerid, setCustomerid] = useState("")
    const handletransaction =()=>{

    }
  return (
    <View style={style.container}>
      <View style={style.addtransactionbody}>
      <TopToBottom>

        <Text style={[style.heading, style.bigheading]}>Enter Details</Text>
        <View style={style.scanner}>
        {/* Implement ur scanner here  */}
            <Text style={[style.label,style.profiletexts]}>Scan</Text>
        </View>
        <View style={style.transactiontextcontainer}>
        <Text style={[style.label, style.textcenter]}>OR</Text>
        </View>
        <View style={[style.transactiontextcontainer,style.lessmargin]}>
        <Text style={style.label}>Enter Customer ID:</Text>
            <TextInput 
              style={style.input}
              onChangeText={(text) => setCustomerid(text)}
              placeholder="ID"
              placeholderTextColor="gray"
            />
        </View>
        <Pressable style={style.transactionbutton} onPress={handletransaction}>
            <Text style={style.buttontext}>SUBMIT</Text>
          </Pressable>
      </TopToBottom>
      </View>
    </View>
  )
}

export default AddTransaction