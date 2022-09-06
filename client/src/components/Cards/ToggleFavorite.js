import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ToggleFavorite(props) {
  return props.hearted ? (
    <FavoriteIcon className="heart" />
  ) : (
    <FavoriteBorderIcon className="heart" />
  );
}
