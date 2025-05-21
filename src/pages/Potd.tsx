import { useEffect, useState } from "react"
import axios from "axios";
import ImgWithFav from "../components/imgWithFav/ImgWithFav";


export default function Potd() {
  const apiKey = import.meta.env.VITE_NASA_API_KEY ?? 'DEMO_KEY'; //api key or DEMO_KEY is no API key found in envirenment
  const [responceData, setResponceData] = useState<{ [key: string]: any }>({}); //objects with any type
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const interval = setTimeout(async () => {
      const responce = await axios.get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key: apiKey,
          count: 1,
          thumbs: true
        }
      });
      if (responce.status == 200) {        
        setResponceData(responce.data[0]);
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(interval);
  },[loading])

  return (<>
    <h1>Picture of the Day</h1>

    {(loading) ?
      <img src="src\assets\NASA Alien searching.png" alt="Picture of alien with the magnifing glass and title searching" style={{ width: '90%' }} /> :
      <>
        <h3>Date {responceData.date}</h3>
        <h3>{responceData.title}</h3>
        <p>{responceData.explanation}</p>
        {(responceData.media_type=='image')?
          <ImgWithFav src={responceData.url} alt={responceData.title} style={{ width: '90%' }} /> :          
          <></>
        }        
      </>
    }
    <br />
    <button disabled={loading} onClick={()=> {setLoading(true)}}>Get new picture of the day</button>
  </>)
}