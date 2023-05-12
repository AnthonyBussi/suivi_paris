fetch(`https://api.themoviedb.org/3/search/movie?api_key=c13e3c8bfa9d391e29d9d0fba7e0902c&language=fr-FR&query=avengers`)
    .then(response => response.json())
    .then(result => {

        console.log(result);


    })