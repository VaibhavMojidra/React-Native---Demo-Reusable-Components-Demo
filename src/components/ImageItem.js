import React from 'react';
import { View,Text,Image } from 'react-native';

const ImageItem=(props)=>{
    
  return(
      <View>
          <Image source={props.data.imageSource}/>
          <Text>{props.data.title}</Text>
      </View>
  );
};

export default ImageItem;