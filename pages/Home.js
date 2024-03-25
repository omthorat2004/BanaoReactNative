import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNetInfo } from "@react-native-community/netinfo";
import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../components/Card';
import LeftNavbar from '../components/LeftNavbar';
export default function Home({navigation}){
    const [images,setImages] = useState([])
    const netinfo = useNetInfo()
    
    useEffect(()=>{
        if(netinfo.type=='other'){
            const fetchData = async ()=>{
                try{
                    const response = await fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s')
                    const {photos} = await response.json()
                    const {photo} = photos
                    await AsyncStorage.setItem('cacheImageUrls',JSON.stringify(photo))
                    console.log(photo)
                    if(!photo[0]){
                        const jsonArray = await AsyncStorage.getItem('cacheImageUrls')
                        const array =await JSON.parse(jsonArray);
                        console.log(array)
                        setImages(array)
                    }
                    setImages(photo)
                }catch(err){
                    console.error(err)
                }
           
            }
            fetchData()
        }else{
            const getImages =async ()=>{
                const jsonArray = await AsyncStorage.getItem('cacheImageUrls')
                        const array =await JSON.parse(jsonArray);
                        console.log(array)
                        setImages(array)
            }
            getImages()
        }
    },[])

 
    return (
        <SafeAreaView style={styles.container}>
            <LeftNavbar/>
            <ScrollView style={styles.scrollView}>
            
            <View style={styles.box}>
            {images.map((image)=>{
                return <Card key={image.id} url={image.url_s} owner={image.owner}/>
            })}
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display:'flex',
        flexDirection:'row',

        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        marginHorizontal: 20,
      },
      box:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        gap:10,

      }
})