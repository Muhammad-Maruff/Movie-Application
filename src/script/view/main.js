import '../component/movie-tilt.js';
import DataSumber from '../data/data-sumber.js';
import DataDetails from '../data/data-details.js';

var main = () => {
    const movieListElement = document.querySelector("movie-tilt");
    const buttonSearch = document.getElementById('searchButtonElement');
    const valueSearch = document.getElementById('searchFilm');

    const onButtonSearchClicked = async() => {
        try {
            const result = await DataSumber.searchMovie(valueSearch.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    buttonSearch.addEventListener('click', onButtonSearchClicked);

    document.addEventListener('click', async function(element) {
        if (element.target.classList.contains('overlay-detail-movie')) {
            try {
                const movieId = element.target.dataset.movieid;
                const detailMovie = await DataDetails.showDetailMovie(movieId);
                modalDetailMovie(detailMovie);
            } catch (message) {
                console.log(message);
            }
        }
    });

    function modalDetailMovie(detailMovie) {
        const movieDetail = showDetailMovie(detailMovie);
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = movieDetail;
    }

    function showDetailMovie(detailMovie) {
        return `
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <img src="https://image.tmdb.org/t/p/w500/${detailMovie.poster_path}" alt="No Image" class="img-fluid">
                    <p><strong>Vote Average : </strong>${detailMovie.vote_average}</p>
                </div>
                <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item"><h4>${detailMovie.title} <span style="color:grey;">(${detailMovie.release_date})</span></h4></li>
                        <li class="list-group-item"><strong>Production Companie : </strong>${detailMovie.production_companies[0].name}</li>
                        <li class="list-group-item"><strong>Popularity : </strong>${detailMovie.popularity}</li>
                        <li class="list-group-item"><strong>Overview</strong>: <br>${detailMovie.overview}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }
};

export default main;