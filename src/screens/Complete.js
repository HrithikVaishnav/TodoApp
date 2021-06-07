import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { navigate } from '../navigation/navigationRef';
import TodoItems from './TodoItems';
const Complete = (props) => {

  const handleDelete = (id) => {
    props.deleteTodo(id);
  }

  const handleupdate = ({id,title,content,date,isdone}) => {
    props.editTodo({id,title,content,date,isdone})
  }

  return (
    <SafeAreaView forceInset={{top:'always'}} style={styles.safeconatiner}>
      <TodoItems 
        todoData = {props.Todo.filter(item => item.isdone === true)} 
        handleupdate={handleupdate} 
        handleView={handleDelete} 
        isHome={false}
        heading={'Completed'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeconatiner:{
    flex:1,
    marginTop:40
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
  },
  deleteTodo: data => {
    dispatch({
      type:"deleteTodo",
      payload: data
    }),
    navigate('Complete');
  }
}); 
const connectComponent = connect(mapStateToProps,mapDispatchToProps);

export default connectComponent(Complete);