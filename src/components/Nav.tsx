import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <Link to="/"><div>HOME</div></Link>
            <Link to="/search"><div>SEARCH</div></Link>            
        </div>
    );
}