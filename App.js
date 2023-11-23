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



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.views}>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  views:{
    width:'50%',
    height:70,
    color:'blue'
  }
});