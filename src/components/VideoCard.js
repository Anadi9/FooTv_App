/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import colors from '../theme';

function VideoCard(props) {


    return (
        <View>
            <View>
                <View style={styles.videocard}>
                    <Image source={{ uri: `${props.thumbnail}` }} style={styles.thumbnail} />
                    <View style={{paddingHorizontal: 10,marginVertical: 5}}>
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    videocard: {
        marginBottom: 20,
        paddingBottom: 20,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    title: {
        color: colors.white,
        fontSize: 15,
    },
    thumbnail: {
        width: '100%',
        height: 250,
    },
});

export default VideoCard;
