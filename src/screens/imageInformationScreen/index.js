import React, {useState} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {calcFontSize, calcWidth, deviceWidth} from '../../utilits/dimensions';
const ImageInfoScreen = ({route}) => {
    const navigation = useNavigation();
    const item = route.params;
    const [loadImage, setLoadImage] = useState(true)
    return (
        <View style={{flex:1}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <ScrollView style={{flex:1,backgroundColor: !loadImage && item.color}}>
                {loadImage &&
                    <View style={styles.indicatorContainer}>
                        <ActivityIndicator size="large" color="gray"/>
                    </View>
                }
                <View style={{alignItems: 'center',justifyContent: 'center'}}>
                <Image
                    onLoad={ () => setLoadImage(false) }
                    style={styles.image}
                    source={{ uri: item.urls.full}}
                />
                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    buttonText: {
        fontSize: calcFontSize(24),
        width:"100%",
        marginLeft: calcWidth(10),
    },
    indicatorContainer: {
        height:'100%',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width:deviceWidth*1.5,
        height:deviceWidth*1.5,
        resizeMode: 'contain'
    }
});
export default ImageInfoScreen;
