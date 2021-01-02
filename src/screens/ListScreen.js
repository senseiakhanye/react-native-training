import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListScreen = () => {
    const names = ["Sam", "Jill", "Tasha", "Jess", "Sam1", "Jill1", "Tasha1", "Jess1"];
    return (
        <View>
            <FlatList 
                data={names} 
                // horizontal={true} 
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item} 
                renderItem={({item}) => {
                    return <Text style={styles.textStyle}>{item}</Text>
                }} />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        margin: 50
    }
})

export default ListScreen;