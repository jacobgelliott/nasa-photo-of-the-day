import React, { useState, useEffect } from 'react';
import styled from "styled-components";

export default function NasaPhoto(){
 const [photoData, setPhotodata] = useState(null);

  useEffect(() => {
      fetchPhoto();

      async function fetchPhoto() {
          const res = await fetch(
              'https://api.nasa.gov/planetary/apod?api_key=GsxpZ6DFIVBcurcUsjgaNEMiHJbNqHpm2xHoZbNX'
          );
          const data = await res.json();
          setPhotodata(data);
      }
  }, []);
  if(!photoData) return <div />;


  return (
    <div>
        <img 
            src={photoData.url} alt={photoData.title} />

      <div>
        <h1>{photoData.title}</h1>
        <p>{photoData.date}</p>
        <p>{photoData.explanation}</p>
      </div>
    </div>
)

} 

const title = styled.h1`
    color: red;
`