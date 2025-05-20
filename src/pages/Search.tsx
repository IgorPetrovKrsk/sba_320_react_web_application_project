import { useState } from "react";

export default function Search() {

  const rovers = {
    curiosity: 'Curiosity',
    spirit: 'Spirit',
    opportunity: 'Opportunity'
  }
  function genOptions(obj: Object) {
    return Object.entries(obj).map(([key, value]) => {
      return (
        <option key={key} value={value}>{value}</option>
      )
    });
  }

  const curiosityCameras = {
    FHAZ: 'Front Hazard Avoidance Camera',
    RHAZ: 'Rear Hazard Avoidance Camera',
    MAST: 'Mast Camera',
    CHEMCAM: 'Chemistry and Camera Complex',
    MAHLI: 'Mars Hand Lens Imager',
    MARDI: 'Mars Descent Imager',
    NAVCAM: 'Navigation Camera',
  }

  const spiritOpportunityCameras = {
    FHAZ: 'Front Hazard Avoidance Camera',
    RHAZ: 'Rear Hazard Avoidance Camera',
    NAVCAM: 'Navigation Camera',
    PANCAM: 'Panoramic Camera',
    MINITES: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
  }

  const [formData, setFormData] = useState({
    rover: rovers.curiosity,
    camera: curiosityCameras.FHAZ,
    currentPage: 1,
    earth_date: new Date().toISOString().split('T')[0]
  });

  function onChange(ev) {
    let updatedData = { ...formData, [ev.target.name]: ev.target.value };
    if (ev.target.name =='rover'){
      updatedData.camera = 'Front Hazard Avoidance Camera' //because every rover has 'Front Hazard Avoidance Camera'
    }
    setFormData(updatedData)
  }


  return (<>
    <h3>Rover photos search</h3>
    <form>
      <label>Rover:&nbsp; 
        <select name='rover' onChange={onChange} value={formData.rover}>
          {genOptions(rovers)}
        </select>
      </label>
      <label>Camera:&nbsp; 
        <select name='camera' onChange={onChange} value={formData.camera}>
          {formData.rover==rovers.curiosity? genOptions(curiosityCameras):genOptions(spiritOpportunityCameras)}
        </select>
      </label>


    </form>
    {/* <img src="src\assets\NASA Under Construction 404.png" alt="Picture of aliens trying to fix Mars Rover (404 not found)" style={{ width: '90%' }} />; */}
  </>)
}