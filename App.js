import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import toto from './tp.json'

export default function App() {
  return (
    // <View style={{flex:1}}>     EXEMPLE DE BOUCLE MAP
    // {toto.map((item,index)=>{
    //   return(
    //     <Text key={index}>
    //       {item.title}
    //     </Text>
    //   )
    // })}
    // </View>
    <ScrollView contentContainerStyle={styles.container}>
      {toto.map((item, index) => {
        console.log(item)
        return (
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                paddingTop: 20,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image source={{ uri: item.img }} style={styles.img}></Image>
            </View>
            <View style={styles.blocText}>
              <Text key={index} style={styles.title}>
                {item.title}
              </Text>
              <Text style={styles.text}>{item.desc}</Text>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}

//     <View style={styles.container}>
//       <View style={{ flexDirection: 'row',flex:1}}>
//       <View style={{paddingTop:20, flex:1}}>
//         <Image source={{uri: toto[0].img}} style={styles.img}></Image></View>
//         <View style={styles.blocText}>
//           <Text style={styles.title}>{toto[0].title}</Text>
//           <Text style={styles.text}>{toto[0].desc}</Text>
//           </View>
//       </View>
//       <View style={{ flexDirection: 'row',flex:1}}>
//       <View style={{paddingTop:20, flex:1}}>
//         <Image source={{uri: toto[1].img}} style={styles.img}></Image></View>
//         <View style={styles.blocText}>
//           <Text style={styles.title}>{toto[1].title}</Text>
//           <Text style={styles.text}>{toto[1].desc}</Text>
//           </View>
//       </View>
//       <View style={{ flexDirection: 'row',flex:1}}>
//         <View style={{paddingTop:20, flex:1}}>
//         <Image source={{uri: toto[2].img}} style={styles.img}></Image></View>
//         <View style={styles.blocText}>
//           <Text style={styles.title}>{toto[2].title}</Text>
//           <Text style={styles.text}>{toto[2].desc}</Text>
//           </View>
//       </View>
//       <View style={{ flexDirection: 'row',flex:1}}>
//       <View style={{paddingTop:20, flex:1}}>
//         <Image source={{uri: toto[3].img}} style={styles.img}></Image></View>
//         <View style={styles.blocText}>
//           <Text style={styles.title}>{toto[3].title}</Text>
//           <Text style={styles.text}>{toto[3].desc}</Text>
//           </View>
//       </View>

//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    color: 'red',
  },
  blocText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 10,
  },
})
