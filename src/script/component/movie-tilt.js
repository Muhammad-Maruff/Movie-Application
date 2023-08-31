import './movie-object.js';

class MovieTilt extends HTMLElement {
    constructor() {
        super();
    }

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            movie-tilt{
                width: 100%;
                display: flex;
                justify-content: center;
            }
        </style>`;
        this._movies.forEach(movie => {
            const movieTiltElement = document.createElement("movie-object");
            movieTiltElement.movie = movie;
            this.appendChild(movieTiltElement);
        });
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder text-center">${message}</h2>`
    }
}
customElements.define("movie-tilt", MovieTilt);