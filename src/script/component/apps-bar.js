class AppBars extends HTMLElement {

    connectedCallback() {
        this.render();
    }
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
    render() {
        this.innerHTML = `
        <style>
            .jumbotron {
                background-color: #245285;
                color: rgb(36, 132, 241);
            }
            .jumbotron h1 span{
                font-weight: 500;
            }
            
            .jumbotron .input-group{
                display: flex;
                box-shadow: 0px 3px 6px navy;
                width: 59%;
                z-index: 0;
            }
            
            .jumbotron .btn{
                color: #ffffff;
                background:#245285;
            }

            @media screen and (max-width: 767px) {
                .jumbotron h1{
                    font-size: 24pt;
                }
                .jumbotron .input-group{
                    width: 100%;
                }
            }
        </style>
        <div class="jumbotron text-center">
            <div class="container mt-5">
                <div
                    class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
                    style="background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/003.webp');">
                    <h1 class="display-4 mb-5">Web Movie</h1>
                    <p>Temukan Film Kesukaan Anda!</p>
                    <div class="input-group mb-3 ml-auto mr-auto">
                        <input type="text" class="form-control" id="searchFilm" placeholder="Cari Movie Kesukaanmu!" aria-label="Cari Movie Kesukaanmu!" aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="submit" id="searchButtonElement">Search</button>
                        </div>
                    </div>
                </div>`;
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("apps-bar", AppBars);