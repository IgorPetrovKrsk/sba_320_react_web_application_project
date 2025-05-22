import { useContext } from "react";
import { FavoritesContext } from "../../App";
import ImgWithFav from "../../components/imgWithFav/ImgWithFav";
import styles from './favorites.module.css'

export default function Favorites() {
  const favorities = useContext(FavoritesContext);

  function favoritePhotos() {
    return favorities?.map(it =>
      <ImgWithFav src={it} alt={it} key={it} />
    )
  }

  return (
    <>
      <h3>Favorites</h3>
      <div className={styles.favoritePhotos}>
        {favoritePhotos()}
      </div>

    </>

  )
}