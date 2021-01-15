/* eslint-disable linebreak-style */
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';

const url =
  'http://media.mw.metropolia.fi/wbma/';
const urlEnd = 'media'


const List = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async (urlEnd, limit = 5) => {
    try {
      const response = await fetch(url + urlEnd + '?limit=' + limit);
      const json = await response.json();
      console.log(json);

      const media = await Promise.all(
        json.map(async (item) => {
          const fileResponse = await fetch(url + urlEnd + '/' + item.file_id)
          const json = fileResponse.json()
          console.log(json)
          return json
        })
      )
      console.log('media array data' + media)

      setMediaArray(media)
    } catch (error) {
      console.error()
    }
  };


  useEffect(() => {
    loadMedia(urlEnd, 5);
  }, [])


  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};


export default List;

