import { Link } from "react-router-dom";
import styles from './nav.module.css'

export default function Nav() {
    return (
        <div className={styles.divNavigation}>
            <Link to="/"><img className={styles.img}src="src\assets\NASA Rovor logo.webp" alt="NASA Rover logo" /></Link>
            <Link to="/">Home</Link>
            <Link to="/potd">Picture of the Day</Link>
            <Link to="/search">Search</Link>            
            <Link to="/favorites">Favorites</Link>            
            <Link to="/acknowledgements">Acknowledgements</Link>            
        </div>
    );
}