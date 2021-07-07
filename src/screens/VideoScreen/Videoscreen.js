import React, { useRef } from 'react'
import { View, Text, Image, SafeAreaView, useColorScheme,
   ScrollView, FlatList, Pressable,Button,TextInput } from 'react-native'
import styles from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import video from '../../../assets/data/video.json';
import videos from '../../../assets/data/videos.json';
import Icon from 'react-native-vector-icons/AntDesign';
import Fontsome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Videolistitem from '../../components/Videolistitem';
import VideoPlayer from '../../components/VideoPlayer';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import VideoComments from '../../components/VideoComments';

console.log('imefika4');
const Videoscreen = () => {
    const renderContent = () => (
        <View
        style={{
          backgroundColor: '#303030',
          height: '100%',
        }}
      >
          <View style ={styles.iconstyle}>
      <Text style={styles.commenttext}>Comments </Text>
  
    
        <Icon  
             name="close"
             color='#fff'
             size={26}
             style={styles.iconLeft}
             onPress={() => sheetRef.current.snapTo(0)}
            >
         
           </Icon> 

           </View>
           <View style={styles.publicnotice}>
           <Text style = {{color:'white'}}> Remember to keep comments respectful and to follow our</Text>
           </View>
           <View>
           <Text style = {{color:'blue'}}> Community Guidelines </Text>
           </View>
           <View style={styles.publiccomment}>
           <Image style = {{width:35, height:35, borderRadius:18,paddingTop:10}} 
                  source={require('../../images/bryt.png')}/>    
           <TextInput  style = {{padding:10, justifyContent:'center'}} placeholder = '  Add Public Comment  ' /> 
           </View>
           
           <VideoComments />
    </View>
      );
     
      const sheetRef = React.useRef(null);

      const onOpen = () => (
  
        sheetRef.current.snapTo(1)
      );
     
      return (
        <>

<View style={styles.container}>
     
     {/* video player */}
     < VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail}/>
   

     <View>
         
              <View style={styles.videoInfoContainer}>
                 <Text style={styles.tags}>{video.tags}</Text>
                 <Text style ={styles.title}>{video.title}</Text>
                 <Text style ={styles.subtitle}> {video.user.name} {video.createdAt}</Text> 
                 </View> 

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
                   <Ionicons  name="chatbubbles-outline" size={20} color="lightgrey" />
                   <Text styles={styles.actionText}> {video.likes} </Text>
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

                   <View style={styles.actionListItem}>
                   <Icon  name="save" size={20} color="lightgrey" />
                   <Text styles={styles.actionText}> {video.likes} </Text>
                   </View>
                     
      
           </ScrollView>  
         </View>  

         <View style = {{flexDirection:'row', alignItems: 'center', paddingVertical:10, borderColor:'grey',
                                 borderTopWidth:1, borderBottomWidth:1}}>
                  <Image style = {styles.avatar} source={{uri:video.user.image}}/>
                  <View style = {{marginHorizontal:10, flex:1}}>
                    <Text style = {{color:'white', fontSize:18, fontWeight:'bold'}}>{video.user.name}</Text>
                    <Text style = {{color:'grey',fontSize:18}}>{video.user.subscribers} subscribers </Text>
                   </View>

                   <Text style = {{color:'red', fontSize:18, fontWeight:'bold', padding:10}}>Subscribe</Text>

                    </View>



       </View>

        
</View>

<View
            style={{
              backgroundColor: '#303030',
              padding:10,
              borderColor:'#000',
              borderWidth: 1,
              flexDirection:'row'
            }}
          >
              <Pressable  onPress={onOpen} styles = {{padding:30, marginVertical:10}}>
                       <Text style = {{color:'white', fontWeight:'bold'}}> Comments 333 </Text>
                      
                 
                    </Pressable>

          </View>

          <View>

  
       <FlatList    
          data = {videos} 
          renderItem={({ item }) => < Videolistitem video={item} />}
         />

</View>
          <BottomSheet
            ref={sheetRef}
            snapPoints={[0, '71%',300]}
            borderRadius={10}
            initialSnap={0}
            renderContent={renderContent}
          />

          

        </>

      );
    
  }

  console.log('imefikaVideo');
   
   export default Videoscreen;
