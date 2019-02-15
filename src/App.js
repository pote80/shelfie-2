import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form';
import Header from './component/Header/Header';


class App extends Component {
  constructor() {
    super()

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('/api/products')
      .then(res => this.setState({ products: res.data }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard products={this.state.products} />
        <Form />
      </div>
    );
  }
}

export default App;
