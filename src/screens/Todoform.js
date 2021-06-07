import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
const Todoform = (props) => {

    const id = props.TodoItem.id;
    const [title, setTitle] = useState(props.TodoItem.topic);
    const [content, setContent] = useState(props.TodoItem.content);
    const [isdone, setisdone] = useState(props.TodoItem.isdone);
    const [date,setDate] = useState(props.TodoItem.date);

    
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
                onDateChange={(date) => {
                    setDate(date);
                }}
            />
            {
                (props.isedit)?
                <Button
                    title="submit"
                    onPress={() => {props.callback({id,title,content,date,isdone})}}
                />:null
            }
            
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

export default Todoform;