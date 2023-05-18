const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')
/* GET home page */

router.get('/', (req, res, next) => res.render('index'));

module.exports = router;
router.get('/movies', (req, res)=> {
    
    Movie.find()
    .then((allTheMovies)=>{
   res.render("movies", {Movies: allTheMovies})
    })
    .catch((err)=>{
   console.log(err);
    })
   })

   router.get("/movies/:theID", (req, res) => {
    Movie.findById(req.params.theID)
      .then((theMovie) => {
        res.render("movieDetails", { theMovie: theMovie });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  router.get("/movies/:theID/movie-edit", (req, res)=>{
    Movie.findById(req.params.id)
    .then((theMovie)=>{
        res.render("movie-edit", {theMovie: theMovie})
    })

    router.post("/movies/:theID/update", (req, res)=>{
        Pokemon.findByIdAndUpdate(req.params.theID,{
            name: req.body.pokemonName,
            type: req.body.pokemonType,
            img: req.body.img,
            evolves: req.body.evolves,
            moves: req.body.moves
        }).then(()=>{
            res.redirect("/pokemon/"+req.params.theID)
        })
    
    })
});