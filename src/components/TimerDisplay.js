import React from "react";
import { StyleSheet, Text } from "react-native";

function TimerDisplay(props) {
    return (
        <Text style={styles.timer}>
            {props.number}
        </Text>
    );
}

const styles = StyleSheet.create({
    timer: {
        marginTop: -160,
        color: '#FFF',
        fontSize: 65,
        fontWeight: 'bold'
    },
});

export default TimerDisplay;