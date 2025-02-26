import { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';



class Noticias extends Component {

  constructor(props) {
    super(props)
    this.state = { Noticia: 'Mega-acidente de trem na Índia mata 275 pessoas' }
    this.state = { Noticia2: 'Índia faz pouso histórico no polo sul da Lua' }
    this.state = { Noticia3: 'Pedro' }

    this.entrar = this.entrar.bind(this);
  }

  entrar(nome) {
    this.setState({ nome:nome })

  }
  render() {
    return (
      <ScrollView>
        <View>
          <Text style={{ marginTop: 50, fontSize: 25, color: '#0000ff', textAlign: 'center', marginTop: 50 }}>
            {this.state.nome}
          </Text>
          <Text></Text>
          <Foto largura={100} altura={100} Noticias='Em 2 de junho um mega-acidente envolvendo um trem matou 275 pessoas na cidade cidade de Balasore, no estado de Odisha, na Índia. Ao todo quatro vagões do trem Coromandel Express descarrilaram.A causa do acidente foi divulgada dias depois pelas autoridades e teria ocorrido por conta de uma falha no sistema de sinalização. Mais de 900 pessoas ficaram feridas.' imagem='https://midias.correiobraziliense.com.br/_midias/jpg/2023/06/03/acidente_na_india3-28163344.jpg'></Foto>

          <Foto largura={100} altura={100} Noticias='A missão indiana Chandrayaan-3 fez história ao se tornar a primeira a conseguir pousar uma espaçonave nos arredores do polo sul da Lua.Até então, EUA, a antiga União Soviética e a China haviam conseguido chegar perto do equador lunar, mas nenhuma missão com destino ao polo sul foi bem-sucedida.' imagem='https://midias.correiobraziliense.com.br/_midias/jpg/2023/12/27/cbifot250820230472-33746900.jpg'></Foto>


          <Button title='Entrar' onPress={() => this.entrar('Botao 1')}> </Button>
          <Text style={{ margin: 20 }}></Text>
          <Button title='Entrar' onPress={() => this.entrar('Botao 2')}> </Button>
        </View>
      </ScrollView>
    );
  }
}

export default Noticias;

class Foto extends Component {
  render() {
    return (
      <View>
        <Image source={{ uri: this.props.imagem }}
          style={{ width: this.props.largura, height: this.props.altura, marginTop: 20 }}></Image>
        <Text>{this.props.Noticias}</Text>
      </View>
    );
  }
}