import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const GallerySlug = () => {
    const [gallerys,setGallerys]=useState()
    const { galleryId } = useParams();
    const navigate = useNavigate();

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
    <>
    <div className="mt-2 mr-2 flex justify-end">
    <button className="mt-2  ml-0   px-8 py-3 bg-[#6153fc] text-[#f8f8f8] rounded flex items-center font-[600] md:ml-2 md:mt-0   lg:ml-5" onClick={()=>{navigate('/gallery')}}>
      <span className="mr-2 text-lg ">
        <BsFillArrowLeftSquareFill />
      </span>
      Back
    </button>
    </div>
    <div>Govind</div>
    </>
  )
}

export default GallerySlug