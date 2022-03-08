import React from "react";
import { Text, View ,StyleSheet, Image } from "react-native";
import { useState, useEffect } from 'react';



   

const Localization =() =>{


    let labelURL ='https://run.mocky.io/v3/24ce8e40-5e29-46ea-b78a-22eeedd6d0e0';

    let [label , setLabel] = useState(0);
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
      }, 5000)


    useEffect(() => {
        console.log("label", label);

        fetch(labelURL)
        .then((response) => response.json()) // get response, convert to json
        .then((json) => {
            console.log(json)
            setLabel(json.value);
            // console.log("label", label);
        })
        .catch((error) => alert(error)) // display errors
    }, [sec]);
    
    
   

    console.log(label);
    //console.log(coordinates[label][1]);

    



    return(
        
        <View>
            <Text style = {styles.title}> SBME Department Floor </Text>

            <Image
             
            source={require('../assets/floor.jpg')}
            style = {{
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
