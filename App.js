import { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';



class Noticias extends Component {

  constructor(props) {
    super(props)
    this.state = { texto: 'Mega-acidente de trem na Índia mata 275 pessoas',imagem: 'https://midias.correiobraziliense.com.br/_midias/jpg/2023/12/27/cbifot250820230472-33746900.jpg' ,noticia:'A missão indiana Chandrayaan-3 fez história ao se tornar a primeira a conseguir pousar uma espaçonave nos arredores do polo sul da Lua.Até então, EUA, a antiga União Soviética e a China haviam conseguido chegar perto do equador lunar, mas nenhuma missão com destino ao polo sul foi bem-sucedida.'}
    this.entrar = this.entrar.bind(this);
  }

  entrar(texto,imagem,noticia) {
    this.setState({texto:texto, imagem:imagem,noticia:noticia})

  }
  render() {
    return (
      <ScrollView>
        <View style ={{padding:50}}>
          <Foto texto ={this.state.texto} imagem={this.state.imagem} noticia={this.state.noticia}/>
          <Text style={{ marginTop: 50,}}></Text>
          <Button title='Entrar' onPress={() => this.entrar('Doença misteriosa mata mais de 50 pessoas em poucas horas na República Democrática do Congo','https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1zLlcI.img?w=1920&h=1080&q=60&m=2&f=webp','A Organização Mundial da Saúde (OMS) disse que mais de 50 pessoas morreram no noroeste do Congo devido a uma doença desconhecida de rápida disseminação. Serge Ngalebato, diretor médico do Hospital Bikoro, um centro regional de monitoramento, afirmou que o curto período entre os sintomas e a morte é "muito preocupante". A OMS alerta que o surto pode ser causado por outro vírus que passou de animais para humanos. A OMS relata que o surto começou no país em 21 de janeiro, com 419 casos registrados até meados de fevereiro. Até agora, 53 pessoas morreram, dando à doença uma taxa de mortalidade de 12,49%, que é muito maior do que os 3,14% da COVID-19, em comparação.')}> </Button>
          <Text style={{marginTop: 8}}></Text>
          <Button title='Entrar' onPress={() => this.entrar('Por que o rapper Oruam foi preso novamente no Rio de Janeiro?','https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1zPClv.img?w=768&h=511&m=6&f=webp','Oruam, aos 23 anos, é considerado um dos principais nomes do rap e trap nacional. Seu nome de batismo é Mauro Davi dos Santos Nepomuceno e, ao longo de sua trajetória se envolveu em polêmcias, em especial, também por ser filho do traficante Marcinho VP, preso desde 1996.')}> </Button>
          <Text style={{marginTop: 8}}></Text>
          <Button title='Entrar' onPress={() => this.entrar('Paraibano analfabeto cria moto movida a água','https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1zMmMs.img?w=800&h=435&q=60&m=2&f=webp','Sandro Alves de Oliveira, morador de Alagoa Nova, no Agreste da Paraíba, é conhecido na cidade como “Sandro das antenas” ou “da moto movida a água”. Ele é o responsável pela criação de um sistema que faz a motocicleta dele funcionar com água, utilizando um reator de alumínio para transformar as moléculas de hidrogênio em combustível. A invenção veio após a greve dos caminhoneiros, em maio deste ano, quando a escassez de gasolina e o alto preço do combustível o motivaram a buscar alternativas.')}> </Button>
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
        <Text style={{ marginTop: 50, fontSize: 25, color: '#000000', textAlign: 'center'}}>{this.props.texto}</Text>
        <Image source={{ uri: this.props.imagem }}
          style={{ width: 300, height: 300, marginTop: 20 ,borderRadius: 15}}></Image>
        <Text style = {{fontSize:13, marginTop:20}}>{this.props.noticia}</Text>
      </View>
    );
  }
}