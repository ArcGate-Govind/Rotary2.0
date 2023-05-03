import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
const GallerySlug = () => {
    const [gallerys,setGallerys]=useState()
    const { galleryId } = useParams();

  useEffect(() => {
    getGallery();
  }, []);

  async function getGallery() {
    const data = await fetch(
      `https://arcappproject.pythonanywhere.com/media_gallery/gallery` + galleryId,
      {
        method: "GET",
      }
    );
    const json = await data?.json();
    setGallerys(json)

   
  }

  return (
    <div>Govind</div>
  )
}

export default GallerySlug