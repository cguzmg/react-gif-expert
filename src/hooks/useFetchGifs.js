import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, seImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        let resp = await getGifs(category);
        seImages(resp);
        setIsLoading(false);
    }
    
    useEffect(()=>{
        getImages();
    },[])




  return {
    images,
    isLoading
  }
}
