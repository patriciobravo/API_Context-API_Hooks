import React from 'react'

const GifsCard = ({ id, title, url }) => {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp bg-personal mb-2">
            <div className="overflow ">
                <img src={url} alt="a wallpaper" className="card-img-top" />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>

            </div>
        </div>

    )
}


export default GifsCard;