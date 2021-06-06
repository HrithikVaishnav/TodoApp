import React, { useState } from 'react';
import { connect } from 'react-redux';
import {View, Text, StyleSheet, Button, TouchableOpacity, TextInput, FlatList, CheckBox} from 'react-native';
import { navigate } from '../navigation/navigationRef';
import { Entypo } from '@expo/vector-icons';

const Home = (props) => {
  console.log(props.Todo);
  const [isdone,setisdone] = useState(false);
  
  return (
    <View style={styles.maincontainer}>
      <Text style={styles.heading}>Todo List</Text>
      <View style={styles.container}>
        <FlatList
          style = {styles.list}
          data = {props.Todo}
          keyExtractor = {(item) => item.topic}
          renderItem={( {item} ) => {
              return (
                    <View style={styles.listItem}>
                      <CheckBox
                        value={item.isdone}
                        style={styles.checkbox}
                        onValueChange={() => {
                          setisdone(true);
                          props.editTodo({id:item.id,title:item.topic,content:item.content,date:item.date,isdone:isdone})
                        }}
                      />
                      <TouchableOpacity onPress={() => props.navigation.navigate('TodoScreen',{id:item.id})}>
                            <Text style={styles.listHead}>{item.topic} - {item.id}</Text>
                      </TouchableOpacity>
                    </View>
              )}
          }
        />
      </View>
      <TouchableOpacity style={styles.create} onPress={() => {navigate('CreateScreen')}}>
        <Entypo name="plus" size={24} color="black" />
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex:1
  },
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
  },
  heading:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop:10
  },
  list:{
    flex:1,
    marginLeft:20,
    marginRight:20,
  },
  listItem:{
    borderWidth:1,
    flexDirection:'row',
    justifyContent:'space-around',
    margin:10,
  },
  listHead:{
    fontSize: 14,
    alignItems:'center'
  },
  checkbox: {
    alignSelf: "center",
  },
  create:{
    borderWidth:1,
    position:'absolute',
    bottom:0,
    alignSelf:'flex-end',
    margin:20,
    marginRight:20,
    padding:15,
    fontSize:20,
    borderRadius:50
  }
});

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  addTodo: data => {
    dispatch({
      type:"addTodo",
      payload: {id:data.id, topic: data.topic}
    }),
    navigate('Complete');
  },
  editTodo: data => {
    dispatch({
      type:"editTodo",
      payload: {
          id:data.id, 
          topic: data.title,
          content:data.content,
          date:data.date,
          isdone:data.isdone
        }
    })
  }
}); 
const connectComponent = connect(mapStateToProps,mapDispatchToProps);

export default connectComponent(Home);