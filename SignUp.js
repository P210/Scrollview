import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet , Image} from 'react-native';


export default class SignUp  extends React.Component {
    
  render(){
    return(
         <View>
       <Text style={styles.buttonText}>
           Name-
           Age- 
           Email-
       </Text>
    
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
  buttonText: {
    fontSize: 20
  }
});

