import React from "react";
import { Text, View ,StyleSheet, Image } from "react-native";
import { useState, useEffect } from 'react';



   

const Localization =() =>{


    let labelURL ='https://run.mocky.io/v3/e8bf675e-a564-4113-baf4-ca209a108f7e';
    let [label , setLabel] = useState(0);
    let coordinates = [
        [0 , 0] ,//intial position
        [250, 200], //lecture
        [80, 360], //right corridor
        [290,360],//left corridor
        [250 , 325], //Embedded lab  
        [130 , 480], //Network lab 
        [130 , 520], //Electronics lab 
        [130, 410], //TAS office
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
            setLabel(json);
            console.log("label", label);
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
