// Main file: App.js
import React from 'react';
import { View, Text } from 'react-native';
import Exercise1 from './excercise1';
import Exercise2 from './excercise2';
import Exercise3A from './excercise3A';
import Exercise3B from './excercise3B';
import Exercise3C from './excercise3C';
import Exercise3D from './excercise3D';
import Exercise3E from './excercise3E';
import Exercise4 from './excercise4';

const MyApp = () => {
    return (
        <View style={{ marginTop: 40, flex: 1 }}>
            <Text style={{ fontSize: 30 }}>Lesson 7 Exercises:</Text>

            {/* <Exercise1 /> */}
            {/* <Exercise2 /> */}
            {/* <Exercise3A /> */}
            {/*<Exercise3B />*/}
            {/*<Exercise3C />*/}
            {/*<Exercise3D />*/}
            {/*<Exercise3E />*/}
            <Exercise4/>
        </View>
    );
};

export default MyApp;
