/* eslint-disable linebreak-style */
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {useLoadMedia} from '../hooks/ApiHooks'



const List = ({navigation}) => {
  const mediaArray = useLoadMedia();
  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};


export default List;

