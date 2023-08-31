class DataSumber {
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=f4cad3ca5afa8146ae803714adbf265b&query=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} Tidak Ditemukan`);
                }
            })
    }
}

export default DataSumber;