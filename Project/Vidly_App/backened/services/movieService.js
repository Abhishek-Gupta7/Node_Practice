const convertImageToUrl = require("../utils/convertImageUrl");
const Movies = require("../model/movies");
module.exports = {
  insertMovie,
};

async function insertMovie(req, data) {
  let image = convertImageToUrl(req.file.path);
  let { movieName, movie_type , barCode, stock, rating, rate } = data;
  let result = await Movies.create({
    movieName,
    movie_type,
    barCode,
    stock,
    image,
    rating,
    rate,
  });
  return result;
}
