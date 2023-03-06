import React from 'react';

import './page-header.scss';

import bg from '../../assets/footer-bg.jpg';
import movies from '../../assets/movies.png';
import tv from '../../assets/tv.png';



const PageHeader = props => {
    return (
        <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
            {props.children === 'Movies'? <img src={movies} alt="Tv Series" /> : <img src={tv} alt="Tv Series" /> }
            {/* <h2>{props.children}</h2> */}
        </div>
    );
}




export default PageHeader;
