import React, {useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPhotos} from '../../action/api';
import PhotoBox from './PhotoBox';

const HomePages = (props) => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photosPage.pagePhotos);
  useEffect(() => {
    dispatch(getPhotos());
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {photos.map((p) => (
          <PhotoBox {...p} navigation={props.navigation} key={p.id} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});

export default HomePages;
