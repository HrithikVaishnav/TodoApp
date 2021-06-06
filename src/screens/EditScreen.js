import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { navigate } from '../navigation/navigationRef';
import Todoform from './Todoform';

const EditScreen = (props) => {
    
    const data = props.Todo.find(item => item.id === props.navigation.getParam('id'));

    const handleupdate = ({id,title,content,date,isdone}) => {
        props.editTodo({id,title,content,date,isdone})
    }

    return(
        <Todoform TodoItem={data} isedit={true} callback={handleupdate}/>
    )
}

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
    }),
    navigate('Home');
  }
}); 
const connectComponent = connect(mapStateToProps,mapDispatchToProps);

export default connectComponent(EditScreen);