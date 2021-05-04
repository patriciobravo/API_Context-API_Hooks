
import React from 'react';

const Character = (props) => {

  //props

  const { data } = props;
  const { name, img, nickname } = data


  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp bg-personal mb-2">
      <div className="overflow ">
        <img src={img} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{name}</h4>
        <p className="character__details__item-more">
          {nickname}
        </p>
      </div>


    </div>
  )
}

export default Character;