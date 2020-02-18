import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Body,  Card, CardItem,} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const ListItem = ({item, deleteItem}) =>{
  return (
    <TouchableOpacity style={[styles.listItem, styles.shadow1]}>
     <View style={styles.listItemView}>
     
        <View style={{backgroundColor: 'powderblue', padding:10, flex:3}} ><Text>Two</Text></View>
        <View style={{backgroundColor: 'skyblue',  padding:15, flex:2}} >
        <Text style={styles.listItemText}>{item.text}</Text>
        </View>
        <View style={{backgroundColor: 'steelblue',  padding:20, flex:1, alignItems: 'flex-end'}} >
        <Icon name="remove" size={20} color="firebrick" onPress ={()=> {deleteItem(item.id)}}/>
        </View>
      </View>
        
     
      
    
    </TouchableOpacity>
//  <Card style={styles.card}>
//  <CardItem style={styles.cardItem}>
//    <Body>
//    <Text style={styles.listItemText}>{item.text}</Text>
//       <Icon name="remove" size={20} color="firebrick" onPress ={()=> {deleteItem(item.id)}}/>
//    </Body>
//  </CardItem>
// </Card>
    
  )
}
export default ListItem;
function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}

const styles = StyleSheet.create({
  listItem:{
padding: 15,
backgroundColor: 'white',

borderRadius: 8,
margin: 10,
borderColor: 'gray',
padding: 24,

  },
  shadow1: elevationShadowStyle(15),
  listItemView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    // alignItems:'center'

  },
  listItemText:{
    fontSize: 18,
  },
  card: {
    // flexDirection: 'row',
     height: undefined,
     width: undefined,
     // alignSelf: 'center',
     marginBottom: 3,
     marginTop: 3,
     borderRadius: 3,
   },
   cardItem: {
     borderLeftWidth: 5,
     borderLeftColor: '#ea7e7a'
   }
 
})