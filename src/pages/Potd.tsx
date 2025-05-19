import { useEffect, useState } from "react"


export default function Potd() {
  const apiKey = import.meta.env.VITE_NASA_API_KEY;
  const [picture,setPicture] = useState('');

  const potd = useEffect(() => {
    const interval = setTimeout(() => {
      setPicture('123');
    }, 1000);
    console.log("Running...");

    return () => clearInterval(interval);
  })

  return (<>
    <h1>Picture of the Day</h1>

    {(picture)? <img src="src\assets\NASA Under Construction 404.png" alt="Picture of alien with the magnifing glass and title searching" style={{ width: '90%' }} />:<img src="src\assets\NASA Alien searching.png" alt="Picture of alien with the magnifing glass and title searching" style={{ width: '90%' }} />}
  </>)
}