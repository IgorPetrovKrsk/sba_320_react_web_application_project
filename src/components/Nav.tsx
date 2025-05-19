import { Link, useLocation } from "react-router-dom";
import styles from './nav.module.css'

export default function Nav() {
    const location = useLocation();
    return (
        <div className={styles.divNavigation}>
            <Link to="/"><img className={styles.img}src="src\assets\NASA Rovor logo.webp" alt="NASA Rover logo" /></Link>
            <Link to="/" className={location.pathname === "/" ? styles.active : ""}>Home</Link>
            <Link to="/potd" className={location.pathname === "/potd" ? styles.active : ""}>Picture of the Day</Link>
            <Link to="/search" className={location.pathname === "/search" ? styles.active : ""}>Search</Link>            
            <Link to="/favorites" className={location.pathname === "/favorites" ? styles.active : ""}>Favorites</Link>            
            <Link to="/acknowledgements" className={location.pathname === "/acknowledgements" ? styles.active : ""}>Acknowledgements</Link>            
        </div>
    );
}