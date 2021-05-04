import React, { useState } from 'react'
import GifItem from './GifItem';
import GifsData from './GifsData';
import '../assets/css/styles.scss';

const GifExpertsSearch = () => {

    const [categories, setCategories] = useState(['Dragon Ball Z']);


    return (
        <div className="container">
            <h2 className="text-center">Buscar Gif</h2>
            <GifsData setCategories={setCategories} />
            <hr />

            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row">
                    {
                        categories.map((item) => (
                            <div className="col-sm-12 mt-3" key={item}>
                                <GifItem
                                    key={item}
                                    item={item} />
                            </div>
                        ))}
                </div>
            </div>


        </div>
    )
}

export default GifExpertsSearch;