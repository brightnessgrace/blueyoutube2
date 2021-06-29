import React from 'react'
import { View, Text,FlatList,ScrollView } from 'react-native'
import { BottomSheetFlatlist } from '@gorhom/bottom-sheet';
import VideoComment  from '../VideoComment';
import comments from '../../../assets/data/comments.json';


const VideoComments = () => {
    return (
        <View>
           
            <FlatList 
             data={ comments }
             renderItem={({ item }) => < VideoComment comment = {item}/>}
             />
           


        </View>
    )
}

export default VideoComments
