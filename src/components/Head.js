import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ImagemGenerica from './ImagemGenerica';

export default class Head extends Component{
    render(){
      return(
        <View style={styles.container}>
             <ImagemGenerica
            //urlImagem = {'http://www.evef.com.br/images/logotipo/logotipo_universidade_de_praga.gif'}
            urlImagem = {'http://www.evef.com.br/images/logotipo/logotipo_universidade_medicina_varsovia.gif'}
            largura = {40}
            altura = {40}            
          />
        </View>
      )
   }
}

const styles = StyleSheet.create({
  container:{
     backgroundColor:  '#3D8AF7', 
     height: 60,
     padding: 10,
     marginBottom: 20,
     },
})