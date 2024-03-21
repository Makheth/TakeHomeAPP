import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import UserDetails from './UserDetails';

export default function App() {
  return (
    <View style={styles.container}> 
      <View style={styles.headertext}>
        <Text style={styles.head}>LIMKOKWING UNIVERSITY </Text>
        <Text style={styles.subtext}>OF CREATIVE TECHNOLOGY</Text>
      </View>

      <View style={styles.textAndImageContainer}>
        <Image
          source={require('./me.png')}
          style={styles.profilepicture}
        />
        <View style={styles.textContainer}>
          <UserDetails label="StudentName: " value="Sophia Daniels" marginBottom={2} />
          <UserDetails label="Student Number: " value="901016671" marginBottom={2}/>
          <UserDetails label="Faculty: " value="FINT" marginBottom={2}/>
          <UserDetails label="Semester:  " value="2 of year 2" marginBottom={2}/>
          
         
          <StatusBar style="auto" />
        </View>
      </View>
      <View>
            <Text style={styles.textcontent}>SEMESTER GRADES</Text>
            <Text style={styles.innertext}>Mobile Device Programming :  A+</Text>
            <Text style={styles.innertext}>Probabilty and Statistics :  A-</Text>
            <Text style={styles.innertext}>Java Programming : B</Text>
            <Text style={styles.innertext}>Database Systems : B+</Text>
            

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 30,
    marginBottom:20
  },
  headertext:{
    alignItems:'center',
    backgroundColor:'black',
    marginBottom:10
    
  },
  head:{
    backgroundColor:'black',
    color:'white',
    fontSize: 20,
    

  },
  subtext:{
    color:'white'
  },
  textAndImageContainer: {
    flexDirection: 'row', 
    alignItems: 'flex-start', 
  },
  profilepicture: {
    height: 100,
    width: 85,
    borderRadius: 2,
    marginRight: 15,
  },

  textcontent:{
    fontStyle:'bold',
    color:'black',
    alignItems:'flex-start',
    justifyContent: 'flex-start'
  },
  innertext:{
    color:'#555'
  }
});
