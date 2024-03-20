
const movies = [
    {
        name: "Inception",
        year: 2010,
        director: "Christopher Nolan",
        picture: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
        name: "Oppenheimer",
        year: 2023,
        director: "Christopher Nolan",
        picture: "https://pics.filmaffinity.com/Oppenheimer-828933592-large.jpg"
    },
    {
        name: "The Dark Knight",
        year: 2008,
        director: "Christopher Nolan",
        picture: "https://m.media-amazon.com/images/I/A1exRxgHRRL.jpg"
    }
];

const movieList = document.getElementById('movieList');

const movieElements = movies.map(movie => {
    const li = document.createElement('li');

    const title = document.createElement('p');
    title.textContent = `Name: ${movie.name}`;
    li.appendChild(title);

    const year = document.createElement('p');
    year.textContent = `Year: ${movie.year}`;
    year.style.whiteSpace = 'pre-line'; 
    li.appendChild(year);

    const director = document.createElement('p');
    director.textContent = `Director: ${movie.director}`;
    li.appendChild(director);

    const poster = document.createElement('img');
    poster.src = movie.picture;
    poster.alt = `${movie.name} Poster`;
 
    poster.style.width = '400px'; 
 
    li.appendChild(poster);

    return li;
});
movieElements.forEach(movie => {
    movieList.appendChild(movie);
});