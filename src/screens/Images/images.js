import React from 'react';
import CustomImage from './Image/image';
import { View, FlatList } from 'react-native';

const Images = () => {
    const allImages = [
        {title: "Text 1", image: require("../../../assets/beach.jpg")},
        {title: "Text 2", image: require("../../../assets/forest.jpg")},
        {title: "Text 3", image: require("../../../assets/mountain.jpg")}
    ];
    const imagesArray = allImages.map(img => <CustomImage key={img.title} title={img.title} image={img.image}/>);
    return (
        <View>
            {imagesArray}
        </View>
        
    );
}

export default Images;