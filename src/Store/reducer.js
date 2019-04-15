const initialState ={
    productForm :{
        title : {
            elementType : 'input',
            elementConfig : {
                type : 'text',
                placeholder : 'enter title'
            },
        value : '',
        validation : {
            required : true,
            minLength : 3 ,
            
        },
        valid : false    
        },
        price : {
            elementType : 'input',
            elementConfig : {
                type : 'text',
                placeholder : 'enter price redux store' 
            },
        value : '',
        validation : {
            required : true
        },
        valid : false        
        },
        imageUrl : {
            elementType : 'input',
            elementConfig : {
                type : 'text',
                placeholder : 'enter img url'
            },
        value : '' ,
        validation : {
            required : true
        },
        valid : false       
        },
        category : {
            elementType : 'select',
            elementConfig : {
               options : [ { value  : 'fruits' , displayValue : 'fruits' },
                            { value  : 'vegetables' , displayValue : 'vegetables' }]
            },
        value : '' ,
        validation : {
            required : false
         },
         valid : true            
        }
    },
  
}

const reducer = ( state = initialState.productForm , action ) =>{

    if(action.type === 'storeProduct') {
       return {
           ...state , 
           state : state[action.id] = action.updatedProduct
       } 
    }

    return state;
}

export default reducer;