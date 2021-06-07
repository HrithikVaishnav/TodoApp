import React, { useState } from 'react';
import { connect } from 'react-redux';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { navigate } from '../navigation/navigationRef';
import { Entypo } from '@expo/vector-icons';
import TodoItems from './TodoItems';

const Home = (props) => {
  console.log(props.Todo);

  const handleView = (id) => {
    props.navigation.navigate('TodoScreen',{id});
  } 

  const handleupdate = ({id,title,content,date,isdone}) => {
    props.editTodo({id,title,content,date,isdone})
  }

  return (
    <View style={styles.maincontainer}>
      <TodoItems 
        todoData = {props.Todo.filter(item => item.isdone === false)} 
        handleupdate={handleupdate} 
        handleView={handleView} 
        isHome={true}
        heading={'Todo'}
      />
      
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