import React from 'react';

import Input from '../../Components/Form/Input/input.js'
export default class ContactForm extends React.Component {
    state ={
        orderForm :{
            name : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'enter name'
                },
            value : '',
            validation : {
                required : true
            },
            valid : false    
            },
            street : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'enter street' 
                },
            value : '',
            validation : {
                required : true
            },
            valid : false        
            },
            zipCode : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'enter zipcode'
                },
            value : '',
            validation : {
                required : true
            },
            valid : false        
            },
            country : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'enter country'
                },
            value : '' ,
            validation : {
                required : true
            },
            valid : false       
            },
            email : {
                elementType : 'input',
                elementConfig : {
                    type : 'email',
                    placeholder : 'enter email'
                },
            value : '',
            validation : {
                required : true
            },
            valid : false        
            },
            deleveryMethod : {
                elementType : 'select',
                elementConfig : {
                   opetions : [ { value  : 'faster' , displayValue : 'Faster' },
                                { value  : 'cheapest' , displayValue : 'Cheapest' }]
                },
            value : '' ,
            validation : {
                required : false
             }     
            }
        },
        formIsValid : false
    };


    checkValidity( value , rules ){
        let isValid = false;
        if(rules.required){
             isValid = value.trim() !== '';
        }

        return isValid;
    }


    Change = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitOrderHandler = e =>{
        e.preventDefault();
        
        const formData = {};
        for( let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        console.log(this.state);
        console.log('submit button is pressed' , formData)
    }
    
    inputChangedHandler = (event , inputIdentifier) =>{
        console.log(event.target.value);
        const updatedOrderForm = {
            ...this.state.orderForm
        };

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
     //   updatedFormElement.valid =  this.checkValidity(updatedFormElement.valid , updatedFormElement.validation);
        updatedOrderForm[inputIdentifier] = updatedFormElement;
         console.log(updatedFormElement);
        this.setState({ orderForm : updatedOrderForm});
    }
    render(){

        const formElementAry = [];
        for( let key in  this.state.orderForm ){
             formElementAry.push({
                 id : key,
                 config : this.state.orderForm[key]
             })
        }


        let form =  (
        <form onSubmit={this.submitOrderHandler}>
            <h3>input testing FOrm Example..</h3>
            {formElementAry.map( formElement => {
                return  <Input 
                          key={formElement.id}
                          elementType={formElement.config.elementType}
                          elementConfig={formElement.config.elementConfig}
                          value={formElement.config.value}
                          changed={ (event) => this.inputChangedHandler( event , formElement.id)} />
            })}
            <button disabled={this.state.formIsValid}>Submit</button>
        </form>
        );

        return(
          <div>
              {form}
          </div>
        )
    }

}

