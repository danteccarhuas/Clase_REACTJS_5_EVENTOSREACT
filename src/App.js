import React, { Component } from "react";
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Eventos from './componentes/Eventos';

class App extends Component {

  token = '5YVCT65EX3I22YHEHF73';
  ordenar = 'date';

  state = {
    categorias: [],
    eventos: []
  }

  componentDidMount() {
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    let url = `https://private-anon-8176044e07-eventbriteapiv3public.apiary-proxy.com/v3/categories/?token=${this.token}&&locale=es_ES`;

    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(categorias => {
        this.setState({
          categorias: categorias.categories
        });
      });
  }

  obtenerEventos = async (busqueda) => {
    let url = `https://www.eventbriteapi.com/v3/series/15241955098/?token=${this.token}`;
    let arrayEventos = [];
    await fetch(url)
    .then(respuesta =>{
      return respuesta.json();
    })
    .then(eventos =>{
      for(var i=0; i<20; i++){
        arrayEventos.push(eventos)
      }
      this.setState({
        eventos: arrayEventos
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />

        <div className="uk-container">
          <Formulario 
            categorias = {this.state.categorias}
            obtenerEventos = {this.obtenerEventos}
          />
          <Eventos 
            eventos={this.state.eventos}
          />
        </div>
      </div>
    );
  }
}

export default App;