
// import { useEffect, useState } from "react";


import {GifItem} from './GifItem'
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({ category }) => {
  const {images, isLoading} = useFetchGifs(category);
  console.log('isLoading',isLoading);
  //const [images, seImages] = useState([]);

  // const getImages = async () => {
  //   let resp = await getGifs(category);
  //   seImages(resp);
  // }
 
  // useEffect(()=>{
  //   // getGifs(category)
  //   //   .then( newImages => seImages(newImages));
  //   getImages();
  // },[])


  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h2> Cargando.. </h2>)
        }
        <div className="card-grid">
        {
            images.map( (img) => (
              <GifItem 
              key={img.id} 
              {...img}
              />
            ))
        }
        </div>

    </>
  )
}
