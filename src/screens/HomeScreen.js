/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from '../theme';
import Duotonebg from '../assets/duotone.png';
import Logo from '../assets/logo1.png';
import VideoCard from '../components/VideoCard';

function HomeScreen(props) {

    const [matchData, setMatchData] = useState([{}]);
    const [loading, setLoading] = useState(false);

    const fetchVideo = () => {
        setLoading(true);
        fetch('https://www.scorebat.com/video-api/v1/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setMatchData(data);
                setLoading(false);
                console.log(matchData);
            });
    };

    useEffect(() => {
        fetchVideo();
    }, []);

    return (
        <ImageBackground source={Duotonebg} style={styles.home}>
            <View style={styles.header}>
                <View style={{flexDirection:'row',marginLeft: '5%',}}>
                    <Image source={Logo} style={styles.logo} />
                    <Text style={styles.brandTitle}>FooTv</Text>
                </View>
            </View>
            <Button title="search" onPress={() => fetchVideo()} />
            {loading ? <ActivityIndicator size={30} color={colors.malachiteLight} /> : null}
            <View>
                <FlatList data={matchData}
                    renderItem={({ item }) => {
                        return <VideoCard title={item.title} thumbnail={item.thumbnail} />;
                    }}
                    keyExtractor={item=>item.title} />
            </View>
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: colors.bigStone,
    },
    header: {
        height: Dimensions.get('screen').height / 20,
        backgroundColor: colors.bigStoneDark,
        justifyContent: 'center',
    },
    brandTitle: {
        color: colors.chateauGreen,
        fontSize: 20,
        fontWeight: '700',
    },
    logo: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
});

export default HomeScreen;
