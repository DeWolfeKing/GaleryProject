import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchingGallery} from '../../store/actions/galleryActions';
import {calcWidth} from '../../utilits/dimensions';

const GalleryScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {galleryData,isFetching} = useSelector((state)=> (state.galleryReducer))
  useEffect(()=> {
      dispatch(fetchingGallery())
  },[])
  return (
    <View style={{flex: 1}}>
      {isFetching
          ? <View style={styles.indicatorContainer}>
              <ActivityIndicator size="large" color="gray"/>
            </View>
          : <ScrollView>
             {galleryData.map((item) => (
                 <View style={{flexDirection: 'row'}}>
                   <TouchableOpacity onPress={() => navigation.navigate('IMAGE_INFO_SCREEN',item)}>
                     <Image
                         style={styles.image}
                         source={{ uri: item.urls.small}}
                     />
                   </TouchableOpacity>
                   <View style={styles.textContainer}>
                     <Text>{`Author: ${item.user.username}`}</Text>
                     <Text>{`Name: ${item.description ? item.description : item.alt_description}`}</Text>
                   </View>
                 </View>
             ))}
            </ScrollView>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width:calcWidth(70),
    height:calcWidth(70),
    resizeMode: 'stretch'
  },
  textContainer: {
    flex:1,
    justifyContent: 'center',
    marginLeft: calcWidth(10)
  },
  indicatorContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
export default GalleryScreen;
