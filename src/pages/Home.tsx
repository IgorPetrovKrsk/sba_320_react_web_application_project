import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <h2>Welcome to Mars Rover Photo Viewer</h2>
      <img src="src\assets\NASA all rovers.webp" alt="Banner of all NASA's rovers on Mars" style = {{width:'90%'}}/>
      <h3><Link to='/search'>Search</Link> for photos from Mars or try <Link to='/potd'>Picture of the Day</Link></h3>
      <h4>Do not forget about your <Link to='/favorites'>Favorites</Link></h4>
    </>
  )

}