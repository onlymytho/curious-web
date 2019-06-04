import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component{
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         posterImage: PropTypes.string.isRequired
//     }

//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <MoviePoster src={this.props.posterImage} />
//             </div>
//         )
//     }
// }

function Movie({title, posterImage}) {
    return (
        <div>
            <h1>{title}</h1>
            <MoviePoster src={posterImage} />
        </div>
    )
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired
}


function MoviePoster({src}) {
    return (
        <img src={src} />
    )
}
MoviePoster.propTypes = {
    src: PropTypes.string.isRequired
}
// 위에거랑 똑같은 것. 위에거는 dumpComponent, 아래거는 smartComponent
// class MoviePoster extends Component {
//     static propTypes = {
//         src: PropTypes.string.isRequired
//     }
//     render() {
//         return (
//             <img src={this.props.src} />
//         )
//     }
// }
export default Movie