import React from 'react';

function FilmDetails(props) {

    const backdropURL = `https://image.tmdb.org/t/p/w1280/${props.film.backdrop_path}`;
    const posterURL = `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`;

    return (
          <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
            <div className="film-backdrop">
              <img src={backdropURL} />
            </div>
            <div className="film-meta">
              <h2 className="film-tagline">{props.film.tagline}</h2>
              <p className ="film-detail-overview">
                <img src={posterURL} className="film-detail-poster" />
                {props.film.overview}
              </p>
            </div>
            
          </div>
    );

}

export default FilmDetails;