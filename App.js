import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';

class Noticias extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      noticiaAtual: {
        titulo: 'Mega-acidente de trem na Índia mata 275 pessoas',
        imagem: 'https://midias.correiobraziliense.com.br/_midias/jpg/2023/12/27/cbifot250820230472-33746900.jpg',
        descricao:
          'A missão indiana Chandrayaan-3 fez história ao se tornar a primeira a conseguir pousar uma espaçonave nos arredores do polo sul da Lua.',
      },
      noticias: [
        {
          titulo: 'Doença misteriosa mata mais de 50 pessoas no Congo',
          imagem: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1zLlcI.img?w=1920&h=1080&q=60&m=2&f=webp',
          descricao:
            'A Organização Mundial da Saúde (OMS) disse que mais de 50 pessoas morreram no noroeste do Congo devido a uma doença desconhecida de rápida disseminação.',
        },
        {
          titulo: 'Por que o rapper Oruam foi preso novamente?',
          imagem: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1zPClv.img?w=768&h=511&m=6&f=webp',
          descricao:
            'Oruam, aos 23 anos, é considerado um dos principais nomes do rap e trap nacional. Seu nome de batismo é Mauro Davi dos Santos Nepomuceno.',
        },
        {
          titulo: 'Paraibano analfabeto cria moto movida a água',
          imagem: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1zMmMs.img?w=800&h=435&q=60&m=2&f=webp',
          descricao:
            'Sandro Alves de Oliveira, morador de Alagoa Nova, na Paraíba, criou um sistema que faz sua motocicleta funcionar com água.',
        },
      ],
    };
  }

  atualizarNoticia = (noticia) => {
    this.setState({ noticiaAtual: noticia });
  };


  render() {
    return (
      <View style={estilos.container}>
        <Noticia noticia={this.state.noticiaAtual} />
        <FlatList
          data={this.state.noticias}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={estilos.botaoContainer}>
              <Button title={item.titulo} onPress={() => this.atualizarNoticia(item)} />
            </View>
          )}
        />
      </View>
    );
  }
}

const Noticia = ({ noticia }) => {
  return (
    <View style={estilos.noticiaContainer}>
      <Text style={estilos.titulo}>{noticia.titulo}</Text>
      <Image source={{ uri: noticia.imagem }} style={estilos.imagem} />
      <Text style={estilos.descricao}>{noticia.descricao}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  noticiaContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  imagem: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  descricao: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginTop: 10,
  },
  botaoContainer: {
    marginVertical: 5,
    width: '90%',
  },
});

export default Noticias;
