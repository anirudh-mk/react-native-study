import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Button , Alert, Platform} from 'react-native';

export default function App() {
  const handleClick = () => console.log('hello')
  return (
    <SafeArea style={styles.container}>
      <TouchableWithoutFeedback 
        onPress ={
          ()=>Alert.prompt(
            'image',
            'do yo like the image',
            // (text) => console.log(text)
          )}>
        
        <Image source={require('./assets/favicon.png')}/>
      </TouchableWithoutFeedback>
      
      <StatusBar style="auto" />
      <Button 
        title='press' 
        color="red"
        onPress={()=>Alert.alert(
          'button',
          'button clicked',
          [
            {
              text:'yes', 
              onPress: ()=> console.log('yes')
            },
            {
              text: 'no',
              onPress: ()=> console.log('no')
            }
          ]
        )}
      />
    </SafeArea>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android"? StatusBar.currentHeight :20
  },
});
