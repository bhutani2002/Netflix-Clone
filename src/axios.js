import axios from 'axios';

//Axios is a library that helps us make http requests to external resources

// Base url to make requests to the movie database.
const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;