import axios from "axios";
import { useEffect, useState } from "react";
import ImgWithFav from "../../components/ImgWithFav";
import styles from './search.module.css'

export default function Search() {

  function genOptions(obj: Object) {
    return Object.entries(obj).map(([key, value]) => {
      return (
        <option key={key} value={value}>{value}</option>
      )
    });
  }

  function roverPhotos() {
    return photos?.map(it =>
      <ImgWithFav src={it.img_src} alt={it.earth_date} key={it.id} />
    )
  }

  function onChange(ev) {
    let updatedData = { ...formData, [ev.target.name]: ev.target.value };
    if (ev.target.name == 'rover') {
      updatedData.camera = 'all'
    }
    if (ev.target.name == 'rover' || ev.target.name == 'camera') {
      updatedData.current_page = 1 //going back to the first page
    }
    setFormData(updatedData)
  }

  function onSubmit(ev) {
    ev.preventDefault();
    setLoading(true);
  }

  const today = new Date().toISOString().split("T")[0];
  const apiKey = import.meta.env.VITE_NASA_API_KEY ?? 'DEMO_KEY'; //api key or DEMO_KEY is no API key found in envirenment

  const rovers = {
    perseverance: 'Perseverance',
    curiosity: 'Curiosity',
    spirit: 'Spirit',
    opportunity: 'Opportunity'
  }

  const curiosityCameras = {
    ALL: 'All',
    FHAZ: 'Front Hazard Avoidance Camera',
    RHAZ: 'Rear Hazard Avoidance Camera',
    MAST: 'Mast Camera',
    CHEMCAM: 'Chemistry and Camera Complex',
    MAHLI: 'Mars Hand Lens Imager',
    MARDI: 'Mars Descent Imager',
    NAVCAM: 'Navigation Camera',
  }

  const spiritOpportunityCameras = {
    ALL: 'All',
    FHAZ: 'Front Hazard Avoidance Camera',
    RHAZ: 'Rear Hazard Avoidance Camera',
    NAVCAM: 'Navigation Camera',
    PANCAM: 'Panoramic Camera',
    MINITES: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
  }

  const [formData, setFormData] = useState({
    rover: rovers.perseverance,
    camera: curiosityCameras.ALL,
    current_page: 1,
    earth_date: today
  });
  const [loading, setLoading] = useState(false)

  const [photos, setPhotos] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const requestParams = {
          params: {
            page: formData.current_page,
            earth_date: formData.earth_date,
            api_key: apiKey
          }
        }
        // if (formData.camera != 'All') {
        //   if (formData.rover == 'Curiosity') {
        //     requestParams.params.camera = Object.keys(curiosityCameras).find((key) => curiosityCameras[key] === formData.camera);
        //     console.log(requestParams);
        //   } else {
        //     requestParams.params.camera = Object.keys(spiritOpportunityCameras).find((key) => spiritOpportunityCameras[key] === formData.camera);
        //     console.log(requestParams);
        //   }
        // }
        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${formData.rover}/photos`, requestParams)
        if (response.status == 200) {
          setPhotos(response.data.photos);
        }
      }
      catch (err) {
        console.error(err);
      }
    }
    if (loading) getData();
    setLoading(false);
    return () => { };
  }, [loading])


  return (<>
    <h3>Rover photos search</h3>
    <form onSubmit={onSubmit}>
      <label>Rover:&nbsp;
        <select name='rover' onChange={onChange} value={formData.rover}>
          {genOptions(rovers)}
        </select>
      </label>
      <br />
      {/* Camera abbriviations are all other the place so NO camera selection */}
      {/* <label>Camera:&nbsp;
        <select name='camera' onChange={onChange} value={formData.camera}>
          {formData.rover == rovers.curiosity ? genOptions(curiosityCameras) : genOptions(spiritOpportunityCameras)}
        </select>
      </label> */}
      <br />
      <label>Earth date:&nbsp;
        <input type="date" name='earth_date' onChange={onChange} value={formData.earth_date} max={today} />
      </label>
      <br />
      <br />
      <input type="submit" value="Search" />

    </form>
    <br />
    {loading ? <img src="src\assets\NASA Alien searching.png" alt="Picture of aliens trying to fix Mars Rover (404 not found)" style={{ width: '90%' }} /> :
      <>
        {(!photos?.length && photos != null) ? <img src="src\assets\NASA Aliens not found.png" alt="Picture of mars rover trying to find aliens just as aliens are standing behind the rover" style={{ width: '90%' }} /> :
          <div className={styles.roverPhotos}>
            {roverPhotos()}
          </div>
        }
      </>

    }
    {/* only showing navigation buttons if if there are pictures */}
    <br />
    {photos?.length > 0 && <><button onClick={() => { setFormData(c => ({ ...c, current_page: c.current_page - 1 })); setLoading(true); }} disabled={formData.current_page == 1}>←</button>
      {/* ideally should restict max pages */}
      <input type="number" name='current_page' onChange={onChange} value={formData.current_page} min={1} />
      <button onClick={() => { setFormData(c => ({ ...c, current_page: c.current_page + 1 })); setLoading(true); }}>→</button></>}

  </>)
}