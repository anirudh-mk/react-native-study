// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Button , Alert, Platform, SafeAreaView} from 'react-native';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <TouchableWithoutFeedback 
//         onPress ={
//           ()=>Alert.prompt(
//             'image',
//             'do yo like the image',
//             // (text) => console.log(text)
//           )}>
        
//         <Image source={require('./assets/favicon.png')}/>
//       </TouchableWithoutFeedback>
      
//       <StatusBar style="auto" />
//       <Button 
//         title='press' 
//         color="red"
//         onPress={()=>Alert.alert(
//           'button',
//           'button clicked',
//           [
//             {
//               text:'yes', 
//               onPress: ()=> console.log('yes')
//             },
//             {
//               text: 'no',
//               onPress: ()=> console.log('no')
//             }
//           ]
//         )}
//       />
//     </SafeAreaView>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Platform.OS === "android"? StatusBar.currentHeight : 20
//   },
// });



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View, Text, SafeAreaView, Dimensions} from 'react-native';
// import { useDeviceOrientation } from "@react-native-community/hooks"

// export default function App() {

//   const landscape = useDeviceOrientation();
//   console.log(landscape)
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar style="auto" />

//       <View style={{
//         width:'100%',
//         height: "10%",
//         backgroundColor: landscape==='portrait'? "green":yellow,
//         }}>
//         <Text>Hello</Text>
//       </View>
//     </SafeAreaView>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',

//   },
// });


import {View} from 'react-native'

import React from 'react'

export default function App() {
  return (
    <View style={{
      backgroundColor:'white',
      flex:1,
      justifyContent:'center',
      flexDirection:'row',
      // alignItems:'center',
      flexWrap:'wrap',
      alignContent:'center'
    }}>
      
      <View style={{
        backgroundColor:'dodgerblue',
        width:100,
        height:300,
      }}/>

      <View style={{
        backgroundColor:'gold',
        width:100,
        height:200,
      }}/>

      <View style={{
        backgroundColor:'tomato',
        width:100,
        height:100,
      }}/>

      <View style={{
        backgroundColor:'gold',
        width:100,
        height:100,
      }}/>

      <View style={{
        backgroundColor:'tomato',
        width:100,
        height:100,
      }}/>
    </View>
  )
}

 