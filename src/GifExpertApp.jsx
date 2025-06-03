//STekwM8qwJCJCbQJyjAhqdp2U5q2J6fC

import { useState } from "react"
// import { AddCategory } from "./components/AddCategory";
// import GifGrid from "./components/GifGrid";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (onNewCategory) => {           
        //setCategories([...categories,`categoria${(categories.length + 1)}`]);
        // console.log('onNewCategory',onNewCategory);
        if ( categories.includes(onNewCategory)) return;
        setCategories( cat => [onNewCategory,...cat]);
        // console.log('uno',categories);
    }
    

    return (
    <>
        {/* titulo */}
            <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory 
            // setCategories = {setCategories}
            onNewCategory ={onAddCategory}
        />

        {/* listadi de gif */}
        {/* <button  onClick={ onAddCategory }> Agregar </button> */}
        {/* <ol> */}
            {categories.map(category =>                 
                <GifGrid 
                key={category}
                category={category} />              
             )}
        {/* </ol> */}

            {/* git item */}
    </>
    )
}