export const people = [
    {
        id: 1,
        name: "Nicolas",
        age: 10,
        gender: "female"
    },
    {
        id: 2,
        name: "Captain America",
        age: 104,
        gender: "hero"
    },
];

export let movies = [
    {
        id: 1,
        name: "The Greatest Showman",
        score: 1
    },
    {
        id: 2,
        name: "Avengers - End Game",
        score: 8
    },
    {
        id: 3,
        name: "Logan",
        score: 2
    },
    {
        id: 4,
        name: "Wonder Girls",
        score: 5
    }
]

export let trashcan = [

]
export const getMovies = () => movies;

export const getPersonById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
};

export const getMovieById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

