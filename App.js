import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native'
import Header from './components/Header'
import {uuid} from 'uuidv4'
import ListItem from'./components/ListItem'
import AddItem from'./components/AddItem'

const App = () =>{
  const [items, setItems] = useState([
    {id: uuid(), text: 'MIlk', price: '$4.00', weight: '2kg'},
    {id: uuid(), text: 'Eggs', price: '$4.00', weight: '2kg'},
    {id: uuid(), text: 'Bread', price: '$4.00', weight: '2kg'},
    {id: uuid(), text: 'Juice', price: '$4.00', weight: '2kg'}
  ]);
  const addItem = (text) =>{
    if(!text){
     Alert.alert('Error','Enter Item',{text:'Ok',onPress: () => console.log('Cancel Pressed' )})
    }
    else{
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems];
      })
    }
   
  }
  const deleteItem = (id)=>{
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    });
  }
  return (
    <View style={styles.container}>
     <Header />
     <View>
    <Text>CheckOut</Text>
  </View>
     <AddItem addItem = {addItem}/>
  <FlatList data={items} renderItem={({item}) => <ListItem item ={item} deleteItem = { deleteItem}/>}/>

 
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
   
  },
 
})
export default App;