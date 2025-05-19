import { Link } from "react-router-dom";
export default function Acknowledgements() {
  return (
    <>
      <h2>Thanks NASA for this wonderfull API and all the Pictures</h2>

       <Link to='https://www.nasa.gov/'>NASA</Link>
       <br />
       <Link to='https://api.nasa.gov/'>NASA API</Link>
      <br />
      <Link to='https://en.wikipedia.org/wiki/Mars_rover'>And to all the MARS Rovers</Link>
      </>
  )

}