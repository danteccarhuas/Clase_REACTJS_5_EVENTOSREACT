import React, { Component } from "react";
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

class App extends Component {

  token = '5YVCT65EX3I22YHEHF73';

  state = {
    categorias: []
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
    let url = ``;

    await fetch(url)
    .then(respuesta =>{
      return respuesta.json();
    })
    .then();
    console.log(busqueda);
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
        </div>
      </div>
    );
  }
}

export default App;