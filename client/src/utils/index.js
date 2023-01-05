export const averageRatingFromDB = (reviews) => {
  return (
    reviews
      .map((review) => review.rating)
      .reduce((acc, curr) => acc + curr, 0) / reviews.length
  );
};

export function selectRandomImage(arrImages) {
  return arrImages[Math.floor(Math.random() * arrImages.length)].imageLink;
}
