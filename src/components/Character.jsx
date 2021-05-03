import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { propTypes } from 'prop-types';
import { setCharacters, setSection } from '../actions';

import  { Container, Card } from 'react-bootstrap';


 const Character = (props) => {

    const [character, setCharacter] = useState(false);

    //props

    const {data, CharactersBraking} = props;
    const {char_id, name, img, nickname} = data

    return (
      <div className="card text-center bg-dark animate__animated animate__fadeInUp bg-personal mb-2">
        <div className="overflow ">
          <img src={img} alt="a wallpaper" className="card-img-top"  />
        </div>
        <div className="card-body text-light">
          <h4 className="card-title">{name}</h4>
          <p className="card-text text-secondary">
            {nickname
              ? nickname
              : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
          </p>
          <a
          
          >
            Go to {nickname}
          </a>
        </div>
      </div>


    )
}

const mapStateToProps = (state) => {
    return {

    }

};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps )(Character);