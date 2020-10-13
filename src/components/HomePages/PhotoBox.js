import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {W} from '../../constants';
import {setPhotoDataAction} from '../../store/photoReducer';

const PhotoBox = (props) => {
  const {container, sub, h1, cover} = styles;
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(
          setPhotoDataAction({
            id: props.id,
            name: props.user.first_name,
            uri: props.urls.full,
          }),
        );
        props.navigation.navigate('ShowPhoto');
      }}>
      <View style={container}>
        <View style={sub}>
          <Image style={cover} source={{uri: props.urls.small}} />
        </View>
        <Text style={h1}>{props.user.first_name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: W / 2.4,
    paddingVertical: 10,
  },
  sub: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
  },
  h1: {
    paddingTop: 10,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
  },
  cover: {
    width: W / 2.4,
    height: W * 0.63,
    borderRadius: 10,
  },
});

export default PhotoBox;
