import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const TodoItems = (props) => {
  const todoData = props.todoData;
  
  return (
      <View style={styles.maincontainer}>
        <Text style={styles.heading}>{props.heading} List</Text>
          <FlatList
            style = {styles.list}
            data = {todoData}
            keyExtractor = {(item) => item.id}
            renderItem={( {item} ) => {
                return (
                    <View style={styles.listItem}>
                        <View>
                          <Text style={styles.listHead}>{item.topic} - {item.id}</Text>
                        </View>
                        <View style={styles.iconspos}>
                        {(props.isHome) ?
                            <>
                            <TouchableOpacity style={styles.icondesign} onPress={() => props.handleupdate({id:item.id,title:item.topic,content:item.content,date:item.date,isdone:!item.isdone})}>
                                <MaterialIcons name="done-outline" size={24} color="green" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.icondesign} onPress={() => props.handleView(item.id)}>
                                <Feather name="arrow-up-right" size={24} color="blue" />
                            </TouchableOpacity>
                            </>
                            :
                            <>
                            <TouchableOpacity style={styles.icondesign} onPress={() => props.handleupdate({id:item.id,title:item.topic,content:item.content,date:item.date,isdone:!item.isdone})}>
                                <MaterialCommunityIcons name="playlist-edit" size={24} color="green" />   
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.icondesign} onPress={() => props.handleDelete(item.id)}>
                                <MaterialIcons name="delete" size={24} color="black" />
                            </TouchableOpacity>
                            </>
                        }
                        </View>
                    </View>
                )}
            }
          />
      </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex:1
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
    marginRight:20
  },
  listItem:{
    borderWidth:1,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    margin:10
  },
  listHead:{
    fontSize: 16,
    marginLeft:20
  },
  iconspos:{
      flexDirection:'row',
  },
  icondesign:{
    marginRight:15,
    paddingRight:15,
  }
});


export default TodoItems;