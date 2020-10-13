import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

const ShowPhoto = (props) => {
  const photo = useSelector((state) => state.showPhoto);
  return (
    <>
      <View style={styles.container} key={photo.id}>
        <Image style={styles.cover} source={{uri: photo.uri}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default ShowPhoto;
