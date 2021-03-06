import React, { Component } from 'react';
import { Button, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableHighlight, View,} from 'react-native';
import Head from './src/components/Head';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {      
      nome: '',
      idade: 0,      
      curso: '',
      periodo: '',
      turno: '',
      sexo: '', 
      valor: 0,
      bolsa: false,  
      valida: false,   
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
    this.confirmaDados = this.confirmaDados.bind(this);
  }
  nomeUsuario(texto){
    if(texto.length > 0){
      this.setState({nome: texto});      
    }
    else{
      alert('Nome?');
    }
  }

  idadeUsuario(texto){
    this.setState({idade: texto})
  }

  confirmaDados(){
    if(this.state.idade > 0 &&this.state.nome&&this.state.periodo&&this.state.turno&&this.state.sexo&&this.state.curso){
      this.setState({valida : true});
    }
    else{
      alert('Preencha todos os campos!');
    }

  }

  render(){
    let cursosItem = this.state.cursos.map((v,k)=>{
      return<Picker.Item key={k} value={v.nome} label={v.nome}/>})

    let periodosItem = this.state.periodos.map((v,k)=>{      
      return<Picker.Item key={k} value={v.semestre} label={v.semestre}/>})
       
    let turnosItem = this.state.turnos.map((v,k)=>{
      return<Picker.Item key={k} value={v.horario} label={v.horario}/>})
    let sexosItem = this.state.sexos.map((v,k)=>{
      return <Picker.Item key={k} value={v.genero} label={v.genero}/>})  

    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
              <Text style={{fontSize:17, fontFamily:'arial', margin:10}}>Informe sua renda:</Text>
              <Slider
                style={{ /*margin: 10,*/ width: 300, marginBottom: 20 }}
                minimumVAalue={0}
                maximumValue={5000}
                onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
                value={this.state.valor}
                thumbTintColor = '#3D8AF7'                
              />              
           </View>   
           <TouchableHighlight
              style={{backgroundColor:'#3D8AF7',padding:10, borderRadius:5, marginHorizontal: '20%', marginBottom: 20 }}
              onPress={ () => this.confirmaDados()}
            >
             <Text style={{fontSize:18, textAlign: 'center'}}>Enviar Dados</Text>
           </TouchableHighlight>          
                           
            <Text style={{ fontSize: 20, marginBottom: 20, paddingLeft: 5 }}>Informações Inseridas:</Text>
          </View>

          { this.state.valida ?       
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <View>
                <Text style={styles.texto}>Nome: </Text>
                <Text style={styles.texto}>Idade:  <Text style={styles.textoFinal}>{this.state.idade}</Text></Text>
                <Text style={styles.texto}>Curso: </Text>
                <Text style={styles.texto}>Período: <Text style={styles.textoFinal}>{this.state.periodo}</Text></Text>
                <Text style={{ fontSize: 18, fontFamily: 'arial', marginLeft:10 }}>Renda: R$ {this.state.valor.toFixed(2)}</Text>
              </View>
              <View>
                <Text style={styles.textoFinal}>{this.state.nome}</Text>
                <Text style={styles.texto}>Sexo: <Text style={styles.textoFinal}>{this.state.sexo}</Text></Text>
                <Text style={styles.textoFinal}>{this.state.curso}</Text>
                <Text style={styles.texto}>Turno: <Text style={styles.textoFinal}>{this.state.turno}</Text></Text> 
                <View style={{flexDirection:'row'}}>                     
                  <Text style={{ fontSize: 18, fontFamily: 'arial'}}> Possui bolsa?    {(this.state.bolsa) ? 'Sim' : 'Não'}</Text>
                  <Switch
                  value={this.state.bolsa}
                  onValueChange={(valorSwitch) => this.setState({ bolsa: valorSwitch })}
                  thumbColor = '#3D8AF7'
                  />  
                </View>        
              </View>
            </View>
              : <View></View>
          }  
        </ScrollView>  
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
