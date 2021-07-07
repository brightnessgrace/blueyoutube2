import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
     container:{
       backgroundColor:'#303030',
      
     },
    videoPlayer:{
        width:'100%',
        aspectRatio:16/9,
     
    },
    videoInfoContainer:{
     margin:10,
    
    },
    title:{
        color:'#000',
        fontSize:18,
        fontWeight:"500",
        marginVertical:10,
    },
    subtitle:{
        color:'grey',
        fontSize:14,
        fontWeight:"500"
    },
    tags:{
        fontSize:16,
        fontWeight:"500",
        color:'#0094e3',
        
    },
    actionListContainer:{

     flexDirection:'row',
    },

    actionListItem:{
        width:60,
        height:60,
        justifyContent:'space-around',
        alignItems:'center',
    },
    actionText:{
        color:'black',
    },
    bottomsheet:{
      padding:24,
    },
    iconstyle:{
        flexDirection:'row',
        alignItems: 'center',
       },
       iconLeft:{
         marginLeft: '70%',
       },
       commenttext:{
        color:'#fff',
        fontSize:18,
        fontWeight:"500",
        marginVertical:10,
    },publiccomment:{
        flexDirection:'row',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'grey',
        paddingTop:10,
    },publicnotice:{
        flexDirection:'row',
        paddingBottom:10,
        paddingTop:10,
        borderTopWidth:1,
        borderColor:'grey',
    }
});

export default styles;