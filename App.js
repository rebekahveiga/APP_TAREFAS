import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import {FontAwesome} from '@expo/vector-icons'
import Tarefa from './src/Tarefa';

export default function App() {

  const [nome, setNome] = useState('');

  const [list, setList] = useState([])

 

  function handleApp(){

    if(nome === ''){
      return;
    }

    const dados = {
      key: Date.now(),
      item: nome
    }

    setList(oldArray => [dados, ...oldArray]);

    setNome('')

  }

  function handleDelete(item){
    let filtroItem = list.filter((nome)=>{
      return(nome.item !== item)
    })

    setList(filtroItem)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <View style={styles.containerInput}>
        <TextInput

        placeholder='Digite sua Tarefa...'
        style={styles.input}
        value={nome}
        onChangeText={(text)=>setNome(text)}
        />

        <TouchableOpacity style={styles.buttonApp} onPress={handleApp}>
          <FontAwesome name="plus" size={20} color="white"/>

        </TouchableOpacity>
    
      </View>

      <FlatList

      data = {list}
      keyExtractor={(item)=>item.key}
      renderItem={({ item })=> <Tarefa data={item} delete={()=>handleDelete(item.item)}/> }
      style={styles.list}
      
      
      
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    paddingTop: 28,
    paddingBottom: 14,
  },
  title:{
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginTop: '7%',
    paddingStart: '5%',
    marginBottom: 12,
  },
  buttonApp:{
    width: '15%',
    height: 44,
    backgroundColor: 'black',
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 15,
  },
  containerInput:{
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems:'center',
    justifyContent: 'center',
    marginBotton: 22,
  },
  input:{

    width: '75%',
    backgroundColor: '#FBFBFB',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 15,

  },
  list:{
    flex: 1,
    backgroundColor: 'white',
    paddingStart: '4%',
    paddingEnd: '4%',


  }
});
