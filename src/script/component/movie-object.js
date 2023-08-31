import img from '../../images/no-images.jpg';

class MovieObject extends HTMLElement {
    constructor() {
        super();
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        const movieID = this._movie.id;
        const imageUrl = "https://image.tmdb.org/t/p/w500";
        this.innerHTML = `
            <style>
                movie-object{
                    margin-bottom: 50px
                }
                .movie-card{
                    border-bottom:2px solid #245285;
                    overflow:hidden;
                }
                #mov-card-${movieID}{  
                    background:url(${imageUrl}${this._movie.poster_path}), url(${img});
                    background-size:cover;
                    background-position: center;
                    border-radius:5px;
                    width: 220px;
                    height: 300px;
                    transition-duration: 0.5s;
                }
                
                .overlay-detail-movie {
                    background:#395255;
                    text-align:center;
                    opacity:0;
                    padding-top: 100%;
                    padding-bottom: 100%;
                    transition-duration: 0.4s;
                    color: white;
                }
                
                #mov-card-${movieID}:hover .overlay-detail-movie{
                    opacity: 0.9;
                    cursor: pointer;
                }

                .movie-content h5{
                    text-align: center;
                    width: 200px; 
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: block;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }   
            </style>    
            <div class="col-md-3 movie-content">
                <div class="movie-card" id="mov-card-${movieID}">
                    <div class="overlay-detail-movie" data-toggle="modal" data-target="#detailMovie" data-movieid="${movieID}">
                        <span id="view">${this._movie.original_title}</span>
                    </div>  
                </div>
                <h5>${this._movie.original_title}</h5>
            </div>
        `;
    }
}

customElements.define("movie-object", MovieObject);