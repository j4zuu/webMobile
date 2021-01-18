/* eslint-disable linebreak-style */
import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { uploadsUrl } from '../utils/variables';

/*
 __
(oO)\_________
(__)\         )\/\
     ||----w||
     ||     ||
*/

const ListItem = ({navigation, singleMedia}) => {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => {
        navigation.navigate('Single', {file: singleMedia});
      }}
    >
      <View style={styles.imagebox}>
        <Image
          style={styles.image}
          source={{uri: uploadsUrl + singleMedia.thumbnails.w160}}
        />
      </View>
      <View>
        <Text style={styles.listTitle}>{singleMedia.title}</Text>
        <Text style={styles.textbox}>{singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: '#636363',
    padding: 15,
    marginBottom: 5,
    borderRadius: 16,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    flex: 1,
    borderRadius: 6,
    width: 100,
  },
  imagebox: {
    marginRight: 5,
  },
  textbox: {
    width: 250,
    color: 'white',
  },
  listTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
