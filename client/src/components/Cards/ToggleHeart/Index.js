import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const RenderBookmarkIcon = (props) => {
  let { isBookmarked, toggleHeart } = props;
  return isBookmarked ? (
    <FavoriteIcon
      sx={{
        position: "absolute",
        bottom: 0,
        right: 0,
        padding: "1rem",
      }}
      onClick={toggleHeart}
      className="heart"
    />
  ) : (
    <FavoriteBorderIcon
      sx={{
        position: "absolute",
        bottom: 0,
        right: 0,
        padding: "1rem",
      }}
      onClick={toggleHeart}
      className="heart"
    />
  );
};
