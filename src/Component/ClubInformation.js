import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Cookies from "js-cookie";

const ClubInformation = () => {
    const [clubinfo,setClubinfo]=useState()
    const {clubId} = useParams()
      
    useEffect(() => {
        clubinfoData();
      }, []);
    
    
      async function clubinfoData() {
        
            const token = Cookies.get("authentication_code");
            const data = await fetch(
              `https://arcappproject.pythonanywhere.com/club/`+  clubId,
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
    <>
    <div>Rotary Club</div>
    
    </>
  )
}

export default ClubInformation