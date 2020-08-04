import React from 'react';
import {View, Text, StyleSheet,ScrollView,Dimensions,TouchableOpacity} from 'react-native';
import SignUp from '../components/SignUp'

export default class HorizontalView extends React.Component{
    render(){
        return(
            
            <ScrollView horizontal = {true} pagingEnable = {true} style = {styles.container}>
                <View style = {styles.outer}>
                    <Text style = {styles.innerText}>AlzheimerApp</Text>
                    <Text style={styles.a}>   Introduction 
                     This app helps the patient who is suffring from Alzhemier
                     </Text>
                 
                </View>
                <View style = {[styles.outer, styles.red]}>
                    <Text style = {styles.innerText}>SignUp Or Login
                    </Text>
                    <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text>SignUp</Text>
            </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.buttons}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style = {[styles.outer, styles.green]}>
                    <Text style = {styles.innerText}>Questions</Text>
                    <Text style={styles.a}>Q.1</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
       
    },
outer:{
backgroundColor: '#00b5cc',
alignItems : 'center',
justifyContent: 'center',
width : Dimensions.get('window').width,
height : Dimensions.get('window').height

},

innerText:{
 color : '#fff',
 fontSize : 25,
 fontWeight : 'bold'
},
a:{
    color : 'red',
    fontSize : 20,
 fontWeight : 'bold'
},
buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50
  },
red:{
backgroundColor : '#db0a5b'
},
green : {
    backgroundColor : '#4ecdc4'
}

})