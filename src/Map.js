import React from "react";
import { Text, View ,StyleSheet, Image } from "react-native";
import { useState, useEffect } from 'react';



   

const Localization =() =>{


    let labelURL ='https://run.mocky.io/v3/7a80eabd-3081-4caa-ba49-02e4ed8a773b';
    let [label , setLabel] = useState([]);
    let coordinates = [
        [0 , 0] ,//intial position
        [250, 200], //lecture
        [190, 360], //corridor
        [250 , 325], //Embedded lab  
        [130 , 480], //Network lab 
        [130 , 520], //Electronics lab 
      ];

    useEffect(() => {
        fetch(labelURL)
        .then((response) => response.json()) // get response, convert to json
        .then((json) => {
            setLabel(json.label);
           
        })
        .catch((error) => alert(error)) // display errors
    }, []);
    
    
   

    // console.log("label" , label);
    console.log(coordinates[label][1]);

    



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
                backgroundColor: "red",
                left: coordinates[2][0],
                top: coordinates[2][1],
                
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
