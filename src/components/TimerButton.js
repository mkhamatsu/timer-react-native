import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function TimerButton(props) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={props.function}>
            <Text style={styles.buttonText}>
                {props.button}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 40,
        margin: 17,
        borderRadius: 9
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'grey'
    }

});

export default TimerButton;