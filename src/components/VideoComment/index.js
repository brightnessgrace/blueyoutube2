import React from 'react'
import { View, Text, Image } from 'react-native'

const VideoComment = (props) => {

    const { comment } = props;

    return (
        <View style = {{flexDirection:'row', alignItems:'center', marginVertical:10}}>
        <Image style = {{width:35, height:35, borderRadius:20}} source={{uri:comment.user.image}}/>
        <Text style = {{color:'#000', marginLeft:10}}>{comment.comment}</Text>
        </View>
    )
}

export default VideoComment
