import React, { Component } from 'react';
import {View, Image} from 'react-native';

export default class ImagemGenerica extends Component{
    render(){
        return(
            <View>
                <Image
                    source = {{uri: this.props.urlImagem}}
                    style = {{width: this.props.largura, height: this.props.altura}}
                />
            </View>
        )
    }
}
