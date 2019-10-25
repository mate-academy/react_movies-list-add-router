export const mapMovieResponse = (data) => {
  const {
    Title,
    Plot,
    Poster,
    Website,
    imdbID,
  } = data;

  return {
    imdbId: imdbID,
    title: Title,
    description: Plot,
    imgUrl: Poster,
    imdbUrl: Website,
  };
};
