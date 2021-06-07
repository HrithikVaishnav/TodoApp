import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from 'react-redux';
import { navigate } from '../navigation/navigationRef';

const CreateScreen = (props) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isdone, setisdone] = useState(false);
    const [date,setDate] = useState(null);

    return(
        
        <View>
            <Text style={styles.label}>Enter Title :</Text>
            <TextInput style={styles.input}  value={title} onChangeText={text=> setTitle(text)}/>
            <Text style={styles.label}>Enter Content :</Text>
            <TextInput style={styles.input}  value={content} onChangeText={text=> setContent(text)}/>
            <Text> Select Date</Text>
            <DatePicker
                style={styles.datePickerStyle}
                date={date} // Initial date from state
                mode="date" // The enum of date, datetime and time
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="01-01-2001"
                maxDate="01-01-2031"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                    },
                    dateInput: {
                    marginLeft: 36,
                    },
                }}
                onDateChange={date => setDate(date)}
            />
            <Button
                title="submit"
                onPress={() => {props.addTodo({id:props.Todo.length + 1,title,content,date,isdone})}}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize:18,
        borderWidth:1,
        borderColor: 'black',
        margin:10,
        marginBottom: 15,
        padding:10,
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },
});


const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  addTodo: data => {
    dispatch({
      type:"addTodo",
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

export default connectComponent(CreateScreen);