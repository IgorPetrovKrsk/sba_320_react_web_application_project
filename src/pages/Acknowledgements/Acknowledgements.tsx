import { Link } from "react-router-dom";
export default function Acknowledgements() {
  return (
    <>
      <h2>Thanks NASA for this wonderfull API and all the Pictures</h2>

       <Link to='https://www.nasa.gov/'>NASA</Link>
       <br />
       <Link to='https://api.nasa.gov/'>NASA API</Link>
      <br />
      <Link to='https://en.wikipedia.org/wiki/Mars_rover'>All the MARS Rovers</Link>
      <br />
      <br />
      <h3>And all this guys for their hard work.</h3>
      <img src="src\assets\NASA Under Construction 404.png" alt="Picture of aliens caonstructiong a home" style={{ width: '90%' }} />
      </>
  )

}