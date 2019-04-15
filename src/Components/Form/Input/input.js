import React from 'react'

 const input = (props) =>{

    let inputElement =  null; 

    switch(props.elementType){
        case('input') :
        inputElement =   <input type='text' 
                         {...props.elementConfig} 
                         onChange={props.changed}
                         value={props.value}/>
        break;
        case('textarea') :
        inputElement =  <input type='text' 
                            {...props.elementConfig} 
                            onChange={props.changed}
                            value={props.value}/>
        break;
        case('select') :
        inputElement = ( <select
                            value={props.value}
                            onChange={props.changed}>

                            {props.elementConfig.options.map( option => (
                                <option key={option.value} value={option.value}> 
                                {option.displayValue}
                            </option>
                            ))}
                         </select>)
        break;
        default :
        // inputElement = <input type='text' 
        //                     {...props.elementConfig} 
        //                     value='default value'/>
        break;
    }

  
    return(

        <div>{inputElement}</div>
    )
 }
export default input;