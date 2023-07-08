import { View, Text, ImageBackground, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from "../../styles/global"
import FadeInView from '../FadeInView'
const Profile = ({manager}) => {
  console.log(manager.managertransactions)
  return (
    <View style={style.container}>
    <ImageBackground
        source={require("../../assets/background.png")}
        style={[style.profilebg, style.backgroundImage, style.fullbg]}
      >
    <FadeInView>

     <View style={style.profilebody}>
     <View style={style.profilecontainer}>
     <View style={style.profilepicturecontainer}>

     {manager.managerphoto? 
     <Image source={{uri : `${manager.managerphoto}`}} style={style.profilepicture} />
     :
     <Image source={require("../../assets/logo.png")} style={style.profilepicture} />


     } 
      
     </View>
     <View style={style.profiletextcontainer}>
      <View style={style.profiletextboxes}>
      <Text style={style.profiletexts} >Name </Text>

      </View>
      <Text style={[style.profiletexts,style.premiumtext]} >{manager.managername}</Text>
      
      <View style={style.profiletextboxes}>
      <Text style={style.profiletexts}>Email </Text>

      </View>
      <Text style={[style.profiletexts,style.premiumtext]}> {manager.manageremail}</Text>
      <View style={style.profiletextboxes}>
      <Text style={style.profiletexts}>UID </Text>

      </View>
      <Text style={[style.profiletexts,style.premiumtext]}>{manager.managerid}</Text>
      <View style={style.profiletextboxes}>
      <Text style={[style.profiletexts]}>Date of Joining </Text>

      </View>
      <Text style={[style.profiletexts,style.premiumtext]}> {manager.managerdate}</Text>
      <View style={style.profiletextboxes}>
      <Text style={[style.profiletexts]}>Transactions </Text>

      </View>
      <Text style={[style.profiletexts, style.premiumtext]}> {manager.managertransactions}</Text>

     </View>
     </View>
     </View>
      </FadeInView>
      </ImageBackground>
    </View>
  )
}

export default Profile