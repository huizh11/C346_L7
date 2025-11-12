// Exercise 3A
import React from "react";
import { StyleSheet, View, Text } from 'react-native';

const Exercise3A = () => {
    return (
        <View style={styles.parent}>
            <Text style={styles.child}>Child One</Text>
            <Text style={styles.child}>Child Two</Text>
            <Text style={styles.child}>Child Three</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        borderWidth: 5,
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA'
    },
    child: {
        flex: 1,
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    },
});

export default Exercise3A;

