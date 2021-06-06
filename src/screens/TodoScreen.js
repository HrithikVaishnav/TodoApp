import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';
import { connect } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import Todoform from './Todoform';

const TodoScreen = (props) => {

    
    const TodoItem = props.Todo.find(item => item.id === props.navigation.getParam('id'));
    let isedit = false;

    return(
        <View>
            <Todoform TodoItem = {TodoItem} isedit={isedit}/>
        </View>
    )
}


TodoScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('EditScreen',{id:navigation.getParam('id')})}>
            <Feather name="edit-2" size={30} color="black" />
          </TouchableOpacity>
        ),
      };
}

const mapStateToProps = state => state;

const connectComponent = connect(mapStateToProps);

export default connectComponent(TodoScreen);