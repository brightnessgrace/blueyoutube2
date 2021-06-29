
import React, { useRef } from 'react'
import { View, Text, Image, SafeAreaView, useColorScheme,
   ScrollView, FlatList, Pressable } from 'react-native'
import styles from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import video from '../../../assets/data/video.json';
import videos from '../../../assets/data/videos.json';
import Icon from 'react-native-vector-icons/AntDesign';
import Fontsome from 'react-native-vector-icons/FontAwesome';
import Videolistitem from '../../components/Videolistitem';
import VideoPlayer from '../../components/VideoPlayer';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import VideoComments from '../../components/VideoComments';
import { Modalize } from 'react-native-modalize';

const Videoscreen = () => {

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'gray',
        cover: 'center',
        paddingTop:50,
   
      }}
    >
     
      <View style ={styles.iconstyle}>
      <Text>Comments </Text>
    
        <Icon  
             name="close"
             color='black'
             size={26}
             style={styles.iconLeft}
             onPress={() => sheetRef.current.snapTo(0)}
            >
         
           </Icon> 

           </View>

           <VideoComments />
    </View>
  );
 
  const sheetRef = React.useRef();

  const onOpen = () => {
    sheetRef.current?.snapTo(1);
  };

  


    return (

        <View style={styles.container}>
     
            {/* video player */}
            < VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail}/>
           
                <View>  
               {/* video info */}

               <View style={styles.videoInfoContainer}>
                 <Text style={styles.tags}>{video.tags}</Text>
                 <Text style ={styles.title}>{video.title}</Text>
                 <Text style ={styles.subtitle}> {video.user.name} {video.createdAt}</Text> 
                 </View>  
                   {/*action list */}
           <View>
             <ScrollView horizontal showsHorizontalScrollIndicator = {false} style={styles.actionListContainer}>
                   <View style={styles.actionListItem}>
                   <Icon  name="like1" size={20} color="lightgrey" />
                   <Text styles={styles.actionText}> {video.likes} </Text>
                    </View> 
                    
                    <View style={styles.actionListItem}>
                   <Icon  name="dislike2" size={20} color="lightgrey" />
                   <Text styles={styles.actionText}> {video.dislikes} </Text>
                   </View> 
                   
                   <View style={styles.actionListItem}>
                   <Icon  name="export" size={20} color="lightgrey" />
                   <Text styles={styles.actionText}> {video.likes} </Text>
                   </View> 
                   
                   <View style={styles.actionListItem}>
                   <Icon  name="download" size={20} color="lightgrey" />
                   <Text styles={styles.actionText}> {video.likes} </Text>
                   </View>

                   <View style={styles.actionListItem}>
                   <Fontsome  name="share" size={20} color="lightgrey" />
                   <Text styles={styles.actionText}> {video.likes} </Text>
                   </View>
                     
      
        </ScrollView>  
        </View>

                  {/* user info */}

                  <View style = {{flexDirection:'row', alignItems: 'center', paddingVertical:10, borderColor:'grey',
                                 borderTopWidth:1, borderBottomWidth:1}}>
                  <Image style = {styles.avatar} source={{uri:video.user.image}}/>
                  <View style = {{marginHorizontal:10, flex:1}}>
                    <Text style = {{color:'white', fontSize:18, fontWeight:'bold'}}>{video.user.name}</Text>
                    <Text style = {{color:'grey',fontSize:18}}>{video.user.subscribers} subscribers </Text>
                  </View>

                   <Text style = {{color:'red', fontSize:18, fontWeight:'bold', padding:10}}>Subscribe</Text>

                    </View>

                     {/* comments */}
                   
                     <Pressable  onPress={onOpen} styles = {{padding:10, marginVertical:10}}>
                       <Text style = {{color:'white', fontWeight:'bold'}}> Comments 333 </Text>
                      
                 
                    </Pressable> 
                     {/* All Comments */}
                
                     <BottomSheet 
                      ref={sheetRef}
                      snapPoints={[0,'50%']}
                      initialSnap={0}
                      borderRadius={10}
                      backgroundColor
                      renderContent={renderContent}
                       >
                       
                      </BottomSheet>
                     
                  
                  </View>
   
      </View>  
    )
}

const VideoscreenWithRecommendation = () => {
 return (
 <SafeAreaView style = {{backgroundColor: '#141414', flex:1}}>
    <FlatList 
    data = {videos} 
    renderItem={({ item }) => < Videolistitem video={item} />}
   ListHeaderComponent={Videoscreen}
     />
</SafeAreaView>
 )
}

export default VideoscreenWithRecommendation;
