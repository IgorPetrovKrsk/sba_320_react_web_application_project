interface ImgWithFavProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

export default function ImgWithFav({src,alt,style}:ImgWithFavProps) {
    return (<>
        <img src={src} alt={alt} style={style} />
    </>)
}