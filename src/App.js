import React, { Component } from 'react';
import './App.css';


import ContactForm from './Containers/ContactForm/contactForm.js';
import ProductForm from './Containers/ContactForm/productForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <ProductForm />      
      </div>
    );
  }
}

export default App;
