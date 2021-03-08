import React from 'react';
import { View,Text } from 'react-native';
import ImageItem from '../components/ImageItem';

const ImageScreen=()=>{
  const ImageData=[
    {title: "Forest",imageSource: require('../../assets/forest.jpg')},
    {title: "Mountain",imageSource: require('../../assets/mountain.jpg')},
    {title: "Beach",imageSource: require('../../assets/beach.jpg')},
  ]

  return(
      <View>
          {ImageData.map(imgdata=>(<ImageItem data={imgdata} key={imgdata.title}/>))}
      </View>
  );
};

export default ImageScreen;