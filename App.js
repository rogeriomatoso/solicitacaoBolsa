import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Switch, Text, TextInput, View,} from 'react-native';
import Head from './src/components/Head';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {      
      nome: '',
      idade: '',      
      curso: 0,
      periodo: 0,
      turno: 0,
      sexo: 0, 
      valor: 0,
      bolsa: false,     
      cursos:[
        {key:1, nome:'Curso'},
        {key:2, nome:'Direito'},
        {key:3, nome:'Administração'},
        {key:4, nome:'Veterinária'},
        {key:5, nome:'Zoologia'},
        {key:6, nome:'Medicina'},
      ],
      periodos:[
        {key:1, semestre: 'Período'},
        {key:2, semestre: '1º'},
        {key:3, semestre: '2º'},
        {key:4, semestre: '3º'},
        {key:5, semestre: '4º'},
        {key:6, semestre: '5º'},
        {key:7, semestre: '6º'},
      ],
      turnos:[
        {key:1, horario:'Turno'},
        {key:2, horario:'Manhã'},
        {key:3, horario:'Tarde'},
        {key:4, horario:'Noite'},

      ],
      sexos:[
        {key:1, genero: 'Sexo:'},
        {key:2, genero: 'Não informado'},
        {key:3, genero: 'Masculino'},
        {key:4, genero: 'Feminino'},
      ],
    };
    this.nomeUsuario = this.nomeUsuario.bind(this);
    this.idadeUsuario = this.idadeUsuario.bind(this);
  }
  nomeUsuario(texto){
    if(texto.lenght < 0){
      alert('Nome?');
    }
    else{
      this.setState({nome: texto});
    }
  }

  idadeUsuario(texto){
    this.setState({idade: texto})
  }



  render(){
    let cursosItem = this.state.cursos.map((v,k)=>{
      return<Picker.Item key={k} value={k} label={v.nome}/>})

    let periodosItem = this.state.periodos.map((v,k)=>{
      return<Picker.Item key={k} value={k} label={v.semestre}/>})
       
    let turnosItem = this.state.turnos.map((v,k)=>{
      return<Picker.Item key={k} value={k} label={v.horario}/>})
    let sexosItem = this.state.sexos.map((v,k)=>{
      return <Picker.Item key={k} value={k} label={v.genero}/>})  

    return (
      <View style={styles.container}>
        <View>
          <Head />
        </View>
        <View>
          <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 20 }}> Solicitação Bolsa</Text>
          <Text style={styles.textInput}> Selecione os parâmetros:</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu nome:'
            onChangeText={this.nomeUsuario}
          />
          <View style={{ flexDirection: 'row', alignContent: 'flex-start' }}>
            <TextInput
              style={styles.idadeInput}
              placeholder='Idade:'
              onChangeText={this.idadeUsuario}
            />
            <Picker
              style={styles.combo1}
              selectedValue={this.state.sexo}
              onValueChange={(itemValue, itemIndex) => this.setState({ sexo: itemValue })}>
              {sexosItem}
            </Picker>
          </View>
          <View>
            <Picker
              style={styles.combo}
              selectValue={this.state.curso}
              onValueChange={(itemValue, itemIndex) => this.setState({ curso: itemValue })}>
              {cursosItem}
            </Picker>
          </View>
          <View>
            <Picker
              style={styles.combo}
              selectValue={this.state.periodo}
              onValueChange={(itemValue, itemIndex) => this.setState({ periodo: itemValue })}>
              {periodosItem}
            </Picker>
          </View>
          <View>
            <Picker
              style={styles.combo}
              selectValue={this.state.turno}
              onValueChange={(itemValue, itemIndex) => this.setState({ turno: itemValue })}>
              {turnosItem}
            </Picker>
          </View>
          <View>
          <Slider
            style={{ margin: 10, width: 300 }}
            minimumVAalue={0}
            maximumValue={5000}
            onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
            value={this.state.valor}
          />
          <Text style={{ fontSize: 18, fontFamily: 'arial', margin: 10 }}>Renda: R$ {this.state.valor.toFixed(2)}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'flex-start' }}>
          <Text style={{ margin: 10, fontSize: 18, fontFamily: 'arial',alignContent: 'flex-start' }}>Possui bolsa?      {(this.state.bolsa) ? 'Sim' : 'Não'}</Text>
          <Switch
            value={this.state.bolsa}
            onValueChange={(valorSwitch) => this.setState({ bolsa: valorSwitch })}
          />
        </View>
          <Text style={{ fontSize: 20, marginBottom: 20, paddingLeft: 5 }}>Informações Inseridas:</Text>
        </View>       
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
          <View>
            <Text style={styles.texto}>Nome: </Text>
            <Text style={styles.texto}>Idade:  <Text style={styles.textoFinal}>{this.state.idade}</Text></Text>
            <Text style={styles.texto}>Curso: </Text>
            <Text style={styles.texto}>Período: <Text style={styles.textoFinal}>{this.state.periodos[this.state.periodo].semestre}</Text></Text>
          </View>
          <View>
            <Text style={styles.textoFinal}>{this.state.nome}</Text>
            <Text style={styles.texto}>Sexo: <Text style={styles.textoFinal}>{this.state.sexos[this.state.sexo].genero}</Text></Text>
            <Text style={styles.textoFinal}>{this.state.cursos[this.state.curso].nome}</Text>
            <Text style={styles.texto}>Turno: <Text style={styles.textoFinal}>{this.state.turnos[this.state.turno].horario}</Text></Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',   
    padding: 10,    
  },
  input:{
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 15,
    padding: 5,
    margin: 10,
    borderRadius: 5,
  },

  textInput:{
    fontSize: 20,         
  },

  texto:{
    fontSize: 18,
    fontFamily: 'arial',    
    marginBottom: 10,
    padding: 10
  },

  textoFinal:{
    fontSize: 18,
    fontFamily: 'arial',
    fontStyle: 'italic',  
    padding: 10, 
    marginBottom: 10,  
  },

  combo:{
    width: 300,
    height: 40,
    borderColor: '#222',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    fontSize: 17,
  },
  idadeInput:{
    height: 40,
    width: 100,
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 15,
    padding: 5,
    margin: 10,
    borderRadius: 5,
  },
  combo1:{
    width: 180,
    height: 40,
    borderColor: '#222',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    fontSize: 17,
  },
})
