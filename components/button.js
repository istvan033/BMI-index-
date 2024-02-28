import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
 
const Button = (props) => {
    return (
        <TouchableHighlight
        style={styles.button}
        onPress={props.onPress}
        >
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableHighlight>
 
    );
}
 
export default Button;
 
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        marginTop: 10,
        padding: 10,
        borderRadius: 3,
 
    },
    buttonText: {
        color: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 22,
    },    
});