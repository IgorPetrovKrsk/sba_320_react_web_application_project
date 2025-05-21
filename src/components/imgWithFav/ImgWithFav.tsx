import { useState } from 'react';
import styles from './imgWithFav.module.css'

interface ImgWithFavProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

export default function ImgWithFav({src,alt,style}:ImgWithFavProps) {
    const [expanded,setExpanded] = useState(false)

    return (<>
        <img src={src} alt={alt} style={style} className={!expanded? styles.imgWithFav: styles.expanded} onClick={() => setExpanded(!expanded)}/>
    </>)
}