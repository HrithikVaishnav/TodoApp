import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {View, Text, StyleSheet, Button, TouchableOpacity, TextInput, FlatList, CheckBox} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

const Complete = (props) => {
  
  const [todoData,setTodoData] = useState([]);

  useEffect(() => {
    let dataa = props.Todo.map(item => {if(item.isdone===true) return item})
    console.log(dataa);
    setTodoData(dataa);
    console.log(todoData);
  },[])

  return (
    <SafeAreaView forceInset={{top:'always'}}>
      <View style={styles.maincontainer}>
        <Text style={styles.heading}>Complete Items</Text>
        <View style={styles.container}>
          <FlatList
            style = {styles.list}
            data = {todoData}
            keyExtractor = {(item) => item.id}
            renderItem={( {item} ) => {
                return (
                    <TouchableOpacity style={styles.listItem}>
                        <CheckBox
                          value={item.isdone}
                          style={styles.checkbox}
                        />
                        <View>
                          <Text style={styles.listHead}>{item.topic} - {item.id}</Text>
                        </View>
                        <TouchableOpacity onPress={() => {deleteTodo({item})}}>
                          <MaterialIcons name="delete" size={24} color="black" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
            }
          />
        </View>
      </View>
    </SafeAreaView>
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
    borderWidth:1,
    marginLeft:20,
    marginRight:20
  },
  listItem:{
    borderWidth:1,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  listHead:{
    fontSize: 14,
  },
  checkbox: {
    alignSelf: "center",
  },
  create:{
    borderWidth:1,
    position:'absolute',
    bottom:0,
    alignSelf:'flex-end',
    margin:30,
    padding:15,
    fontSize:20,
    borderRadius:50
  }
});

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  deleteTodo: data => {
    dispatch({
      type:"deleteTodo",
      payload: {id:data.id}
    })
  }
}); 
const connectComponent = connect(mapStateToProps,mapDispatchToProps);

export default connectComponent(Complete);