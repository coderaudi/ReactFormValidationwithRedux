import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Input from '../../Components/Form/Input/input.js'
 class ProductForm extends React.Component {
    
    checkValidity( value , rules ){
            let isValid = true;

            if(rules.required){
                isValid = value.trim() !== '' && isValid;
            }

            if(rules.minLength){
                isValid = value.length >= rules.minLength && isValid;
            }

            if(rules.maxLength){
                isValid = value.length <= rules.maxLength && isValid;
            }

            return isValid;
        }


    Change = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitProductHandler = e =>{
        e.preventDefault();
        
        const formData = {};
        for( let formElementIdentifier in this.props){
            formData[formElementIdentifier] = this.props[formElementIdentifier].value;
        }
        console.log(this.state);
        axios.post( 'http://localhost:3000/api/products/' , formData)
        .then( response => {
            console.log('response from server ',response);
        })
        console.log('sending data to server ' , formData)

    }
    
    inputChangedHandler = (event , inputIdentifier) =>{
        console.log(event.target.value); // keybord input
        console.log( ' id' ,inputIdentifier)
        const updatedProductForm = {
            ...this.props
        };

        console.log('onClicke update ',updatedProductForm);

        const updatedFormElement = {
            ...updatedProductForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
       
      //  updatedFormElement.valid  = this.checkValidity( updatedFormElement.value ,  updatedFormElement.validation );

       updatedProductForm[inputIdentifier] = updatedFormElement;
         console.log(updatedFormElement);
        this.props.reduxinputChangedHandler(updatedFormElement , inputIdentifier);
    }
    render(){

        const formElementAry = [];
        // data from store 
        for( let key in this.props ){
             formElementAry.push({
                 id : key,
                 config : this.props[key]
             })
        }


        let productFormDisp =  (
        <form onSubmit={this.submitProductHandler}>
            <h3>Product Form ..</h3>
            {formElementAry.map( formElement => {
                return  <Input 
                          key={formElement.id}
                          elementType={formElement.config.elementType}
                          elementConfig={formElement.config.elementConfig}
                          value={formElement.config.value}
                          invalid = {!formElement.config.valid}
                          changed={ (event) => this.inputChangedHandler(event , formElement.id) } />
            })}
            <button disabled={this.props.formIsValid}>Submit</button>
        </form>
        );

        return(
          <div>
              {productFormDisp}
          </div>
        )
    }

}

const mapStateToProps = state =>{
    return {
        title : state.title,
        price : state.price,
        imageUrl : state.imageUrl,
        category : state.category
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        reduxinputChangedHandler : (updatePro , inputIdentifier) => dispatch({ type : 'storeProduct' , updatedProduct : updatePro , id : inputIdentifier })
    };
}


export default  connect(mapStateToProps , mapDispatchToProps )(ProductForm);