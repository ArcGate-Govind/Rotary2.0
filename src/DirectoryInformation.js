import React,{useEffect} from 'react'
import Cookies from "js-cookie";
import { useParams } from 'react-router-dom'


const DirectoryInformation = () => {
    const {DirectoryId} = useParams()
    useEffect(() => {
        getDirectorydata();
      }, []);
      async function getDirectorydata() {
        const token = Cookies.get("authentication_code");
    
        const data = await fetch(
          `https://arcappproject.pythonanywhere.com/club/club_directory/` + DirectoryId ,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const json = await data?.json();
      
        console.log("json", json);
      }
  return (
    <div>
    v lbkcgcmb
    </div>
  )
}

export default DirectoryInformation