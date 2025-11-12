// Exercise 4
import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Exercise4 = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
                <Text>Square 1</Text>
            </View>
            <View style={[styles.child, { backgroundColor: 'mediumaquamarine' }]}>
                <Text>Square 2</Text>
            </View>
            <View style={[styles.child, { backgroundColor: 'crimson' }]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    child: {
        width: 80,
        height: 80,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Exercise4;

