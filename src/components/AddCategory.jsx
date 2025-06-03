import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

const [inputValue, setInputValue] = useState('');

const onInputChange = (event) =>{
    setInputValue(event.target.value);
}


const onSubmit = (event) =>{
    // console.log(event.target.value);
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    // console.log('inputValue',inputValue);
    //console.log('setCategories',setCategories);
    //setCategories( cat => [inputValue,...cat]);
    onNewCategory(inputValue.trim());
    setInputValue('');
}

  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar Gif"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
    
  )
}
