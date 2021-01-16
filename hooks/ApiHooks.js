import React, {useEffect, useState} from 'react';

const url =
  'http://media.mw.metropolia.fi/wbma/';
const urlEnd = 'media'

const useLoadMedia = () => {
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


  return mediaArray;
};

export {useLoadMedia};
