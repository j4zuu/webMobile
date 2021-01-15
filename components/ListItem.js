/* eslint-disable linebreak-style */
import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

/*
 __
(oO)\_________
(__)\         )\/\
     ||----w||
     ||     ||
*/
const uploadsUrl = 'http://media.mw.metropolia.fi/wbma/uploads/'

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.imagebox}>
        <Image
          style={styles.image}
          source={{uri: uploadsUrl + props.singleMedia.thumbnails.w160}}
        />
      </View>
      <View>
        <Text style={styles.listTitle}>{props.singleMedia.title}</Text>
        <Text style={styles.textbox}>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    padding: 15,
    marginBottom: 5,
    borderRadius: 16,
    marginHorizontal: 5,
  },
  image: {
    flex: 1,
    borderRadius: 6,
    width: 100,
  },
  imagebox: {
    marginRight:5,
  },
  textbox: {
    width: 250,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
