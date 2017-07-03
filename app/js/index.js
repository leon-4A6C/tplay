const tmdb = require("tmdbv3").init("81485988d49a76332eea5e3a5297d342");
// used to make the image urls
let configuration;
tmdb.configuration((err, res) => {
  if (err) {
    console.log(err);
    return
  }
  configuration = res;
  console.log(configuration);
});

tmdb.search.movie("transformers", (err, res) => {
  if (err) {
    console.log(err);
    return
  }
  var img = document.getElementById("img");
  img.src = configuration.images.base_url+"w500"+res.results[0].poster_path;
  console.log(res);

})
