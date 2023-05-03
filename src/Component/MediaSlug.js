import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MediaSlug = () => {
    const [mediaGallery,setMediaGallery]=useState()
  const { mediaId } = useParams();


  useEffect(() => {
    getMedia();
  }, []);

  async function getMedia() {
    const data = await fetch(
      `https://arcappproject.pythonanywhere.com/media_gallery/media` + mediaId,
      {
        method: "GET",
      }
    );
    const json = await data?.json();
    setMediaGallery(json)

   
  }

  return <div>ram</div>;
};

export default MediaSlug;
