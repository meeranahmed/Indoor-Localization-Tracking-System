import React from "react";
import { Text, View ,StyleSheet, Image,Button } from "react-native";
import { useState, useEffect } from 'react';




   

const Localization =() =>{

    let replaylabels=[5,5,3,4,1,5,2,3,4,5,1,2,0,1,4,5,1,2,3,4,2,1,3,4,2,1,5]
    let labelURL ='https://run.mocky.io/v3/24ce8e40-5e29-46ea-b78a-22eeedd6d0e0';

    let [label , setLabel] = useState(0);
    let [replayLabel , setreplayLabel] = useState(0);
    let coordinates = [
        [0 , 0] ,//intial position
        [130 , 520], //Electronics lab
        [190, 450], //1st labs corridor
        [190, 250], //lecture corridor
        [130, 410], //TAS office
        [190, 650], //2st labs corridor
        
        
        [250 , 325], //Embedded lab       
        [250, 200], //lecture
        [180, 150], //om ahmed
        [80, 360], //right corridor
        [290,360],//left corridor 
        [130 , 480], //Network lab   
      ];
    
     let [sec, setSec] = useState(0);
    
    setInterval(() =>{
        setSec(sec = sec+1)
      }, 10000)


    // useEffect(() => {
    //     console.log("label", label);

    //     fetch(labelURL)
    //     .then((response) => response.json()) // get response, convert to json
    //     .then((json) => {
    //         console.log(json)
    //         setLabel(json.value);
    //         // console.log("label", label);
    //     })
    //     .catch((error) => alert(error)) // display errors
    // }, [sec]);
    
    
   

    //console.log(label);
    //console.log(coordinates[label][1]);
   const timer =ms => new Promise(res => setTimeout(res,ms))
   let rpval
    async function replay(){
        for(let i=0;i<replaylabels.length;i++){
            
            rpval = replaylabels[i]
            await timer(2000)
            console.log(replaylabels[i])
            setreplayLabel(replaylabels[i])

            
        }
    }
    

    



    return(
        
        <View>
            <Text style = {styles.title}> SBME Department Floor </Text>

            <Image
             
            source={require('../assets/floor.jpg')}
            style = {{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                width:300,
                height:700,
                position: 'absolute',
                top: 80,
                left: 35,
                bottom: 0,
                right: 0,
            
            }}
            /> 
            <View style={{
                position: 'absolute',
                width: 10,
                height: 10,
                borderRadius: 10 / 2,
                backgroundColor: "blue",
                opacity:0.7,
                left: coordinates[label][0],
                top: coordinates[label][1],
                
            }} />
            <Button onPress={replay} title="replay"  />
            
            <View style={{
                position: 'absolute',
                width: 10,
                height: 10,
                borderRadius: 10 / 2,
                backgroundColor: "red",
                opacity:0.7,
                left: coordinates[replayLabel][0],
                top: coordinates[replayLabel][1],
                
            }} />

        </View>
    );
}


const styles = StyleSheet.create({
    title: {
      color: '#000',
      textAlign: 'center',
      fontWeight: "bold",
      marginTop:40,
      fontSize:25
    },

});

export default Localization
